import React, { Component } from 'react';

const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

class News_detail02 extends Component {
    getImages = (url) => {
        let image = require("../../static/picture" + images.filter(x => x === url)[0].slice(1))
        return image
    }

    render() {
        return (
            <div style={{marginTop:"135px"}}>
                    <div className="news_banner">
                        <img src={this.getImages('./new_center.jpg')} alt="" />
                    </div>
                    <div className="new_tit">
                        <h1>新闻中心</h1>
                        <h2>News About Shooting Skills</h2>
                    </div>
                    <div className="article_content">
                        <div className="back_list">
                              <a href="http://localhost:3000/#/news"> 
                                 &gt; 返回列表 
                              </a>
                        </div>
                        <h1>婚纱外景拍摄前注意事项</h1>
                        <h2>Time:2018-09-20 14:36:00</h2>
                        <div className="article_content_txt" style={{marginTop:"50px"}}>
                            <p> 1、外拍地点：先确认你们要去的地点，如果不只一处，请确认清楚流程，穿什么衣服都先讲好 。
 2、物品准备：问摄影师、造型师需要带的东西。
 3、预约试穿礼服、婚纱时间，确定是否合身。东方人肤色深而偏黄，穿雪白婚纱，会显得暗哑，穿象牙色会较和谐自然，粉、蓝、粉紫与黄皮肤都不能协调，反而粉橙、粉绿能与偏黄肤色相配。
 4、提前依照选好的礼服，问造型师新郎应准备哪些颜色的衬衫、领带。
 5、和摄影师谈拍摄风格：事先找到喜欢的风格图片，杂志与数据事先贴上便利贴，以免当场翻找老半天。要把不要的造型、摄影风格都要找出来，一并和摄影师说明。
 6、建议各式的礼服都挑选，如蓬裙、窄裙、露背，差异性要大。
 7、拍摄日期如有可能，选择非双休日，一是工作人员可以一对一服务，二是景点人也少。
 8、女生指甲建议涂上自己喜欢颜色的甲油，最好以淡色为主。脚指甲也要修好抹上甲油。
                            </p>                        
                            <div style={{textAlign: "center"}}>
                                <img alt="" src={this.getImages('./news_detail02.jpg')} />
                            </div>                 　    
                        </div>
                    </div>
            </div>
        )
    }
}
export default News_detail02