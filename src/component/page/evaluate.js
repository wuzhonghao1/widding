import React, { Component } from 'react';
import { Comment, Tooltip, List, Avatar, Form, Button,Input } from 'antd';
import moment from 'moment';

const requireContext = require.context("../../static/picture", true, /\.(jpg|jpeg|png)$/);
const images = requireContext.keys()
const data = [
  {
    // actions: [<span>Reply to</span>],
    author: '雅***正',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>从早上7点开始 辛苦一天的拍摄结束啦 感谢所有人的关照，化妆师小雅 全程跟装 摄影师认真负责 各种教学 底片看了一部分 还不错！！最后期待修片完成后的效果了.</p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    // actions: [<span>Reply to</span>],
    author: 'Han 晗',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>拍完了婚纱照，累并快乐着……感谢皇甫老师不厌其烦的教我摆胳膊肘?还有礼服师黄敏，不厌其烦地让我试衣服，挑出最合适的，当然还有化妆师小月，耐心照顾我，给我做造型，小胖墩助理.</p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    // actions: [<span>Reply to</span>],
    author: '梦**e',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>王建付师傅很幽默搞笑的 哈哈哈 服务态度很好的 一对一的 彭善良兄弟也很好一直面对微笑 贺诗翊化妆师很敬业很靠谱很专业很温柔 就是很好的服务 贴心专业得 车接车送也很便捷 很满意.</p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];
const TextArea = Input.TextArea;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
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
  getImages = (url) => {
    let image = require("../../static/picture" + images.filter(
      x => x === url)[0].slice(1))
    return image
  }
  state = {
    comments: [],
    submitting: false,
    value: '',
  }
  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
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
                        header={`${data.length} replies`}
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                        <Comment
                            // actions={item.actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                        />
                        )}
                    />
                    <div>
                        {comments.length > 0 && <CommentList comments={comments} />}
                        <Comment
                          avatar={(
                            <Avatar
                              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                              alt="Han Solo"
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
                    </div>
            </div>
        )
    }
}
export default Evaluate