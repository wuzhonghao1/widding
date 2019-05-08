import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Modal,message
  } from 'antd';
import LoginForm from './loginform';
import RegisForm from './register';
import  "./header.css";
const confirm = Modal.confirm;
const nickname = window.sessionStorage.getItem('nickname')
const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()
class Header extends Component {
    state = {
        visible: false,
    }
    showConfirm() {
        confirm({
            title: '退出登录提示',
            content: '确定要退出吗？',
            cancelText:'取消',
            okText:"确定",
            onOk() {
                message.success("退出成功", 2).then(()=>{window.location.reload() })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    async componentDidMount(){
        this.setState({
            nickname:nickname
        })


    }
    showModal = () => {
        this.setState({ visible: true });
      }
      showModal2 = () => {
        this.setState({ vision: true });
      }
    
      saveFormRef = (formRef) => {
        this.formRef = formRef;
      }
      saveFormRef2 = (formRef2) => {
        this.formRef2 = formRef2;
      }

      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
      regisCancel = (e) => {
        console.log(e);
        this.setState({
          vision: false,
        });
      }
    
    getImages = (url) => {
        let image = require("../../static/picture" + images.filter(x => x === url)[0].slice(1))
        return image
    }

    render() {
        return (
            <div>
                <div className="wrap_top">
                    <div className="top" id="top">
                        <ul>
                            {
                                this.state.nickname ? <div><li id="regis">
                                        <a onClick={()=>{
                                            window.sessionStorage.removeItem('nickname')
                                            window.sessionStorage.removeItem('pic')
                                            this.showConfirm()
                                        }}>退出登录</a>
                                    </li>
                                    <li id="login">
                                    <a>{this.state.nickname}</a>
                                </li></div>:<div>
                                    <li id="login">
                                        <a onClick={this.showModal}>登录</a>
                                    </li>
                                    <li id="regis">
                                        <a onClick={this.showModal2}>注册</a>
                                    </li>  
                                </div>
                            }
                            <li>0311-85520710</li>                           
                            <li><a href="https://weibo.com/mokasj?is_hot=1" target="_blank"><img src={this.getImages('./weibo.png')} alt="" /></a></li>
                            <li id="weixin"><img src={this.getImages('./weixin.png')} alt="" />
                                <div className="weixin_open">
                                    <img src={this.getImages('./weixin_open.png')} alt="" />
                                </div>
                            </li>              
                        </ul>                       
                    </div>
                </div>
                <div className="wrap_header" id="wrap_header">
                    <div className="header"> 
                        <a href="/"><img className="logo" src={this.getImages('./mk2.jpg')} alt="" /></a>
                        <h1 className="moka">摩卡视觉</h1>
                        <ul className="nav">
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/brand">品牌简介</Link></li>
                            <li><Link to="/show">摄影展示</Link></li>
                            <li><Link to="/news">新闻中心</Link></li>
                            <li><Link to="/evaluate">真实评价</Link></li>
                            <li><Link to="/order">预约拍摄</Link></li>
                        </ul>
                        
                    </div>
                </div>                
                <LoginForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                />
                <RegisForm
                    wrappedComponentRef={this.saveFormRef2}
                    visible={this.state.vision}
                    onCancel={this.regisCancel}
                />
            </div>
        )
    }
}
export default Header