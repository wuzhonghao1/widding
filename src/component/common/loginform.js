import React, { Component } from 'react';
import {
    Button, Modal, Form, Input, Icon, Select , Upload, message,
  } from 'antd';
import axios from 'axios';

class Login extends Component{
    state = {
        loading: false,
      };
    
      
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            axios.get("/api/login?nickname="+values.nickname+"&password="+values.password)
            // JSON.parse(result)
             .then((response)=>{
                 console.log(response);
                 console.log(response.data);
                 if(response.data.message ==='登录成功'){               
                    window.sessionStorage.setItem('nickname', response.data.data.nickname)
                    window.sessionStorage.setItem('pic', response.data.data.pic)
                    message.success("登陆成功", 2).then(()=>{window.location.reload() })

                 }else if(response.data ==='密码错误'){
                   message.error("用户名与密码不符，请重新输入")
                 }else if(response.data ==='用户不存在'){
                   message.error('用户不存在，请重新输入')
                 }
             })
             .catch(function(error){
                 console.log(error);
             });
          }
        });
      }

     render(){
        const {
            visible, onCancel,
          } = this.props;
          const { getFieldDecorator } = this.props.form;
         return(
            <Modal
            visible={visible}
            footer={null}
            title="登录"
            onCancel={onCancel}
          >
                 <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item className="nick_name">
                            {getFieldDecorator('nickname', {
                                rules: [{ required: true, message: '请输入您的用户昵称!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入您的用户昵称!" />
                            )}
                        </Form.Item>
                        <Form.Item className="password">
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入您的密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入您的密码!" />
                            )}
                        </Form.Item>
                     
                        <Form.Item className="login-btn">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                            </Button>
                        </Form.Item>
                </Form>
          </Modal>
         )
     }
}
const LoginForm = Form.create({ name: 'login' })(Login);
export default LoginForm