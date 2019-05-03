import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button, Modal, Form, Input, Icon, Checkbox, Select , Upload, message,
  } from 'antd';
import axios from 'axios';

const { Option } = Select;
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('您只能上传JPG文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片必须小于2MB!');
    }
    return isJPG && isLt2M;
  }
  

class Login extends Component{
    state = {
        loading: false,
      };
    
      handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => this.setState({
            imageUrl,
            loading: false,
          }));
        }
      }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            axios.get("/api/login?status=login&nickname="+values.nickname+"&password="+values.password)
            // JSON.parse(result)
             .then((response)=>{
                 console.log(response);
                 if(response.data.result==='1'){
                     window.sessionStorage.setItem('nickname',response.data.datas.nickname);
                     window.sessionStorage.setItem('password',response.data.datas.password);
                 }else if(response.data.result==='2'){
                     alert("用户名与密码不符，请重新输入");
                 }else if(response.data.result==='3'){
                     alert("用户不存在，请重新输入");
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
            visible, onCancel, form,
          } = this.props;
          const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">用户头像</div>
            </div>
          );
          const imageUrl = this.state.imageUrl;
          const { getFieldDecorator } = this.props.form;
      
         return(
            <Modal
            visible={visible}
            footer={null}
            title="登录"
            onCancel={onCancel}
          >
                 <Form onSubmit={this.handleSubmit} className="login-form">
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" className="userpic"/> : uploadButton}
                        </Upload>
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