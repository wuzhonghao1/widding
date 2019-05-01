import React, { Component } from "react";
import Slider from "react-slick";
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import "../static/css/slick.css";
import "../static/css/slick-theme.css";
import "../static/css/docs.css"; 
import img1 from "../static/picture/prev.png";
import img2 from "../static/picture/next.png";




const requireContext = require.context("../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", marginRight: "75px" }}
        onClick={onClick}
      >
         <img src={img2} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",zIndex: "10",marginLeft: "50px"}}
        onClick={onClick}
      >
      <img  src={img1}/>
      </div>
    );
  }  

class CustomArrows extends React.Component {
  getImages = (url) => {
    // console.log(images.filter(x => x === url));
    let image = require("../static/picture" + images.filter(x => x === url)[0].slice(1))
    return image
  }
  render(){

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
      <Slider   {...settings} className="news_center">
        <div className="clone">
              <Link to="/news">
                <div className="pic"><img src={this.getImages('./new01.jpg')} /></div>
                  <div className="txtc">
                    <h2>MK PHOTO | 婚纱摄影</h2>
                    <p>婚照和情侣照最大的差别，相比就是在服装了。我们在平时的时候，选择服装都是有一个适合自己的身材的服装</p>
                    <span><em>MK VISION PHOTO</em><em>TIME:2018.12.10</em></span> 
                  </div>
              </Link> 
        </div>
        <div className="clone">
            <Link to="/news">
                <div className="pic"><img src={this.getImages('./short.jpg')} /></div>
                    <div className="txtc">
                        <h2>短发新娘如何拍摄出美的婚纱照</h2>
                        <p>时尚，每年都是有变化的，今年的发型最流行的还是短发造型，所以今年将要结婚的新娘也是有很多是短发的造型的。当然相对于</p>
                        <span><em>MK VISION PHOTO</em><em>TIME:2019.04.01</em></span> 
                    </div>
            </Link> 
        </div>
        <div className="clone">
            <Link to="/news">
                  <div className="pic"><img src={this.getImages('./gexing.jpg')} /></div>
                  <div className="txtc">
                      <h2>摩卡视觉教你拍个性婚纱照</h2>
                      <p>很多人在拍摄婚纱照的时候特别紧张，面对摄像头，不知所措，不知道该怎样去摆姿势，唯一视觉小编教你如何摆姿势更漂亮</p>
                      <span><em>MK VISION PHOTO</em><em>TIME:2019.02.11</em></span> 
                  </div>
              </Link> 
        </div>
        <div className="clone">
              <Link to="/news">
                  <div className="pic"><img src={this.getImages('./newll.jpg')} /></div>
                  <div className="txtc">
                      <h2>摩卡视觉教你拍婚纱照不要紧张哦~</h2>
                      <p>在拍摄婚纱照的时候，很多新人一开始都觉得自己会紧张，在拍摄的时候就会变得手足无措，不知道...</p>
                      <span><em>MK VISION PHOTO</em>&nbsp;&nbsp;<em>TIME:2019.1.17</em></span> 
                  </div>
              </Link> 
        </div>
        <div className="clone">
              <Link to="/news">
                    <div className="pic"><img src={this.getImages('./zhuyi.jpg')} /></div>
                    <div className="txtc">
                        <h2>小个子新娘怎么拍婚纱照</h2>
                        <p>在前段时间结婚引起广大群众热议的王祖蓝和娇妻的婚纱照就成为了一段时间的热门话题，男矮女高的婚纱照本来是很难消化拍摄</p>
                        <span><em>MK VISION PHOTO</em><em>TIME:2019.01.30</em></span> 
                    </div>
              </Link> 
        </div>
        <div className="clone">
              <Link to="/news">
                  <div className="pic"><img src={this.getImages('./xiao.jpg')} /></div>
                  <div className="txtc">
                      <h2>婚纱外景拍摄前注意事项</h2>
                      <p>外拍地点：先确认你们要去的地点，如果不只一处，请确认清楚流程，穿什么衣服都先讲好 。</p>
                      <span><em>MK VISION PHOTO</em><em>TIME:2019.01.05</em></span>  
                  </div>
              </Link> 
        </div>
        <div className="clone">
              <Link to="/news">
                  <div className="pic"><img src={this.getImages('./newl.jpg')} /></div>
                  <div className="txtc">
                      <h2>婚纱内景拍摄前注意事项</h2>
                      <p>内景拍摄是传统的婚纱照拍摄方式，通常都是用单色的布景或者是简单的室内摆设作为背景，新人的表现会非常抢镜...</p>
                      <span><em>MK VISION PHOTO</em>&nbsp;&nbsp;<em>TIME:2018.12.26</em></span> 
                  </div>
              </Link> 
        </div>
        <div className="clone">
              <Link to="/news">
                  <div className="pic"><img src={this.getImages('./neww.jpg')} /></div>
                  <div className="txtc">
                      <h2>婚鞋的挑选秘诀</h2>
                      <p>拍摄一套逞心如意的婚纱照并不是新人想象的那么简单，不仅需要摄影师和新人的配合，还要新人超常的表现...</p>
                      <span><em>MK VISION PHOTO</em>&nbsp;&nbsp;<em>TIME:2019.2.10</em></span> 
                  </div>
              </Link> 
        </div>
        
      </Slider > 
    )
  }
}
export default CustomArrows;