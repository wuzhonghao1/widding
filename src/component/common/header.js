import React, { Component } from 'react'
const requireContext = require.context("../../static/picture", true, /^\.\/.*\.png$/);
const images = requireContext.keys()
class Header extends Component {
    state = {

    }
    getImages = (b) => {
        let image = require("../../static/picture" + images.filter(x => x === b)[0].slice(1))
        return image
    }
    render() {
        return (
            <div>
                <div className="wrap_top">
                    <div className="top" id="top">
                        <ul>
                            <li>400-0521-202</li>
                            <li id="tmall"><img style={{ "paddingTop": 2 }} src={this.getImages('./tmall.png')} alt="" /></li>
                            <li><a><img src={this.getImages('./weibo.png')} alt="" /></a></li>
                            <li id="weixin"><img src={this.getImages('./weixin.png')} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className="wrap_header" id="wrap_header">
                    <div className="header"> <a href="/"> <img className="logo" src="/static/picture/logo.jpg" alt="" /></a>
                        <ul className="nav">
                        {/* 这里循环数据 */}
                            <li><a href="/">首页</a></li>
                            <li><a href="/brand">品牌简介</a></li>
                            <li><a href="/sanyakz">真实客片</a></li>
                            <li><a href="/sanyawan">旅拍作品</a></li>
                            <li><a href="/sanyady">微电影</a></li>
                            <li><a href="/news">新闻中心</a></li>
                            <li><a href="#">明星网红</a>
                                <ul
                                    style={{"display":"none","position":"absolute","zIndex":999,"top":100,"color":"#000","width":100,"backgroundColor":"rgba(0,0,0,0.5)","height":96,"paddingTop":10,"textAlign":"center"}}>
                                    <a href="/youhui/" style={{"color":"#fff","fontSize":"16px","paddingLeft":"17px"}}>明星专区</a>
                                    <a href="/bldwh/" style={{"color":"#fff","fontSize":"16px","paddingLeft":"17px"}}>网红专区</a>
                                </ul>
                            </li>
                            <li><a href="/real">真实好评</a></li>
                            <li><a href="/activity">优惠活动</a></li>
                        </ul>
                        <dl style={{"paddingRight":0}}>
                            <dd className="index_0"><a><img src={this.getImages('./china.png')} 
                            alt="中国" /></a></dd>
                            <dd className="index_1"><a><img src={this.getImages('./word.png')} alt="全世界" /></a></dd>
                        </dl>
                        <div className="weixin_open">
                            <img src={this.getImages('./weixin_open.png')} alt="" />
                        </div>
                        <div className="tmall_open">
                            <img src={this.getImages('./tmall_open.png')} alt="" />
			            </div>
                    </div>
                    <div className="index-slide" id="index_0">
                        <ul className="ul2_1">
                            <li><img src={this.getImages('./place.png')}  alt="" /><a href="/sanyawan/">三亚</a></li>{/* 这里循环数据 */}
			            </ul>
                        <ul className="ul1_1">
                            <li><img src={this.getImages('./place.png')} alt="" /><a href="/xizang">西藏</a></li>{/* 这里循环数据 */}
			            </ul>
		            </div>
                    <div className="index-slide" style={{"display": "none"}} id="index_1">
                        <ul className="ul2_2">
                            {/* 这里循环数据 */}
                            <li><img src="/static/picture/place.png" alt="" /><a href="/pujidaozp/">普吉岛</a></li>
                            <li><img src="/static/picture/place.png" alt="" /><a href="/index.php">巴厘岛</a></li>
                            <li><img src="/static/picture/place.png" alt="" /><a href="/maerdaifuzp/">马尔代夫</a></li>
                            <li><img src="/static/picture/place.png" alt="" /><a href="/index.php?m=content&c=index&a=lists&catid=63">日本</a></li>
                            <li><img src="/static/picture/place.png" alt="" /><a href="/index.php?m=content&c=index&a=lists&catid=64">巴黎</a></li>
                            <li><img src="/static/picture/place.png" alt="" /><a href="/index.php?m=content&c=index&a=lists&catid=65">布拉格</a></li>
                            <li className="move-right2"><img src="/static/picture/place.png" alt="" /><a href="/index.php?m=content&c=index&a=lists&catid=66">普罗旺斯</a></li>
                            <li className="move-right2"><img src="/static/picture/place.png" alt="" /><a href="/index.php?m=content&c=index&a=lists&catid=67">伦敦</a></li>
                            <li className="move-right2"><img src="/static/picture/place.png" alt="" /><a href="/index.php?m=content&c=index&a=lists&catid=68">圣托里尼</a></li>
                            <li className="move-right2"><img src="/static/picture/place.png" alt="" /><a href="/index.php?m=content&c=index&a=lists&catid=69">威尼斯</a></li>
                        </ul>
                        <ul className="ul1_2">
                            {/* 这里循环数据 */}
                            <li><img src="/static/picture/place.png" alt="" /><a href="/index.php?m=content&c=index&a=lists&catid=70">罗马</a></li>
                            <li><img src="/static/picture/place.png" alt="" /><a href="/index.php?m=content&c=index&a=lists&catid=75">毛里求斯</a></li>
                            <li><img src="/static/picture/place.png" alt="" /><a href="/index.php?m=content&c=index&a=lists&catid=76">留尼旺</a></li>
                            <li><img src="/static/picture/place.png" alt="" /><a href="/index.php?m=content&c=index&a=lists&catid=193">纽约</a></li>
                            <li><img src="/static/picture/place.png" alt="" /><a href="/index.php?m=content&c=index&a=lists&catid=194">洛杉矶</a></li>
                        </ul>
                    </div>
                    <div style={{"position":'absolute','right':126,'top':20, 'zIndex':9999}}>
                        <a target="_blank" href="/shengming/">
                            {/* <img src={this.getImages('./yanzhengshengming.png')}  alt="严正声明" style={{"width":"3.5vw"}} /> */}
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header