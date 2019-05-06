import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Index from "./page/index";
import News from "./page/news";
import Brand from "./page/brand";
import ErrorPage from "./page/error";
import Empty from "./page/empty";
import Show from "./page/show";
import Evaluate from "./page/evaluate";
import Order from "./page/order";
import Gusetpic from './page/gusetpic';
import News_detail from './page/news_detail';
// import News_detail02 from './page/news_detail02';


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
                    {/*摄影展示二级页面*/}
                    <Route exact path="/guestpic/:id" component={Gusetpic} />
                     {/* 新闻中心页面 */}
                     <Route exact path="/news" component={News} />
                     {/*新闻中心详情页*/}
                     <Route exact path="/news_detail/:id" component={News_detail} />
                     {/* <Route exact path="/news_detail02" component={News_detail02} /> */}
                     {/* 真实评价页面 */}
                    <Route exact path="/evaluate" component={ Evaluate } />
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