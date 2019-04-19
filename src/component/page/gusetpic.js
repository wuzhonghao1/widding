import React, { Component } from 'react';
import $ from  'jquery';

const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys();
class Gusetpic extends Component {
    state = {
    }
    async componentDidMount(){
    //    //客片作品三级页面弹窗效果
    //         $(".all_item").click(function(){
    //             var index = $(this).index()+1;
    //             //改变边框颜色
    //             $(this).children("img").css("border","solid 10px #ff283a").parent().siblings().children("img").css("border","solid 10px #f5f5f5")
    //             var index2 = $(this).index();           
    //         layer.photos({
    //         photos: {
    //         "title": "最新客照", //相册标题
    //         "id": 1, //相册id
    //         "start": index2, //初始显示的图片序号，默认0
    //         "data": [   //相册包含的图片，数组格式
    //             {
    //                 "alt": "0",
    //                 "pid": "", //图片id
    //                 "src": "../../static/picture/mks04_1.jpg", //原图地址
    //                 "thumb": "../../static/picture/mks04_1.jpg" //缩略图地址
    //             },
    //             {
    //                 "alt": "1",
    //                 "pid": "", //图片id
    //                 "src": "../../static/picture/mks04_2.jpg", //原图地址
    //                 "thumb": "../../static/picture/mks04_2.jpg" //缩略图地址
    //             },
            
    //             {
    //              "alt": "2",
    //              "pid": "", //图片id
    //              "src": "../../static/picture/mks04_3.jpg", //原图地址
    //              "thumb": "../../static/picture/mks04_3.jpg" //缩略图地址
    //         },
            
    //             {
    //             "alt": "3",
    //             "pid": "", //图片id
    //             "src": "../../static/picture/mks04_4.jpg", //原图地址
    //             "thumb": "../../static/picture/mks04_4.jpg" //缩略图地址
    //         },
            
    //             {
    //             "alt": "4",
    //             "pid": "", //图片id
    //             "src": "../../static/picture/mks04_5.jpg", //原图地址
    //             "thumb": "../../static/picture/mks04_5.jpg" //缩略图地址
    //         },
            
    //             {
    //             "alt": "5",
    //             "pid": "", //图片id
    //             "src": "../../static/picture/mks04_6.jpg", //原图地址
    //             "thumb": "../../static/picture/mks04_6.jpg" //缩略图地址
    //         },
            
    //             {
    //             "alt": "6",
    //             "pid": "", //图片id
    //             "src": "../../static/picture/mks04_9.jpg", //原图地址
    //             "thumb": "../../static/picture/mks04_9.jpg" //缩略图地址
    //         },
            
    //             {
    //             "alt": "7",
    //             "pid": "", //图片id
    //             "src": "../../static/picture/mks04_8.jpg", //原图地址
    //             "thumb": "../../static/picture/mks04_8.jpg" //缩略图地址
    //         },
            
    //             {
    //             "alt": "8",
    //             "pid": "", //图片id
    //             "src": "../../static/picture/mks04_7.jpg", //原图地址
    //             "thumb": "../../static/picture/mks04_7.jpg" //缩略图地址
    //         },
            
    //             {
    //             "alt": "9",
    //             "pid": "", //图片id
    //             "src": "../../static/picture/mks04_10.jpg", //原图地址
    //             "thumb": "../../static/picture/mks04_10.jpg" //缩略图地址
    //         },
            
    //             {
    //             "alt": "10",
    //             "pid": "", //图片id
    //             "src": "../../static/picture/mks04_11.jpg", //原图地址
    //             "thumb": "../../static/picture/mks04_11.jpg" //缩略图地址
    //         },
            
    //             {
    //             "alt": "11",
    //             "pid": "", //图片id
    //             "src": "../../static/picture/mks04_12.jpg", //原图地址
    //             "thumb": "../../static/picture/mks04_12.jpg" //缩略图地址
    //         },
            
    //             {
    //             "alt": "12",
    //             "pid": "", //图片id
    //             "src": "../../static/picture/mks04_13.jpg", //原图地址
    //             "thumb": "../../static/picture/mks04_13.jpg" //缩略图地址
    //         },
            
                
            
            
    //         ]
    //     } ,anim: 5,closeBtn: 1,
    //         });  
    //         })
    //         window.onload=function(){
    //             $(".container").rowGrid({itemSelector: ".item", minMargin: 10, maxMargin: 15, firstItemClass: "first-item"});
    //         };  
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
                <div class="article_content show_kepian">
                    <div class="back_list"><a href="http://localhost:3000/#/show"> >返回列表 </a></div>
                    <h1>夕颜花开</h1>
                    <h2>Time:2019-3-7 16:27:46</h2>
                    <div class="description"></div>
                    <div class="container">
                        <div class="all_item">
                            <div class="item"> 
                                 <img src={this.getImages('./mks04_1.jpg')} alt="0"  /> 
                            </div>
                        </div>
                        <div class="all_item">
                            <div class="item"> 
                                 <img src={this.getImages('./mks04_2.jpg')} alt="1"  /> 
                            </div>
                        </div>
                        <div class="all_item">
                            <div class="item"> 
                                <img src={this.getImages('./mks04_3.jpg')} alt="2"  /> 
                            </div>
                        </div>
                        <div class="all_item">
                            <div class="item"> 
                                 <img src={this.getImages('./mks04_4.jpg')} alt="3"  /> 
                            </div>
                        </div>
                        <div class="all_item">
                            <div class="item">
                                 <img src={this.getImages('./mks04_5.jpg')} alt="4"  /> 
                            </div>
                        </div>
                        <div class="all_item">
                            <div class="item"> 
                                 <img src={this.getImages('./mks04_6.jpg')} alt="5"  /> 
                            </div>
                        </div>
                        <div class="all_item">
                            <div class="item"> 
                                 <img src={this.getImages('./mks04_9.jpg')} alt="6"  /> 
                            </div>
                        </div>
                        <div class="all_item">
                            <div class="item"> 
                                 <img src={this.getImages('./mks04_8.jpg')} alt="7"  /> 
                            </div>
                        </div>
                        <div class="all_item">
                            <div class="item"> 
                                <img src={this.getImages('./mks04_7.jpg')} alt="8"  /> 
                            </div>
                        </div>
                        <div class="all_item">
                            <div class="item"> 
                                 <img src={this.getImages('./mks04_10.jpg')} alt="9"  /> 
                            </div>
                        </div>
                        <div class="all_item">
                            <div class="item"> 
                                  <img src={this.getImages('./mks04_11.jpg')} alt="10"  /> 
                            </div>
                        </div>  
                        <div class="all_item">
                            <div class="item"> 
                                  <img src={this.getImages('./mks04_12.jpg')} alt="11"  /> 
                            </div>
                        </div>     
                        <div class="all_item">
                            <div class="item"> 
                                  <img src={this.getImages('./mks04_13.jpg')} alt="12"  /> 
                            </div>
                        </div>                          
                    </div>
                </div>
               
            </div>
        )
    }
}
export default Gusetpic