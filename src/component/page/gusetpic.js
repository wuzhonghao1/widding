import React, { Component } from 'react';
// import $ from  'jquery';
// import layui from 'layui-src'
// import {Modal} from 'antd'
const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys();
class Gusetpic extends Component {
    state = {
        visible:false
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
                <div className="index_pinpai" style={{position:"relative",height:"420px",width:"100%",overflow:"hidden",marginTop:"135px"}}> 
                        <img className="big" src={this.getImages('./shouyeshipinzhezhao.png')} alt="" style={{position:"absolute",height:"498px"}} />
                        <video id="videoALL" autoPlay loop="loop" muted={true} width="100%" height="100%" style={{objectFit:"fill"}} src="http://cloud.video.taobao.com//play/u/1910949384/p/2/e/6/t/1/50076176739.mp4" name="media">
                           您的浏览器不支持 video 标签。
                        </video>
                    <div className="txt"> 
                        <span className="sp1"> 
                            <img className="sp_l" src={this.getImages('./index-movie_1.png')} alt="" /> 
                            <a href="http://cloud.video.taobao.com//play/u/1910949384/p/2/e/6/t/1/50076176739.mp4" target="_blank">
                               <img className="sp_c" src={this.getImages('./index-movie_3.png')} alt="" />
                            </a> 
                            <img className="sp_r" src={this.getImages('./index-movie_2.png')} alt="" /> 
                        </span> 
                        <span className="sp2">
                                <h2>摩卡视觉&nbsp;&nbsp;&nbsp;&nbsp;客照展示</h2>
                                <h3>MK VISION</h3>
                        </span> 
                    </div>
                </div>
                <div className="article_content show_kepian">
                    <div className="back_list"><a href="http://localhost:3000/#/show"> >返回列表 </a></div>
                    <h1>夕颜花开</h1>
                    <h2>Time:2019-3-7 16:27:46</h2>
                    <div className="description"></div>
                    <div className="container" id='layer-photos-demo'>
                        <div className="all_item" >
                            <div className="item"> 
                                <img layer-src={this.getImages('./mks04_1.jpg')} src={this.getImages('./mks04_1.jpg')} alt="0" /> 
                            </div>
                        </div>
                        <div className="all_item">
                            <div className="item">
                                <img layer-src={this.getImages('./mks04_2.jpg')} src={this.getImages('./mks04_2.jpg')} alt="1" /> 
                            </div>
                        </div>
                        {/* <div className="all_item">
                            <div className="item"> 
                                 <img src={this.getImages('./mks04_2.jpg')} alt="1"  /> 
                            </div>
                        </div>
                        <div className="all_item">
                            <div className="item"> 
                                <img src={this.getImages('./mks04_3.jpg')} alt="2"  /> 
                            </div>
                        </div>
                        <div className="all_item">
                            <div className="item"> 
                                 <img src={this.getImages('./mks04_4.jpg')} alt="3"  /> 
                            </div>
                        </div>
                        <div className="all_item">
                            <div className="item">
                                 <img src={this.getImages('./mks04_5.jpg')} alt="4"  /> 
                            </div>
                        </div>
                        <div className="all_item">
                            <div className="item"> 
                                 <img src={this.getImages('./mks04_6.jpg')} alt="5"  /> 
                            </div>
                        </div>
                        <div className="all_item">
                            <div className="item"> 
                                 <img src={this.getImages('./mks04_9.jpg')} alt="6"  /> 
                            </div>
                        </div>
                        <div className="all_item">
                            <div className="item"> 
                                 <img src={this.getImages('./mks04_8.jpg')} alt="7"  /> 
                            </div>
                        </div>
                        <div className="all_item">
                            <div className="item"> 
                                <img src={this.getImages('./mks04_7.jpg')} alt="8"  /> 
                            </div>
                        </div>
                        <div className="all_item">
                            <div className="item"> 
                                 <img src={this.getImages('./mks04_10.jpg')} alt="9"  /> 
                            </div>
                        </div>
                        <div className="all_item">
                            <div className="item"> 
                                  <img src={this.getImages('./mks04_11.jpg')} alt="10"  /> 
                            </div>
                        </div>  
                        <div className="all_item">
                            <div className="item"> 
                                  <img src={this.getImages('./mks04_12.jpg')} alt="11"  /> 
                            </div>
                        </div>     
                        <div className="all_item">
                            <div className="item"> 
                                  <img src={this.getImages('./mks04_13.jpg')} alt="12"  /> 
                            </div>
                        </div>                           */}
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Gusetpic