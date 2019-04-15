import React, { Component } from "react";
// import Slider from "react-slick";
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
// import "../../node_modules/slick-carousel/slick/slick.css"
// import "../../node_modules/slick-carousel/slick/slick-theme.css"
import "../static/css/slick.css" 
import "../static/css/slick-theme.css" 
import "../static/css/docs.css" 

const requireContext = require.context("../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

class CenterMode extends React.Component {
  getImages = (url) => {
    // console.log(images.filter(x => x === url));
    let image = require("../static/picture" + images.filter(x => x === url)[0].slice(1))
    return image
  }
  render(){

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "300px",
      slidesToShow: 1,
      speed: 200,
      autoplay:true,
      dots:false,
      pauseOnHover:false
    };
    return (
      <Carousel  {...settings} className="new_cen">
        <div><img className="newfluid" src={this.getImages('./show01.jpg')} alt=""/><Button><Link to="/show">欣赏更多</Link></Button></div>
        <div><img className="newfluid" src={this.getImages('./show03.jpg')} alt=""/><Button><Link to="/show">欣赏更多</Link></Button></div>
        <div><img className="newfluid" src={this.getImages('./show05.jpg')} alt=""/><Button><Link to="/show">欣赏更多</Link></Button></div>
        <div><img className="newfluid" src={this.getImages('./show06.jpg')} alt=""/><Button ><Link to="/show">欣赏更多</Link></Button></div>
        <div><img className="newfluid" src={this.getImages('./show07.jpg')} alt=""/><Button><Link to="/show">欣赏更多</Link></Button></div>
        <div><img className="newfluid" src={this.getImages('./show10.jpg')} alt=""/><Button type="primary"><Link to="/show">欣赏更多</Link></Button></div>
      </Carousel> 
    )
  }
}
export default CenterMode;