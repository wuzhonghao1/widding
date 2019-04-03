import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Index from "./page/index";
import News from "./page/news";
import Brand from "./page/brand";
import ErrorPage from "./page/error";
import Empty from "./page/empty";
import Show from "./page/show";
import Comment from "./page/comment";
import Order from "./page/order";


class SystemRoute extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    {/* 首页 */}
                    <Route exact path="/" component={Index} />                  
                    {/* 品牌简介页面 */}
                    <Route exact path="/brand" component={Brand} />
                    {/* 摄影展示页面 */}
                    <Route exact path="/show" component={Show} />
                     {/* 新闻中心页面 */}
                     <Route exact path="/news" component={News} />
                     {/* 真实评价页面 */}
                    <Route exact path="/comment" component={Comment} />
                     {/* 预约拍摄页面 */}
                     <Route exact path="/order" component={Order} />
                    {/* 错误页面 */}
                    <Route path="/errorPage" component={ErrorPage} />
                    {/* 空页面 */}
                    <Route path="/empty" component={Empty} />
                </Switch>
            </HashRouter>
        )
    }
}
export default SystemRoute