import React, { Component } from 'react';
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux"

import Main from "@/pages/main/Main.jsx";
import Login from '@/pages/login/Login.jsx';
import NotFound from '@/pages/notFound/NotFound.jsx';
import EditArticle from '@/pages/editArticle/EditArticle.jsx';
import AddArticle from '@/pages/addArticle/AddArticle.jsx';

class PageRoute extends Component{
    render(){
        return (
            <Switch>
                <Route path="/main" component={Main}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/editArticle/:artilceId" component={EditArticle}></Route>
                <Route exact path="/addArticle/:articleClass" component={AddArticle}></Route>
                <Route path="/**" component={NotFound}></Route>
                
                {/* <Redirect to="/main"></Redirect> */}
            </Switch>
        )
    }
}

export default PageRoute;