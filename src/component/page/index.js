import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Button } from 'antd';
import CenterMode from '../centermode';
import { Link } from 'react-router-dom';
// import $ from  'jquery';
// import '../../static/js/jquery.min.js';
// import '../../static/js/jquery.carouFredSel-6.0.4-packed.js';
// import '../../static/js/jquery.SuperSlide.2.1.1.js';



const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

class Index extends Component {
    getImages = (url) => {
        let image = require("../../static/picture" + images.filter(x => x === url)[0].slice(1))
        return image
    }

    render() {
        return (
            <div>
                <div className="index_all_video" style={{position:"relative",height:"490px",width:"100%",marginTop:"135px"}}>
                    <video id="index_all_video" autoPlay loop="loop" muted={true} width="100%" height="100%" style={{objectFit:"fill"}} src="https://cloud.video.taobao.com//play/u/1057559553/p/2/e/6/t/1/50227372667.mp4" name="media">
                    您的浏览器不支持 video 标签。
                    </video>
                    <div className="index_zw"></div>
                    <div className="i-all">
                        <div className="i-content">
                            <img className="img-fluid i-english" src="https://img.bj520.com/newtheme/images/icon/logo_2.png" alt=""/>
                        </div> 
                    </div>
                </div>

                <div className="brand_words" style={{ marginTop: "3%"}}>
                    <p style={{marginBottom: "2%"}}>摩卡视觉 MK VISION</p>
                    <span>FRIEND IS WHO CAN GIVE YOU STRENGTH AT LAST LOVE IS A LAMP,WHILE FRIENDSHIP IS THE SHADOW.WHEN WHE LAMP IS OFF.YOU WILL</span>
                    <span>FIND THE SHADOW EVERYWHERE.FRIEND IS WHO CAN GIVE YOU STRENGTH AT LAST.</span>
                </div>

                <Carousel autoplay className="allSlide">
                <div><img className="fluid" src={this.getImages('./homebn00.jpg')} alt=""/></div>
                <div><img className="fluid" src={this.getImages('./homebn001.jpg')} alt=""/></div>
                <div><img className="fluid" src={this.getImages('./homebn002.jpg')} alt=""/></div>
                <div><img className="fluid" src={this.getImages('./homebn003.jpg')} alt=""/> </div>                 
                </Carousel>

                <div className="brand_words" style={{ marginTop:"5.3%"}}>
                    <h1>LATEST WEDDING PHOTOS</h1>
                    <p style={{marginBottom: "2%"}}>摩卡视觉 最新客照</p>
                    <span>FRIEND IS WHO CAN GIVE YOU STRENGTH AT LAST LOVE IS A LAMP,WHILE FRIENDSHIP IS THE SHADOW.WHEN WHE LAMP IS OFF.YOU WILL</span>
                    <span>FIND THE SHADOW EVERYWHERE.FRIEND IS WHO CAN GIVE YOU STRENGTH AT LAST.</span>
                </div>

                <CenterMode />

                <div className="brand_words" style={{ marginTop:"5.3%"}}>
                    <h1>NEWS CENTER</h1>
                    <p style={{marginBottom: "2%"}}>摩卡视觉 新闻中心</p>
                    <span>FRIEND IS WHO CAN GIVE YOU STRENGTH AT LAST LOVE IS A LAMP,WHILE FRIENDSHIP IS THE SHADOW.WHEN WHE LAMP IS OFF.YOU WILL</span>
                    <span>FIND THE SHADOW EVERYWHERE.FRIEND IS WHO CAN GIVE YOU STRENGTH AT LAST.</span>
                </div>
                <div className="wrap_news">
                    <div className="news"> 
                    <a className="next"><img src={this.getImages('./prev.png')} alt="" /></a> 
                    <a className="prev"><img src={this.getImages('./next.png')} alt="" /></a>
                    <div className="bd">
                        <div className="tempWrap" style={{overflow:"hidden", position:"relative", width:"1192px"}}>
                            <ul className="picList" style={{width:"3874px", position:"relative", overflow:"hidden", padding:"0px", margin:"0px", left: "-1788px"}}>
                                <li className="clone" style={{float: "left", width:"270px"}}> 
                                    <Link to="/news">
                                        <div className="pic"><img src={this.getImages('./new01.jpg')} /></div>
                                        <div className="txt">
                                            <h2>MK PHOTO | 婚纱摄影</h2>
                                            <p>婚照和情侣照最大的差别，相比就是在服装了。我们在平时的时候，选择服装都是有一个适合自己的身材的服装</p>
                                            <span><em>MK VISION PHOTO</em><em>TIME:2018.12.10</em></span> 
                                       </div>
                                    </Link> 
                                </li>
                                <li style={{float: "left", width:"270px"}}> 
                                    <Link to="/news">
                                        <div className="pic"><img src={this.getImages('./short.jpg')} /></div>
                                        <div className="txt">
                                            <h2>短发新娘如何拍摄出美的婚纱照</h2>
                                            <p>时尚，每年都是有变化的，今年的发型最流行的还是短发造型，所以今年将要结婚的新娘也是有很多是短发的造型的。当然相对于</p>
                                            <span><em>MK VISION PHOTO</em><em>TIME:2019.04.01</em></span> 
                                        </div>
                                    </Link> 
                                </li>
                                <li style={{float: "left", width: "270px"}}> 
                                <Link to="/news">
                                        <div className="pic"><img src={this.getImages('./gexing.jpg')} /></div>
                                        <div className="txt">
                                            <h2>摩卡视觉教你拍个性婚纱照</h2>
                                            <p>很多人在拍摄婚纱照的时候特别紧张，面对摄像头，不知所措，不知道该怎样去摆姿势，唯一视觉小编教你如何摆姿势更漂亮</p>
                                            <span><em>MK VISION PHOTO</em><em>TIME:2019.02.11</em></span> 
                                        </div>
                                    </Link>
                                </li>
                                <li style={{float: "left", width: "270px"}}> 
                                    <Link to="/news">
                                        <div className="pic"><img src={this.getImages('./zhuyi.jpg')} /></div>
                                        <div className="txt">
                                            <h2>小个子新娘怎么拍婚纱照</h2>
                                            <p>在前段时间结婚引起广大群众热议的王祖蓝和娇妻的婚纱照就成为了一段时间的热门话题，男矮女高的婚纱照本来是很难消化拍摄</p>
                                            <span><em>MK VISION PHOTO</em><em>TIME:2019.01.30</em></span> 
                                        </div>
                                    </Link> 
                                </li>
                                <li style={{float: "left", width: "270px"}}>     
                                    <Link to="/news">
                                        <div className="pic"><img src={this.getImages('./xin.jpg')} /></div>
                                        <div className="txt">
                                            <h2>唯一视觉提醒您拍婚纱照的注意事项</h2>
                                            <p>预约 多走几家影楼询问价格内容，其它影楼有的优惠，只要你提出来，都会满足你。影楼不会答应你拿走套系内容</p>
                                            <span><em>MK VISION PHOTO</em><em>TIME:2019.01.18</em></span> 
                                        </div>
                                    </Link> 
                                </li>
                                <li style={{float: "left", width: "270px"}}> 
                                    <Link to="/news">
                                        <div className="pic"><img src={this.getImages('./xiao.jpg')} /></div>
                                        <div className="txt">
                                            <h2>婚纱外景拍摄前注意事项</h2>
                                            <p>外拍地点：先确认你们要去的地点，如果不只一处，请确认清楚流程，穿什么衣服都先讲好 。</p>
                                            <span><em>MK VISION PHOTO</em><em>TIME:2019.01.05</em></span> 
                                        </div>
                                    </Link> 
                                </li>
                                <li style={{float: "left", width: "270px"}}> 
                                    <Link to="/news">
                                        <div className="pic"><img src={this.getImages('./newl.jpg')} /></div>
                                        <div className="txt">
                                            <h2>婚纱内景拍摄前注意事项</h2>
                                            <p>内景拍摄是传统的婚纱照拍摄方式，通常都是用单色的布景或者是简单的室内摆设作为背景，新人的表现会非常抢镜...</p>
                                            <span><em>MK VISION PHOTO</em>&nbsp;&nbsp;<em>TIME:2018.12.26</em></span> 
                                        </div>
                                    </Link> 
                                </li>
                                <li style={{float: "left", width: "270px"}}> 
                                    <Link to="/news">
                                        <div className="pic"><img src={this.getImages('./newll.jpg')} /></div>
                                        <div className="txt">
                                            <h2>摩卡视觉教你拍婚纱照不要紧张哦~</h2>
                                            <p>在拍摄婚纱照的时候，很多新人一开始都觉得自己会紧张，在拍摄的时候就会变得手足无措，不知道...</p>
                                            <span><em>MK VISION PHOTO</em>&nbsp;&nbsp;<em>TIME:2019.1.17</em></span> 
                                        </div>
                                    </Link> 
                                </li>
                                <li style={{float: "left", width: "270px"}}> 
                                    <Link to="/news">
                                        <div className="pic"><img src={this.getImages('./neww.jpg')} /></div>
                                        <div className="txt">
                                            <h2>婚鞋的挑选秘诀</h2>
                                            <p>拍摄一套逞心如意的婚纱照并不是新人想象的那么简单，不仅需要摄影师和新人的配合，还要新人超常的表现...</p>
                                            <span><em>MK VISION PHOTO</em>&nbsp;&nbsp;<em>TIME:2019.2.10</em></span> 
                                        </div>
                                    </Link> 
                                </li>
                                <li className="clone" style={{float: "left", width: "270px"}}> 
                                <Link to="/news">
                                        <div className="pic"><img src={this.getImages('./mofan.jpg')} /></div>
                                        <div className="txt">
                                            <h2>如何选好自己的婚纱照</h2>
                                            <p>四季拍摄婚纱照的搭配 春夏秋冬四季，由于其气候、温度、环境色相的影响，拍摄婚纱照也有不尽相同的注意事项，尤其以婚纱...</p>
                                            <span><em>MK VISION PHOTO</em>&nbsp;&nbsp;<em>TIME:2019.04.01</em></span> 
                                        </div>
                                    </Link> 
                                </li>
                                <li className="clone" style={{float: "left", width: "270px"}}> 
                                    <Link to="/news">
                                        <div className="pic"><img src={this.getImages('./hunsha.jpg')} /></div>
                                        <div className="txt">
                                            <h2>世界拳王邹市明&amp;冉莹颖...</h2>
                                            <p>世界拳王邹市明&amp;冉莹颖携手唯一旅拍合作拍摄“北纬18度”主题大片</p>
                                            <span><em>MK VISION PHOTO</em><em>TIME:2019.02.11</em></span> 
                                        </div>
                                    </Link> 
                                </li>
                                <li className="clone" style={{float: "left", width: "270px"}}> 
                                    <Link to="/news">
                                        <div className="pic"><img src={this.getImages('./yang.jpg')} /></div>
                                        <div className="txt">
                                            <h2>新娘的百变发型</h2>
                                            <p>如果说到女人一辈子中重要的时刻是什么时候，穿着梦中的嫁衣</p>
                                            <span><em>MK VISION PHOTO</em><em>TIME:2019.01.30</em></span> 
                                        </div>
                                    </Link> 
                                </li>
                                <li className="clone" style={{float: "left", width: "270px"}}> 
                                    <Link to="/news">
                                        <div className="pic"><img src={this.getImages('./chai.jpg')} /></div>
                                        <div className="txt">
                                            <h2>ONLY PHOTO | 柴碧...</h2>
                                            <p>和唯一视觉一同走进柴碧云的世界，一同寻觅“自类”的真谛</p>
                                            <span><em>MK VISION PHOTO</em><em>TIME:2019.01.18</em></span> 
                                        </div>
                                    </Link> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_show">
                 <img src={this.getImages('./shou7.jpg')} alt="" />
            </div>
            {
                // console.log(jQuery)
                
                // jQuery(".news").slide({ titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "leftLoop", autoPlay: true, vis: 4, trigger: "click" });
            }
        </div>
        )
    }
}
export default Index
