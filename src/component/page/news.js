import React, { Component } from 'react';

const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

class News extends Component {
    state = {
        newsArr:[{
            href:'http://localhost:3000/#/news_detail',
            src:'./new01.jpg' ,
            cov_src:'./news-cover.png',
            title:'婚纱摄影哪家好？从婚纱开始',
            abstract:'婚照和情侣照最大的差别，相比就是在服装了。我们在平时的时候，选择服装都是有一个适合自己的身材的服装',
            time:'2019-3-7',
     },{    
            href:'http://localhost:3000/#/news_detail',
            src:'./newl.jpg' ,
            cov_src:'./news-cover.png',
            title:'婚纱内景拍摄前注意事项',
            abstract:'内景拍摄是传统的婚纱照拍摄方式，通常都是用单色的布景或者是简单的室内摆设作为背景，新人的表现会非常抢镜',
            time:'2019-3-10'
     },{
            href:'http://localhost:3000/#/news_detail02',
            src:'./newll.jpg' ,
            cov_src:'./news-cover.png',
            title:'婚纱外景拍摄前注意事项',
            abstract:'外拍地点：先确认你们要去的地点，如果不只一处，请确认清楚流程，穿什么衣服都先讲好。问摄影师、造型师需要带的东西。',
            time:'2019-3-15'
     },{
            href:'http://localhost:3000/#/news_detail',
            src:'./neww.jpg' ,
            cov_src:'./news-cover.png',
            title:'如何选好自己的婚纱照',
            abstract:'四季拍摄婚纱照的搭配 春夏秋冬四季，由于其气候、温度、环境色相的影响，拍摄婚纱照也有不尽相同的注意事项，尤其以婚纱',
            time:'2019-3-18'
     },{
        href:'http://localhost:3000/#/news_detail',
        src:'./zhuyi.jpg' ,
        cov_src:'./news-cover.png',
        title:'婚鞋的挑选秘诀',
        abstract:'拍摄一套逞心如意的婚纱照并不是新人想象的那么简单，不仅需要摄影师和新人的配合，还要新人超常的表现',
         time:'2019-3-24'
     },{
        href:'http://localhost:3000/#/news_detail',
        src:'./xin.jpg' ,
        cov_src:'./news-cover.png',
        title:'拍婚纱照的注意事项',
        abstract:'预约 多走几家影楼询问价格内容，其它影楼有的优惠，只要你提出来，都会满足你。影楼不会答应你拿走套系内容',
         time:'2019-3-26'
     },{
        href:'http://localhost:3000/#/news_detail',
        src:'./xiao.jpg' ,
        cov_src:'./news-cover.png',
        title:'小个子新娘怎么拍婚纱照',
        abstract:'在前段时间结婚引起广大群众热议的王祖蓝和娇妻的婚纱照就成为了一段时间的热门话题，男矮女高的婚纱照本来是很难消化拍摄',
         time:'2019-3-28'
     },{
        href:'http://localhost:3000/#/news_detail',
        src:'./hunsha.jpg' ,
        cov_src:'./news-cover.png',
        title:'教你拍婚纱照不要紧张哦！',
        abstract:'在拍摄婚纱照的时候，很多新人一开始都觉得自己会紧张，在拍摄的时候就会变得手足无措，不知道到底该怎么去摆姿势拍摄，',
         time:'2019-3-31'
     },{
        href:'http://localhost:3000/#/news_detail',
        src:'./gexing.jpg' ,
        cov_src:'./news-cover.png',
        title:'教你拍个性婚纱照',
        abstract:'很多人在拍摄婚纱照的时候特别紧张，面对摄像头，不知所措，不知道该怎样去摆姿势，唯一视觉小编教你如何摆姿势更漂亮',
         time:'2019-4-1'
     },{
        href:'http://localhost:3000/#/news_detail',
        src:'./chai.jpg' ,
        cov_src:'./news-cover.png',
        title:'短发新娘如何拍摄出美的婚纱照',
        abstract:'时尚，每年都是有变化的，今年的发型最流行的还是短发造型，所以今年将要结婚的新娘也是有很多是短发的造型的。当然相对于',
         time:'2019-4-3'
     },{
        href:'http://localhost:3000/#/news_detail',
        src:'./mofan.jpg' ,
        cov_src:'./news-cover.png',
        title:'新娘的百变发型',
        abstract:'如果说到女人一辈子中重要的时刻是什么时候，穿着梦中的嫁衣缓缓的向着新郎走来，踩着婚礼进行曲踏在玫瑰花瓣落脚',
         time:'2019-4-6'
     },{
        href:'http://localhost:3000/#/news_detail',
        src:'./waijing.jpg' ,
        cov_src:'./news-cover.png',
        title:'全球战略品牌发布会',
        abstract:'2019年3月14日，以“YOUNG”为主题的摩卡视觉全球战略品牌发布会，在先天下隆重举办,此次发布会正式启动“全球化战略品牌”',
         time:'2019-4-8'
     }]
    }
    getImages = (url) => {
        let image = require("../../static/picture" + images.filter(x => x === url)[0].slice(1))
        return image
    }

    render() {
        const newlist = this.state.newsArr.map((item,index)=>
                        <li >
                            <div className="n-pic">
                                <a href={item.href}>
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
