import React, { Component } from 'react'


const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()
class Footer extends Component {
    state = {
        
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
                <div className="footer">
                     <ul className="foot_left">
                         <li>咨询热线：0311-85520710</li>
                         <li>营业时间：周一至周日09:00-19:00</li>
                         <li>会馆地址：石家庄长安长安区中山东路东尚东塔1001</li>                        
                     </ul>
                     <ul className="foot_right">
                         <li><img src={this.getImages('./cnnic.png')} alt="" style={{width:"80%"}}/></li>
                         <li><img src={this.getImages('./hyyz.png')} alt="" style={{width:"80%"}}/></li>
                         <li><img src={this.getImages('./cert.png')} alt="" style={{width:"90%"}}/></li>
                     </ul>
                     <p className="foot_bottom">Copyright © 2016-2019 石家庄摩卡视觉文化传播有限公司&nbsp;&nbsp;&nbsp;&nbsp;冀ICP备15055644号</p>
                </div>
            </div>
        )
    }
}
export default Footer