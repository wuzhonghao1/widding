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
    author: '如*晗',
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
      <Tooltip title={moment().subtract(3, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(3, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    // actions: [<span>Reply to</span>],
    author: '果**多',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>摄影师屈旭升。 特别有耐心的指导我们俩个人动作，很幽默，所以整个拍摄都笑得很开心。化妆师小发，每次换装都会有不同妆容，更多的是找到适合自己的妆容，用很专业的眼光化妆，特别感谢你们，给了一天完整的拍摄.</p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(5, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(5, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    // actions: [<span>Reply to</span>],
    author: '信**然',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>大家都会看评论吧，看看摩卡视觉家的客服小敏多么负责任，一直很热情的发客片我欣赏，全程从不厌烦的和我讨论每个细节，我相信小敏，所以我选择摩卡，我们一生的摩卡，满意到爆的视觉.</p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(5, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(5, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    // actions: [<span>Reply to</span>],
    author: '啦**嘞',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>化妆师梓木是可爱的川妹子，贴心又有耐心！特别会照顾新娘的情绪！摄影师俊昊专业又幽默！一直在调动我们的情绪，对一拍照就会尴尬的我们起到很大帮助！还有摄影师助理梓柯幽默可爱又细心，全程都在拎东西，辛苦你们啦！很开心的一次摄影.</p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(7, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(7, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    // actions: [<span>Reply to</span>],
    author: '等**一人',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>关注摩卡视觉很久了，定了三月初档期，拍照前一天晚上会有化妆老师和摄影老师和顾客沟通，可以提出自己想法，沐沐老师化的妆特别漂亮，而且全天会跟着补妆，颜值也很高哒，美美的，觉得自己变漂亮了N倍.</p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'month').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    // actions: [<span>Reply to</span>],
    author: '素**溪',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>来了以后特别棒，每个人都是特别专业的，化妆师汀娜把我画的特别美，特别有气质，人也特别好，一直跟着补妆，摄影师大杰也拍的特别棒，原版都像大片，给大大的好评！</p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'month').fromNow()}</span>
      </Tooltip>
    ),
  },
];
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
                        header={`真实评价`}
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
                    <div className="add_comment">
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