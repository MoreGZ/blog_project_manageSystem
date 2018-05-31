import React, { Component } from 'react';
import { Route, Switch, HashRouter, Redirect, IndexRedirect } from "react-router-dom";

import ArticlePage from "@/pages/main/pages/article/Article.jsx";
import PersonPage from "@/pages/main/pages/person/Person.jsx";
import NotFound from "@/pages/notFound/NotFound.jsx";

class PageRoute extends Component{
    render(){
        return (
            <Switch>
                <Route exact path="/main/article/:articleClass" component={ArticlePage}></Route>
                <Route exact path="/main/person" component={PersonPage}></Route>

                {/* <Redirect to="/main/article/全部"></Redirect> */}
            </Switch>
        )
    }
}

export default PageRoute;