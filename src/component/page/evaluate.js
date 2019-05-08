import React, { Component } from 'react';
import { Comment, Tooltip, List, Avatar, Form, Button,Input } from 'antd';
import moment from 'moment';
import axios from "axios";
const nickname = window.sessionStorage.getItem('nickname')
const pic = window.sessionStorage.getItem('pic')
const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()

const TextArea = Input.TextArea;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    // header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    header={`最新评价`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({
  onChange, onSubmit, submitting, value,
}) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class Evaluate extends Component {  
  state = {
    data: [],
    comments: [],
    submitting: false,
    value: '',
  }
  componentDidMount = async () => {
    console.log(nickname);
    console.log(pic);
    
    axios.get('api/judgelist').then(response => {
      this.setState({
        data: response.data
      })

    })
  }
  getImages = (url) => {
    let image = require("../../static/picture" + images.filter(
      x => x === url)[0].slice(1))
    return image
  }
  handleSubmit = () => {
    console.log(this.state.value);
    
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });
    axios.post('api/publishjudge',{
      nickname: nickname,
      judgetime: moment().format('YYYY-MM-DD HH:mm:ss'),
      pic:pic,
      content: this.state.value
    }).then(response=>{
      if (response.data ==='评价成功！'){
        this.setState({
          submitting: false,
        });
        axios.get('api/judgelist').then(response => {
          this.setState({
            data: response.data
          })

        })
      }
    })
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }
    render() {
      const { comments, submitting, value } = this.state;
        return (
            <div style={{marginTop:"135px"}}>
                  <div className="com_banner">
                      <img src={this.getImages('./com_banner.jpg')} alt="" />
                  </div>
                  <List
                        className="comment-list"
                        header={`真实评价`}
                        itemLayout="horizontal"
                        dataSource={this.state.data}
                        renderItem={item => (
                        <Comment
                            author={item.nickname}
                            avatar={`http://localhost:8888/upload/${item.pic}`}
                            content={item.judgecontent}
                            datetime={<Tooltip title={moment(item.judgetime).format('YYYY-MM-DD HH:mm:ss')}>
                              {moment(item.judgetime).endOf('day').fromNow()}
                              </Tooltip> 
                            }
                        />
                        )}
                    />
                    {
                      nickname ? <div className="add_comment">
                        {comments.length > 0 && <CommentList comments={comments} />}
                        <Comment
                          avatar={(
                            <Avatar
                              src={`http://localhost:8888/upload/${pic}`}
                              title={nickname}
                            />
                          )}
                          content={(
                            <Editor
                              onChange={this.handleChange}
                              onSubmit={this.handleSubmit}
                              submitting={submitting}
                              value={value}
                            />
                          )}
                        />
                      </div>:""
                    }
                    
            </div>
        )
    }
}
export default Evaluate