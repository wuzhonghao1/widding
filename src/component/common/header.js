import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import chinaData from "../../data/chinaData"
import chinaData1 from "../../data/chinaData1"
import foreignData from "../../data/foreignData"
import foreignData1 from "../../data/foreignData1"


const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()
class Header extends Component {
    state = {
        
    }
    async componentDidMount(){
       
    }
    getImages = (url) => {
        let image = require("../../static/picture" + images.filter(x => x === url)[0].slice(1))
        return image
    }

    render() {
        return (
            <div>
                <div className="wrap_top">
                    <div className="top" id="top">
                        <ul>
                            <li>0311-85520710</li>
                            {/* <li id="tmall"><img style={{ "paddingTop": 2 }} src={this.getImages('./tmall.png')} alt="" /></li>  */}
                            <li><a href="https://weibo.com/mokasj?is_hot=1" target="_blank"><img src={this.getImages('./weibo.png')} alt="" /></a></li>
                            <li id="weixin"><img src={this.getImages('./weixin.png')} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className="wrap_header" id="wrap_header">
                    <div className="header"> 
                        <a href="/"><img className="logo" src={this.getImages('./mk2.jpg')} alt="" /></a>
                        <h1 className="moka">摩卡视觉</h1>
                        <ul className="nav">
                        {/* 这里循环数据 */}
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/brand">品牌简介</Link></li>
                            <li><Link to="/show">摄影展示</Link></li>
                            <li><Link to="/news">新闻中心</Link></li>
                            {/* <li><Link to="#">明星网红</Link>
                                <ul
                                    style={{"display":"none","position":"absolute","zIndex":999,"top":100,"color":"#000","width":100,"backgroundColor":"rgba(0,0,0,0.5)","height":96,"paddingTop":10,"textAlign":"center"}}>
                                    <a href="/" style={{"color":"#fff","fontSize":"16px","paddingLeft":"17px"}}>明星专区</a>
                                    <a href="/" style={{"color":"#fff","fontSize":"16px","paddingLeft":"17px"}}>网红专区</a>
                                </ul>
                            </li> */}
                            <li><Link to="/comment">真实评价</Link></li>
                            <li><Link to="/order">预约拍摄</Link></li>
                        </ul>
                        {/* <dl style={{"paddingRight":0}}>
                            <dd className="index_0"><a><img src={this.getImages('./china.png')} 
                            alt="中国" /></a></dd>
                            <dd className="index_1"><a><img src={this.getImages('./word.png')} alt="全世界" /></a></dd>
                        </dl> */}
                        <div className="weixin_open">
                            <img src={this.getImages('./weixin_open.png')} alt="" />
                        </div>
                        {/* <div className="tmall_open">
                            <img src={this.getImages('./tmall_open.png')} alt="" />
			            </div> */}
                    </div>
                    {/* <div className="index-slide" id="index_0">
                        <ul className="ul2_1">
                            {chinaData.map(item => <li key={item.key}><img src={this.getImages(item.imgUrl)} alt="" /><Link to={item.url}>{item.name}</Link></li>)}
			            </ul>
                        <ul className="ul1_1">
                            {chinaData1.map(item => <li key={item.key}><img src={this.getImages(item.imgUrl)} alt="" /><Link to={item.url}>{item.name}</Link></li>)}
			            </ul>
		            </div>
                    <div className="index-slide" style={{"display": "none"}} id="index_1">
                        <ul className="ul2_2">
                            {foreignData.map(item => <li key={item.key}><img src={this.getImages(item.imgUrl)} alt="" /><Link to={item.url}>{item.name}</Link></li>)}
                        </ul>
                        <ul className="ul1_2">
                            {foreignData1.map(item => <li key={item.key}><img src={this.getImages(item.imgUrl)} alt="" /><Link to={item.url}>{item.name}</Link></li>)}
                        </ul>
                    </div>
                    <div style={{"position":'absolute','right':126,'top':20, 'zIndex':9999}}>
                        <a target="_blank" href="/shengming/">
                            <img src={this.getImages('./yanzhengshengming.png')}  alt="严正声明" style={{"width":"3.5vw"}} /> 
                        </a>
                    </div> */}
                </div>
            </div>
        )
    }
}
export default Header