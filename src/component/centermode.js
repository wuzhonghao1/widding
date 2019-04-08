import React, { Component } from "react";
import {Carousel} from "antd";
import Slider from "react-slick";
import { Carousel } from 'antd';
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import "../static/css/slick.css" 
import "../static/css/slick-theme.css" 
import "../static/css/docs.css" 

class CenterMode extends React.Component {
  onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  render(){

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay:true
    };
    return (
      <Carousel afterChange={this.onChange} {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel> 
    )
  }
}
export default CenterMode;