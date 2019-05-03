import React, { Component } from 'react';
import $ from  'jquery';

const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

class Show extends Component {
    state = {
        showArr:[{
            href:'http://localhost:3000/#/guestpic',
            src:'./mks04fm.jpg' ,
            hov_src:'./piccover.png',
            theme:'夕颜花开',
            remark:'MK VISION WEDDING PHOTOGRAPHY',
            time:'2019-3-7'
     },{    
            href:'/',
            src:'./mks01fm.jpg' ,
            hov_src:'./piccover.png',
            theme:'烂漫随心',
            remark:'MK VISION WEDDING PHOTOGRAPHY',
            time:'2019-3-10'
     },{
            href:'/',
            src:'./mks02fm.jpg' ,
            hov_src:'./piccover.png',
            theme:'蜜恋阳光',
            remark:'MK VISION WEDDING PHOTOGRAPHY',
            time:'2019-3-15'
     },{
            href:'/',
            src:'./mks03fm.jpg' ,
            hov_src:'./piccover.png',
            theme:'比翼双飞',
            remark:'MK VISION WEDDING PHOTOGRAPHY',
            time:'2019-3-18'
     },{
         href:'/',
         src:'./mks05fm.jpg' ,
         hov_src:'./piccover.png',
         theme:'酒笙倾凉',
         remark:'MK VISION WEDDING PHOTOGRAPHY',
         time:'2019-3-24'
     },{
         href:'/',
         src:'./mks06fm.jpg' ,
         hov_src:'./piccover.png',
         theme:'伊人夕岸',
         remark:'MK VISION WEDDING PHOTOGRAPHY',
         time:'2019-3-26'
     },{
         href:'/',
         src:'./mks07fm.jpg' ,
         hov_src:'./piccover.png',
         theme:'盛夏约定',
         remark:'MK VISION WEDDING PHOTOGRAPHY',
         time:'2019-3-28'
     },{
         href:'/',
         src:'./mks08fm.jpg' ,
         hov_src:'./piccover.png',
         theme:'入骨相思',
         remark:'MK VISION WEDDING PHOTOGRAPHY',
         time:'2019-3-31'
     },{
         href:'/',
         src:'./mks09fm.jpg' ,
         hov_src:'./piccover.png',
         theme:'笑逐初夏',
         remark:'MK VISION WEDDING PHOTOGRAPHY',
         time:'2019-4-1'
     },{
         href:'/',
         src:'./mks10fm.jpg' ,
         hov_src:'./piccover.png',
         theme:'蓝色告白礼',
         remark:'MK VISION WEDDING PHOTOGRAPHY',
         time:'2019-4-3'
     },{
         href:'/',
         src:'./mks11fm.jpg' ,
         hov_src:'./piccover.png',
         theme:'花若浮生',
         remark:'MK VISION WEDDING PHOTOGRAPHY',
         time:'2019-4-6'
     },{
         href:'/',
         src:'./mks12fm.jpg' ,
         hov_src:'./piccover.png',
         theme:'爱意永恒',
         remark:'MK VISION WEDDING PHOTOGRAPHY',
         time:'2019-4-8'
     }]
     
    }
    async componentDidMount(){
        $(".kepian_list li").hover(function(){
            $(this).children(".p-con").children("a").children(".pic-cover").animate({top:"0px"});	
         },function(){
            $(this).children(".p-con").children("a").children(".pic-cover").animate({top:"415px"});	
         })     
         
         
    }
    
    getImages = (url) => {
        let image = require("../../static/picture" + images.filter(x => x === url)[0].slice(1))
        return image
    }

