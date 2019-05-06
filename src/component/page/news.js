import React, { Component } from 'react';
import axios from 'axios';

const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys();

class News extends Component {
    state = {
        newsArr:[]
    }

    componentDidMount(){
         axios.get("/api/articlelist")
          .then((response) => {
               console.log(response);
               console.log(response.data);
               this.setState({
                newsArr: response.data
               })
          })
          .catch(function(error){
               console.log(error);
          });
    }
    getImages = (url) => {
        let image = require("../../static/picture" + images.filter(x => x === url)[0].slice(1))
        return image
    }

    render() {
        const newlist = this.state.newsArr.length>0?this.state.newsArr.map((item,index)=>
                        <li >
                            <div className="n-pic">
                                <span onClick={()=>this.props.history.push(`news_detail/${item.articleid}`)}>
                                <img src={`http://localhost:8888/upload/${item.articlesrc}`} alt="" />
                                    <img className="news-cover" src={this.getImages('./news-cover.png')} alt="" />
                                </span>
                            </div>
                            <h2>{item.articletitle}</h2>
                            <p title={item.content}>{`${item.content.substr(0, 100)}...`}</p>
                            <div className="time">
                                <span className="smallspp">MK VISION PHOTOGRAPHY</span>
                                <em>TIME:{item.publishtime}</em>
                            </div>
                            <a className="browse" onClick={() => this.props.history.push(`news_detail/${item.articleid}`)} >NOW BROWSE!</a>
                        </li>
        ) : ""
        return (
            <div style={{marginTop:"135px"}}>
                <div className="news_banner">
                      <img src={this.getImages('./newcen_banner.jpg')} alt="" />
                </div>
                <div className="new_tit">
                    <h1>新闻中心</h1>
                    <h2>News About Shooting Skills</h2>
                </div>
                <div className="news_list">
                    <ul className="list">                
                        {newlist}
                    </ul>
             </div>
        </div>
        )
    }
}
export default News
