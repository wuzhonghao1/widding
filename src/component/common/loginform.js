import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button, Modal, Form, Input, Icon, Checkbox, Select , Upload, message,
  } from 'antd';


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
          const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
          })(
            <Select style={{ width: 70 }}>
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
            </Select>
          );
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
                            {getFieldDecorator('W_nickname', {
                                rules: [{ required: true, message: '请输入您的用户昵称!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )}
                        </Form.Item>
                        <Form.Item className="password">
                            {getFieldDecorator('W_password', {
                                rules: [{ required: true, message: '请输入您的密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="用户密码" />
                            )}
                        </Form.Item>
                        {/* <Form.Item className="phone">
                            {getFieldDecorator('W_phone', {
                                rules: [{ required: true, message: '请输入您的手机号码!' }],
                            })(
                                <Input addonBefore={prefixSelector} placeholder="手机号码"/>
                            )}
                        </Form.Item> */}
                        {/* <div className="register">如果您是本网站的新用户，请点击<Link to="/register">此处注册</Link></div>                                                */}
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