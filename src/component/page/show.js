import React, { Component } from 'react';
import axios from 'axios';
import "./show.css"
const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

class Show extends Component {
    state = {
        showArr:[]
    }
    async componentDidMount(){
        axios.get("/api/showlist")
        .then((response) => {
            this.setState({
                showArr: response.data
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    getImages = (url) => {
        let image = require("../../static/picture" + images.filter(x => x === url)[0].slice(1))
        return image
    }

    render() {
        const showlist = this.state.showArr.map((item,index)=>
            <li>
                <div className="p-con"> 
                    <a onClick={() => this.props.history.push(`guestpic/${item.photoid}`)}>
                        <img src={`http://localhost:8888/upload/${item.photosrc}`} alt="" />
                    </a> 
                    <a onClick={() => this.props.history.push(`guestpic/${item.photoid}`)}>
                        <img className="pic-cover" src={this.getImages('./piccover.png')} alt="" />
                    </a> 
                </div>
                <div className="p-txt">
                    <h2><a onClick={() => this.props.history.push(`guestpic/${item.photoid}`)}>{item.photoseries}</a></h2>
                    <span>MK VISION WEDDING PHOTOGRAPHY</span>
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
                            <a href="http://cloud.video.taobao.com//play/u/1910949384/p/2/e/6/t/1/50076176739.mp4" target={"_blank"}>
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
                    </ul>                   
                </div>
                
            </div>
        )
    }
}
export default Show