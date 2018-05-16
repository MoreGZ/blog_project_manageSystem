import React, { Component } from 'react';
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";

import ArticlePage from "@/components/subpages/article/article.jsx";
import StatisticsPage from "@/components/subpages/statistics/statistics.jsx";
import NoticePage from "@/components/subpages/notice/notice.jsx";
import SetPersonPage from "@/components/subpages/setting_person/setting_person.jsx";
import SetThemePage from "@/components/subpages/setting_theme/setting_theme.jsx";
import markdownEditor from '@/components/normal/markdownEditor/markdownEditor.jsx';

class PageRoute extends Component{
    render(){
        return (
            <Switch>
                <Route exact path="/article/:articleClass" component={ArticlePage}></Route>
                <Route exact path="/article/:articleClass/:articleTitle/edit" component={markdownEditor}></Route>
                <Route exact path="/article/:articleClass/addArticle" component={markdownEditor}></Route>
                <Route exact path="/statistics" component={StatisticsPage}></Route>
                <Route exact path="/notice" component={NoticePage}></Route>
                <Route exact path="/setting/person" component={SetPersonPage}></Route>
                <Route exact path="/setting/theme" component={SetThemePage}></Route>
                <Redirect to="/article/全部"></Redirect>
            </Switch>
        )
    }
}

export default PageRoute;