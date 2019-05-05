import React, { Component } from 'react';
// import { newsdetail} from '../data/newdetail'
import axios from 'axios';
const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

class News_detail extends Component {    
    state={
        newsdetail:{}
    }
    async componentDidMount(){
        let id = this.props.match.params.id 

        // 这里调用接口 TODO:
        // axios.get("接口名称",参数就是上面的这个id)
        axios.get("/api/articlelist", id)
         .then((response) => {
            this.setState({
                newsArr: response.data
            })
        })
        .catch(function(error){
            console.log(error);
       });
        // await this.setState({
        //     newsdetail: newsdetail
        // })
        console.log(this.state.newsdetail.title);
        
    }

    getImages = (url) => {
        let image = require("../../static/picture" + images.filter(x => x === url)[0].slice(1))
        return image
    }

    render() {
        return (
            <div style={{marginTop:"135px"}}>
                    <div className="news_banner">
                        <img src={this.getImages('./new_center.jpg')} alt="" />
                    </div>
                    <div className="new_tit">
                        <h1>新闻中心</h1>
                        <h2>News About Shooting Skills</h2>
                    </div>
                    <div className="article_content">
                        <div className="back_list">
                              <a href="http://localhost:3000/#/news"> 
                                 &gt; 返回列表 
                              </a>
                        </div>
                                                                    
                        {/* 后台数据前端渲染 */}
                        <h1>{this.state.newsdetail.articletitle ? this.state.newsdetail.articletitle:""}</h1>
                        <h2>Time:{this.state.newsdetail.publishtime ? this.state.newsdetail.publishtime : ""}</h2>
                        <div className="article_content_txt" style={{marginTop:"50px"}}>
                            <div style={{textAlign: "center"}}>
                                {/* <img alt="" src={this.getImages(this.state.newsdetail.articlesrc ? this.state.newsdetail.articlesrc : "")} /> */}
                            </div>    
                            <p>
                               {this.state.newsdetail.content ? this.state.newsdetail.content : ""} 
                            </p>                           
                        </div>
                    </div>
            </div>
        )
    }
}
export default News_detail