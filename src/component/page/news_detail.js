import React, { Component } from 'react';

const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

class News_detail extends Component {
    async componentDidMount(){
        axios.get("/api/articlelist")
         .then((response)=>{
             console.log(response);
             console.log(response.data);
             newsArr=response.data;
             console.log("newsArr"+newsArr);
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
                        <h1>{item.articletitle}</h1>
                        <h2>Time:{item.publishtime}</h2>                        
                        <div className="article_content_txt" style={{marginTop:"50px"}}>
                             <div style={{textAlign: "center"}}>
                                <img alt="" src={this.getImages(item.articlesrc)} />
                            </div>    
                            <p>{item.content}</p>
                        </div>
                    </div>
            </div>
        )
    }
}
export default News_detail