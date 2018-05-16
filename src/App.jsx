import React, { Component } from 'react';
import { connect } from 'react-redux';

import { checkLog } from "@/redux/action.js";

import Main from "@/components/pages/main/main.jsx";
import Login from "@/components/pages/login/login.jsx";

import isloginHoc from '@/components/hoc/isloginHoc';


class App extends Component {
  state = {}
  componentDidMount(){
    this.props.checkLog();
  }
  render() {
    const AppView = isloginHoc(this.props.isLogin)(Main,Login);
    return (
      <div className="App" style={{height:'100%'}}>
        <AppView></AppView>  
      </div>
    );
  }
}
export default connect(
  (state) => ({
    isLogin:state.isLogin
  }),
  {
    checkLog
  }
)(App);