    render() {
        const showlist = this.state.showArr.map((item,index)=>
            <li>
                <div class="p-con"> 
                    <a href={item.href}>
                        <img src={this.getImages(item.src)} alt="" />
                    </a> 
                    <a href={item.href}>
                        <img class="pic-cover" src={this.getImages(item.hov_src)} alt="" />
                    </a> 
                </div>
                <div className="p-txt">
                    <h2><a href={item.href}>{item.theme}</a></h2>
                    <span>{item.remark}</span>
                    <em>{item.time}</em>
                </div>
        </li>
       )
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
                                <h2>摩卡视觉&nbsp;&nbsp;&nbsp;&nbsp;最新客照</h2>
                                <h3>MK VISION</h3>
                        </span> 
                    </div>
                </div>
                <div className="kepian_list">
                    <ul>
                        {showlist}                   
                        {/* <li>
                            <div class="p-con"> 
                                 <a href={item.href}>
                                       <img src={this.getImages('./mks04fm.jpg')} alt="" />
                                 </a> 
                                 <a href={item.href}>
                                      <img class="pic-cover" src={this.getImages('./piccover.png')} alt="夕颜花开" />
                                </a> 
                            </div>
                            <div className="p-txt">
                                <h2><a href="#">夕颜花开</a></h2>
                                <span>MK VISION WEDDING PHOTOGRAPHY</span>
                                <em>TIME:2019-03-31</em>
                            </div>
                        </li>
                        <li>
                            <div className="p-con"> 
                                <a href="#">
                                   <img src={this.getImages('./mks01fm.jpg')} alt="" />
                                </a> 
                                <a href="#">
                                   <img className="pic-cover" src={this.getImages('./piccover.png')} alt="烂漫随心"  />
                                </a> 
                            </div>
                            <div className="p-txt">
                                <h2><a href="/">烂漫随心</a></h2>
                                <span>MK VISION WEDDING PHOTOGRAPHY</span>
                                <em>TIME:2019-03-31</em>
                            </div>
                        </li>
                        <li>
                            <div className="p-con"> 
                                <a href="#">
                                    <img src={this.getImages('./mks02fm.jpg')} alt="" />
                                </a> 
                                <a href="#">
                                   <img className="pic-cover" src={this.getImages('./piccover.png')} alt="蜜恋阳光"  />
                                </a> 
                            </div>
                            <div className="p-txt">
                                <h2><a href="#">蜜恋阳光</a></h2>
                                <span>MK VISION WEDDING PHOTOGRAPHY</span>
                                <em>TIME:2019-03-31</em>
                            </div>
                        </li>
                        <li style={{marginRight:0}}>
                            <div className="p-con"> 
                                 <a href="#">
                                    <img src={this.getImages('./mks03fm.jpg')} alt="" />
                                 </a> 
                                <a href="#">
                                   <img className="pic-cover" src={this.getImages('./piccover.png')} alt="比翼双飞"  />
                                </a> 
                            </div>
                            <div className="p-txt">
                                <h2><a href="#">比翼双飞</a></h2>
                                <span>MK VISION WEDDING PHOTOGRAPHY</span>
                                <em>TIME:2019-02-17</em>
                            </div>
                        </li>
                        <li>
                            <div className="p-con"> 
                                <a href="#">
                                    <img src={this.getImages('./mks05fm.jpg')} alt="" />
                                </a> 
                                <a href="#">
                                    <img className="pic-cover" src={this.getImages('./piccover.png')} alt="酒笙倾凉"  />
                                </a> 
                            </div>
                            <div className="p-txt">
                                <h2><a href="#">酒笙倾凉</a></h2>
                                <span>MK VISION WEDDING PHOTOGRAPHY</span>
                                <em>TIME:2019-02-17</em>
                            </div>
                        </li>
                        <li>
                            <div className="p-con"> 
                                <a href="#">
                                    <img src={this.getImages('./mks06fm.jpg')} alt="" />
                                </a> 
                                <a href="#">
                                   <img className="pic-cover" src={this.getImages('./piccover.png')} alt="伊人夕岸"  />
                                </a> 
                            </div>
                            <div className="p-txt">
                                <h2><a href="#">伊人夕岸</a></h2>
                                <span>MK VISION WEDDING PHOTOGRAPHY</span>
                                <em>TIME:2019-02-17</em>
                            </div>
                        </li>
                        <li>
                            <div className="p-con"> 
                                <a href="#">
                                   <img src={this.getImages('./mks07fm.jpg')} alt="" />
                                </a> 
                                <a href="#">
                                    <img className="pic-cover" src={this.getImages('./piccover.png')} alt="盛夏约定"  />
                                </a> 
                            </div>
                            <div className="p-txt">
                                <h2><a href="/">盛夏约定</a></h2>
                                <span>MK VISION WEDDING PHOTOGRAPHY</span>
                                <em>TIME:2019-02-17</em>
                            </div>
                        </li>
                        <li style={{marginRight:0}}>
                            <div className="p-con"> 
                                <a href="#">
                                    <img src={this.getImages('./mks08fm.jpg')} alt="" />
                                </a> 
                                <a href="#">
                                    <img className="pic-cover" src={this.getImages('./piccover.png')} alt="入骨相思"  />
                                </a> 
                            </div>
                            <div className="p-txt">
                                <h2><a href="#">入骨相思</a></h2>
                                <span>MK VISION WEDDING PHOTOGRAPHY</span>
                                <em>TIME:2019-02-17</em>
                            </div>
                        </li>
                        <li>
                           <div className="p-con"> 
                                <a href="#">
                                   <img src={this.getImages('./mks09fm.jpg')} alt="" />
                                </a> 
                                <a href="#">
                                    <img className="pic-cover" src={this.getImages('./piccover.png')} alt="笑逐初夏"  />
                                </a> 
                            </div>
                            <div className="p-txt">
                                <h2><a href="#">笑逐初夏</a></h2>
                                <span>MK VISION WEDDING PHOTOGRAPHY</span>
                                <em>TIME:2019-02-17</em>
                            </div>
                        </li>
                        <li>
                           <div className="p-con"> 
                                <a href="#">
                                    <img src={this.getImages('./mks10fm.jpg')} alt="" />
                                </a> 
                                <a href="#">
                                     <img className="pic-cover" src={this.getImages('./piccover.png')} alt="蓝色告白礼" />
                                </a> 
                            </div>
                            <div className="p-txt">
                                <h2><a href="#">蓝色告白礼</a></h2>
                                <span>MK VISION WEDDING PHOTOGRAPHY</span>
                                <em>TIME:2019-02-17</em>
                            </div>
                        </li>
                        <li>
                           <div className="p-con"> 
                               <a href="#">
                                   <img src={this.getImages('./mks11fm.jpg')} alt="" />
                                </a> 
                                <a href="#">
                                   <img className="pic-cover" src={this.getImages('./piccover.png')} alt="花若浮生"  />
                                </a> 
                            </div>
                            <div className="p-txt">
                                <h2><a href="#">花若浮生</a></h2>
                                <span>MK VISION WEDDING PHOTOGRAPHY</span>
                                <em>TIME:2019-01-08</em>
                            </div>
                        </li>
                        <li style={{marginRight:0}}>
                            <div className="p-con"> 
                                <a href="#">
                                    <img src={this.getImages('./mks12fm.jpg')} alt="" />
                                </a> 
                                <a href="#">
                                    <img className="pic-cover" src={this.getImages('./piccover.png')} alt="爱意永恒" />
                                </a> 
                            </div>
                            <div className="p-txt">
                                <h2><a href="#">爱意永恒</a></h2>
                                <span>MK VISION WEDDING PHOTOGRAPHY</span>
                                <em>TIME:2019-01-08</em>
                            </div>
                        </li> */}
                    </ul>                   
                </div>
            </div>
        )
    }
}
export default Show