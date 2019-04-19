import React, { Component } from 'react';


const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

class Brand extends Component{
    getImages = (url) => {
        let image = require("../../static/picture" + images.filter(x => x === url)[0].slice(1))
        return image
    }

    render() {
        return (
            <div style={{marginTop:"135px"}}>
                <div className="pinpai1 fIn u-fadeInUp list_item is-animated is-animated" data-wow-delay="0.1s" 
                    style={{visibility: "visible", animationDelay:"0.1s", animationName:"fadeInUp"}}>
                    <img src={this.getImages('./brandstory.jpg')} alt="" />
                </div>
                <div className="pinpai2 fIn u-fadeInUp list_item is-animated is-animated" data-wow-delay="0.5s" 
                    style={{visibility: "visible", animationDelay:"0.5s", animationName:"fadeInUp"}}>
                      <img src={this.getImages('./p10.jpg')} alt="" />
                </div>
                <div className="pinpai3 pinpai11">
                    <div className="pinpai4">
                            <img className="pinpai5 fIn u-fadeInUp list_item is-animated is-animated" data-wow-delay="1.0s" src={this.getImages('./brand02.jpg')} alt="" style={{visibility: "visible",animationDelay:"1.0s", animationName:"fadeInUp"}} />
                            <img className="pinpai6 fIn u-fadeInUp list_item is-animated is-animated" data-wow-delay="1.5s" src={this.getImages('./brand03.jpg')} alt="" style={{visibility: "visible",animationDelay:"1.5s", animationName:"fadeInUp"}} />        
                            <img className="pinpai7 fIn u-fadeInUp list_item is-animated is-animated" data-wow-delay="2.0s" src={this.getImages('./brand05.jpg')} alt="" style={{visibility: "visible",animationDelay:"2.0s", animationName:"fadeInUp"}} />
                    </div>
                    <div className="pinpai2 fIn u-fadeInUp list_item is-animated is-animated" data-wow-delay="2.5s" 
                         style={{visibility: "visible", animationDelay:"2.5s", animationName:"fadeInUp"}}>
                            <img src={this.getImages('./p10.jpg')} alt="" />
                    </div>
                </div>
                
                <div className="pinpai8">
                            <div className="pinpai9 fIn u-fadeInUp list_item is-animated is-animated" data-wow-delay="3.0s" src={this.getImages('./brand03.jpg')} alt="" style={{visibility: "visible",animationDelay:"3.0s", animationName:"fadeInUp"}}>
                                <h4>摩卡视觉，为爱，只为你！<br/> @MK VISION</h4>
                                <p className="moka_intro_1"> 摩卡视觉隶属于石家庄摩卡文化传播有限公司，于2008年创立于石家庄，总部坐落于中山路。
                                    自摩卡品牌创建以来，致力于为婚嫁行业提供高品质服务。垂直覆盖多种类多风格婚纱摄影、婚纱礼服定制、
                                    婚礼化妆造型定制、婚礼跟拍服务。摩卡视觉提供私人化，人性化，个性化的单对单服务，包括上门拍摄。
                                    把客户当作朋友，尊重客户的个性和想法，有自己独特的视角、拍摄理念和经营风格。
                                    虽是商业经营，但没有商业味道，注重交流，拒绝复制。摄影本身是一种工作，同时也是一种生活。
                                </p>
                                <p className="eng_intro">
                                   GOD WANT US 
                                    TO MEET A FEW WRONG PEOPLE BEFORE METTING THE RIGHT ONE.
                                    TO THE WORLD YOU MAY BE ONE PERSON,BUT TO ONE PERSON YOU MAY BE THE WORLD.PERSON,WE WILL 
                                    KNOW HOW TO BE GRATEFUL.
                                </p>
                            </div>
                            <img className="p_p1 fIn u-fadeInUp list_item is-animated is-animated" data-wow-delay="3.5s" src={this.getImages('./brand06.jpg')} alt="" style={{visibility: "visible",animationDelay:"3.0s", animationName:"fadeInUp"}} />
                            <div className="pinpai10 fIn u-fadeInUp list_item is-animated is-animated" data-wow-delay="4.0s" src={this.getImages('./brand03.jpg')} alt="" style={{visibility: "visible",animationDelay:"4.0s", animationName:"fadeInUp"}}>
                                <h4>做自己喜欢的事，过自己想要的生活。<br/> @MK VISION</h4>
                                <p className="moka_intro_1"> 来到摩卡的感觉就是家的感觉，简单开放式的布置，或许看起来并不气派，但能使你来到这里不会拘束，
                                面对面地交流，像朋友一样沟通。真实，诚恳的沟通，专业，敬业的拍摄。
                                也许在我们之前，从未有这样的立场和态度，我们希望我们的每一个客户都是朋友，
                                拍摄决不仅仅是拍摄，更是一次难忘的心灵体验摩卡视觉不是财大气粗的影楼，这里没有华丽的装饰，
                                也没有成群堆笑的谈单小姐，更没有让人眼花缭乱的赠送品，我们只希望去掉这些浮华，展现摩卡的本色.
                                </p>
                                <p className="eng_intro">
                                   GOD WANT US 
                                    TO MEET A FEW WRONG PEOPLE BEFORE METTING THE RIGHT ONE.
                                    TO THE WORLD YOU MAY BE ONE PERSON,BUT TO ONE PERSON YOU MAY BE THE WORLD.PERSON,WE WILL 
                                    KNOW HOW TO BE GRATEFUL.
                                </p>
                            </div>
                            <img className="p_p2 fIn u-fadeInUp list_item is-animated is-animated" data-wow-delay="1.1s" src={this.getImages('./brand04.jpg')} alt="" style={{visibility: "visible",animationDelay:"1.1s", animationName:"fadeInUp"}}/>
                     
                </div>
           </div>
                /* 摩卡视觉，为爱，只为你！
                LOVE YOU NOT BECAUSE OF WHO YOU ARE. BUT BECASUE OF WHO WHEN AM WITH YOU.
                SO THAT WHEN WE FINALLY MEET AM.
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
