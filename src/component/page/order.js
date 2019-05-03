import React, { Component } from 'react';
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Radio, InputNumber,
    DatePicker
  } from 'antd';
import axios from 'axios';

  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  const RadioGroup = Radio.Group;
  
  const options = [{
    value: '夕颜花开',
    label: '夕颜花开',
  }, {
    value: '烂漫随心',
    label: '烂漫随心',
  },{
    value: '蜜恋阳光',
    label: '蜜恋阳光',
  },
  {
    value: '比翼双飞',
    label: '比翼双飞',
  },
  {
    value: '酒笙倾凉',
    label: '酒笙倾凉',
  },
  {
    value: '伊人夕岸',
    label: '伊人夕岸',
  },
  {
    value: '盛夏约定',
    label: '盛夏约定',
  },
  {
    value: '入骨相思',
    label: '入骨相思',
  },
  {
    value: '笑逐初夏',
    label: '笑逐初夏',
  },
  {
    value: '蓝色告白礼',
    label: '蓝色告白礼',
  },
  {
    value: '花若浮生',
    label: '花若浮生',
  },
  {
    value: '爱意永恒',
    label: '爱意永恒',
  }

];
  
  

class Order extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        value: 1, //判断性别单选框
      };

      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            axios.post('/api/orderAdd',{header:{"Content-Type": "application/x-www-form-urlencoded"}},values)
            // JSON.parse(result)
             .then((response)=>{
                 console.log(response);
             })
             .catch(function(error){
                 console.log(error);
             });
            }
        });
      }   
      onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      }
      ageChange = (value)=> {
        console.log('changed age', value);
      }
    timeOrder = (date, dateString)=> {
        console.log(date, dateString);
      }

    serSelected = (value) => {
        console.log(value);
      }

    Available = (value) => {
        console.log('Available', value);
      }

      
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
    
        const formItemLayout = {
          labelCol: {
            span:6
          },
          wrapperCol: {
            span:18
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
        };
        const prefixSelector = getFieldDecorator('prefix', {
          initialValue: '86',
        })(
          <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
        );

        return (
          <div className="order_bg" style={{width:"100%",height:"100%"}}>
            <div style={{width:"500px",margin:"0 auto",paddingTop:"200px"}}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item  label="姓名">
                            {getFieldDecorator('username', {
                                rules: [{
                                required: true,
                                message: '请输入您的姓名',
                                }],
                            })(
                                <Input placeholder="请输入您的姓名" />
                            )}
                        </Form.Item>
                        <Form.Item  label="性别">
                            {getFieldDecorator('sex', {
                                rules: [{
                                required: true,
                                message: '请选择您的性别',
                                }],
                            })(
                                <RadioGroup onChange={this.onChange} value={this.state.value}>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={2}>女</Radio>                                  
                                </RadioGroup>
                            )}
                        </Form.Item>
                        <Form.Item  label="年龄">
                            {getFieldDecorator('age', {
                                rules: [{
                                required: true,
                                message: '请输入您的年龄',
                                }],
                            })(
                                <InputNumber min={20} max={100} defaultValue={25} onChange={this.ageChange} />
                            )}
                        </Form.Item>
                        <Form.Item
                        label={(
                            <span>
                            用户昵称&nbsp;
                            <Tooltip title="您想让别人怎么称呼您?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        )}
                        >
                            {getFieldDecorator('nickname', {
                                rules: [{ required: true, message: '请输入您的昵称!', whitespace: true }],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        
                        <Form.Item
                        label="联系方式"
                        >
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: '请输入您的手机号码!' }],
                            })(
                                <Input addonBefore={prefixSelector} />
                            )}
                        </Form.Item>
                        <Form.Item  label="预约拍摄日期">
                            {getFieldDecorator('ordertime', {
                                rules: [{
                                required: true,
                                message: '请选择您的预约拍摄日期',
                                }],
                            })(
                                <DatePicker onChange={this.timeOrder} placeholder={'请选择预约拍摄日期'}/>
                            )}
                        </Form.Item>
                        
                        <Form.Item  label="预算可用开销">
                            {getFieldDecorator('money', {
                                rules: [{
                                required: true,
                                message: '请填写您的预算开销',
                                }],
                            })(
                                <InputNumber
                                defaultValue={ 1000 } min={1000}
                                formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\￥\s?|(,*)/g, '')}
                                onChange={this.Available}
                              />
                            )}
                        </Form.Item>
                        <Form.Item  label="预约拍摄系列">
                            {getFieldDecorator('orderseries', {
                                rules: [{
                                required: true,
                                message: '请选择您想预约的拍摄系列',
                                }],
                            })(
                                <Cascader options={options} onChange={this.serSelected} changeOnSelect placeholder={'请选择您想预约的拍摄系列'}/>
                            )}
                        </Form.Item>
                       
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">提交</Button>
                        </Form.Item>
                    </Form>
            </div>
          </div>
        )
    }
}
const WrappedOrderForm = Form.create({ name: 'order' })(Order);
export default WrappedOrderForm