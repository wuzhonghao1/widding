import React, { Component } from 'react';
import { newsArr } from "../data/newsData"
// import axios from 'axios';
const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

class News extends Component {
    state = {
        newsArr:[]
    }
    componentDidMount(){
        // 这里调用接口 TODO:
        // axios.get("接口名称")
        // .then((response) => {
        //     this.setState({
        //         newsArr: response.data
        //     })
        // })
        this.setState({
            newsArr: newsArr
        })
    }
    getImages = (url) => {
        let image = require("../../static/picture" + images.filter(x => x === url)[0].slice(1))
        return image
    }

    render() {
        const newlist = this.state.newsArr.map((item,index)=>
                        <li >
                            <div className="n-pic">
                                <a href={`${item.href}/${item.id}`}>
                                    <img src={this.getImages(item.src)} alt="" />
                                    <img className="news-cover" src={this.getImages(item.cov_src)} alt="" />
                                </a>
                            </div>
                            <h2>{item.title}</h2>
                            <p>{item.abstract}</p>
                            <div className="time">
                                <span className="smallspp">MK VISION PHOTOGRAPHY</span>
                                <em>TIME:{item.time}</em>
                            </div>
                            <a className="browse" href={item.href}>NOW BROWSE!</a>
                        </li>
   )
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
