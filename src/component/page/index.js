import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Button } from 'antd';


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
                <div class="index_all_video" style={{position:"relative",height:"470px",width:"100%",marginTop:"135px"}}>
                    <video id="index_all_video" autoplay="" loop="loop" muted="true" width="100%" height="100%" style={{objectFit:"fill"}} src="https://cloud.video.taobao.com//play/u/1057559553/p/2/e/6/t/1/50227372667.mp4" name="media">
                    您的浏览器不支持 video 标签。
                    </video>
                    <div class="index_zw"></div>
                    <div class="i-all">
                        <div class="i-content">
                            <img class="img-fluid i-english" src="https://img.bj520.com/newtheme/images/icon/logo_2.png" alt=""/>
                        </div> 
                    </div>
                </div>
                <br/>
                <Button type="primary">Button</Button>
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                {/* <Carousel autoplay>
                <div><img className="img-fluid" src={this.getImages('./homebn00.jpg')} alt=""/></div>
                <div><img className="img-fluid" src={this.getImages('./homebn001.jpg')} alt=""/></div>
                <div><img className="img-fluid" src={this.getImages('./homebn002.jpg')} alt=""/></div>
                <div><img className="img-fluid" src={this.getImages('./homebn003.jpg')} alt=""/> </div>                 
                </Carousel> */}

                
            </div>
        )
    }
}
export default Index
