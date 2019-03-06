import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Index from "./page/index"
import News from "./page/news"
import ErrorPage from "./page/error"
import Empty from "./page/empty"


class SystemRoute extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <Router>
                <Switch>
                    {/* 提前采购 */}
                    <Route exact path="/" component={Index} />
                    {/* 项目采购预算 */}
                    <Route exact path="/news" component={News} />
                    {/* 错误页面 */}
                    <Route path="/errorPage" component={ErrorPage} />
                    {/* 空页面 */}
                    <Route path="/empty" component={Empty} />
                </Switch>
            </Router>
        )
    }
}
export default SystemRoute