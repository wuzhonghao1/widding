import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import CenterMode from '../centermode';
import CustomArrows from '../customarrows';
// import  '../../public/js/jquery.SuperSlide.2.1.1.js';
// import '../../public/js/jquery1.42.min.js';
import $ from 'jquery';

const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

class Index extends Component {
    async componentDidMount(){
    }

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
                
                 <CustomArrows />

                 
            <div className="bottom_show">
                 <img src={this.getImages('./shou7.jpg')} alt="" />
            </div>
        
        </div>
        )
    }
}
export default Index
