import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment'
const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys();
class Gusetpic extends Component {
    state = {
        visible:false,
        list:[]
    }
    async componentDidMount(){
        axios.post('api/showdetail',{
            id: this.props.match.params.id
        }).then(response=>{
            if (response.data.responseCode ==='000000'){
                this.setState({
                    list: response.data.data,
                    listtime: response.data.time
                })
            }
        })
    }
    getImages = (url) => {
        let image = require("../../static/picture" + images.filter(x => x === url)[0].slice(1))
        return image
    }

    render() {
        const piclist = this.state.list.map(item => <div className="all_item" >
            <div className="item">
                <img layer-src={this.getImages(`./${item.showsrc}`)} src={this.getImages(`./${item.showsrc}`)} alt={item.id} />
            </div>
        </div>)
        
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
                                <h2>摩卡视觉&nbsp;&nbsp;&nbsp;&nbsp;客照展示</h2>
                                <h3>MK VISION</h3>
                        </span> 
                    </div>
                </div>
                <div className="article_content show_kepian">
                    <div className="back_list"><a href="http://localhost:3000/#/show"> &lt; 返回列表 </a></div>
                    <h1>夕颜花开</h1>
                    <h2>Time: {this.state.listtime ? moment(this.state.listtime).format('YYYY-MM-DD'):""}</h2>
                    <div className="description"></div>
                    <div className="container" id='layer-photos-demo'>
                        {piclist}
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Gusetpic