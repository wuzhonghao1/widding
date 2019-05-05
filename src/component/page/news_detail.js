import React, { Component } from 'react';
import { newsdetail} from '../data/newdetail'
const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

class News_detail extends Component {
<<<<<<< HEAD
    async componentDidMount(){
        axios.get("/api/articlelist")
         .then((response)=>{
             console.log(response);
             console.log(response.data);
             newsArr=response.data;
             console.log("newsArr"+newsArr);
         })
         .catch(function(error){
             console.log(error);
         });
     }
     
=======
    state={
        newsdetail:{}
    }
    async componentDidMount(){
        let id = this.props.match.params.id 

        // 这里调用接口 TODO:
        // axios.get("接口名称",参数就是上面的这个id)
        // .then((response) => {
        //     this.setState({
        //         newsArr: response.data
        //     })
        // })
        await this.setState({
            newsdetail: newsdetail
        })
        console.log(this.state.newsdetail.title);
        
    }

>>>>>>> 6e6ade642fdf4e91f4a425db60c36972de441889
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
<<<<<<< HEAD
                        <h1>{item.articletitle}</h1>
                        <h2>Time:{item.publishtime}</h2>                        
                        <div className="article_content_txt" style={{marginTop:"50px"}}>
                             <div style={{textAlign: "center"}}>
                                <img alt="" src={this.getImages(item.articlesrc)} />
                            </div>    
                            <p>{item.content}</p>
=======
                        {/* 后台数据前端渲染 */}
                        <h1>{this.state.newsdetail.title ? this.state.newsdetail.title:""}</h1>
                        <h2>{this.state.newsdetail.time ? this.state.newsdetail.time : ""}</h2>
                        <div className="article_content_txt" style={{marginTop:"50px"}}>
                            <p>
                            {this.state.newsdetail.content ? this.state.newsdetail.content : ""} 
                            </p>
                            <p>我们首先要和摄影机构预定好自己选择服装时间，这样新人到店后就可以直接挑选婚纱礼服了。相中自己喜欢的婚纱，
                                就可以联系对方婚纱店了。普通的婚纱店都有试穿的服务，有空的话，不妨预约在平日里。那样，店里顾客相对少一些，
                                你可以慢慢挑个够啦！尽量和婚纱店的人多沟通。婚纱的预算、仪式的风格、会场的格调、举行婚礼的日期，以及自己对
                                婚纱的一些构想等，都应该当面和婚纱店里的工作人员讲清楚。
                            </p>
                            <div style={{textAlign: "center"}}>
                                <img alt="" src={this.getImages('./news_detail01.jpg')} />
                            </div>                 　 
                            <p>摩卡视觉小编一直觉得，只有时候试穿之后，才能够确定自己的到底穿什么样款式婚纱照才好看。要知道尽可能多试穿几件
                            不同风格的婚纱。胸部是衡量婚纱设计好坏的重要部位。胸部松松垮垮的婚纱会给人廉价的感觉，因此和婚纱尺寸匹配的婚纱穿
                            用内衣就成了必备品。收腰的部位是否正确、收腰是否有过紧或过松的现象，这些必须仔细确认。最后就是对于配饰的问题了，
                            搭配的好的话，会为你的婚纱照的拍摄加分的哦！</p>
                            <p>
                            对于服装这一块，很多摄影影楼和工作室都是含糊其辞的，但是拍摄婚纱照，不就是为了穿着美丽的婚纱拍摄两个人的婚纱照吗。
                            女孩子最美的时候，就是穿着婚纱的时候。所以新娘对于婚纱照的拍摄一直以来都是要比新郎更加的在乎的。我们常说“人靠衣装”
                            ，就是这么回事，不同品质的服装对于新娘的气质是有加分作用的。很多新人都希望为自己拍摄的婚纱照的摄影师，能不能够指定。
                            大型的婚纱摄影公司的，每天的拍摄量都是很高的，但是摄影师每周都是有休息的时间，或是其他的情况的出现，所有几乎这样的
                            摄影机构的摄影师都是不可以指定拍摄的。但是摄影师确实是有等级之分的，不同的等级的摄影师的工资是不一样的，不同档次的
                            摄影师在婚纱照的拍摄效果上还是有差异的。但是新人自己是不会知道摄影师的等级的。唯一视觉小编一直都不建议新人提升套系
                            内的摄影师等级，要是真的想要好的摄影师为自己拍摄婚纱照的话，最好还是选择比较高套系，相对于后来升级要实惠的多。
                            </p>
>>>>>>> 6e6ade642fdf4e91f4a425db60c36972de441889
                        </div>
                    </div>
            </div>
        )
    }
}
export default News_detail