import React, { Component } from 'react';
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
  

class Register extends Component{ 
       state={
          loading: false
       }       

    
      handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          this.setState({
            picUrl: info.file.name
          })
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
            let submitData = {
              pic: this.state.picUrl,
              ...values
            }
            axios.post('/api/register', submitData)
                   // JSON.parse(result)         
                    .then((response)=>{
                        console.log(response);
                        console.log(response.data);
                        if(response.data==='注册成功'){
                            message.success("注册成功", 2).then(()=>{window.location.reload() })
                        }else{
                            message.error("用户已存在！")
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
          // const prefixSelector = getFieldDecorator('prefix', {
          //   initialValue: '86',
          // })(
          //   <Select style={{ width: 70 }}>
          //     <Option value="86">+86</Option>
          //     <Option value="87">+87</Option>
          //   </Select>
          // );
         return(
            <Modal
            visible={visible}
            footer={null}
            title="注册"
            onCancel={onCancel}
          >
                 <Form onSubmit={this.handleSubmit} className="regis-form">
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="api/fileupload"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" className="userpic"/> : uploadButton}
                        </Upload>
                        <Form.Item className="nick_name">
                            {getFieldDecorator('nickname', {
                                rules: [{ required: true, message: '请输入您的用户昵称!' }],
                            })(
                              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="请输入您的用户名!" />
                            )}
                        </Form.Item>
                        <Form.Item className="password">
                            {getFieldDecorator('password', {
                              rules: [{ required: true, message: '请输入您的密码!' }, { min: 6, message: '密码长度不小于6位!'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"  placeholder="请输入您的密码" />
                            )}
                        </Form.Item>
                        <Form.Item className="phone">
                            {getFieldDecorator('phone', {
                              rules: [{ required: true, message: '请输入您的手机号码!' }, {len: 11, message: "手机号长度为11位！"}],
                            })(
                                <Input  placeholder="请输入您的手机号码!" />
                            )}
                        </Form.Item>                                              
                        <Form.Item className="regis-btn">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                注册
                            </Button>
                        </Form.Item>
                </Form>
          </Modal>
         )
     }
}
const RegisForm = Form.create({ name: 'register' })(Register);
export default RegisForm