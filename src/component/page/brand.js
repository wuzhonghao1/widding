import React, { Component } from 'react';


const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

class Brand extends Component {
    getImages = (url) => {
        let image = require("../../static/picture" + images.filter(x => x === url)[0].slice(1))
        return image
    }

    render() {
        return (
            <div style={{marginTop:"135px"}}>
                <div class="brand_banner">
                    <img src={this.getImages('./brandstory.jpg')} alt="" />
                </div>
                <div class="pinpai9 fIn u-fadeInUp list_item is-animated is-animated" data-wow-delay="0.2s" 
                    style={{visibility: "visible", animationDelay:"0.2s", animationName:"fadeInUp"}}>
                      <img src={this.getImages('./p10.jpg')} alt="" />
                </div>
            </div>
                /* 摩卡视觉，为爱，只为你！
                摩卡视觉隶属于石家庄摩卡文化传播有限公司，于2008年创立于石家庄，总部坐落于中山路。
                自摩卡品牌创建以来，致力于为婚嫁行业提供高品质服务。垂直覆盖多种类多风格婚纱摄影、婚纱礼服定制、
                婚礼化妆造型定制、婚礼跟拍服务。

                摩卡视觉提供私人化，人性化，个性化的单对单服务，包括上门拍摄。
                把客户当作朋友，尊重客户的个性和想法，有自己独特的视角、拍摄理念和经营风格。
                虽是商业经营，但没有商业味道，注重交流，拒绝复制。摄影本身是一种工作，同时也是一种生活。
                做自己喜欢的事，过自己想要的生活。
                来到摩卡的感觉就是家的感觉，简单开放式的布置，或许看起来并不气派，但能使你来到这里不会拘束，
                面对面地交流，像朋友一样沟通。真实，诚恳的沟通，专业，敬业的拍摄。
                也许在我们之前，从未有这样的立场和态度，我们希望我们的每一个客户都是朋友，
                拍摄决不仅仅是拍摄，更是一次难忘的心灵体验摩卡视觉不是财大气粗的影楼，这里没有华丽的装饰，
                也没有成群堆笑的谈单小姐，更没有让人眼花缭乱的赠送品，我们只希望去掉这些浮华，展现摩卡的本色. */
          
        )
    }
}
export default Brand
