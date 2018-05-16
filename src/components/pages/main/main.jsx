import React, { Component } from 'react';
import { HashRouter, Link } from "react-router-dom"
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Avatar } from 'antd';
import PageRoute from "@/route/route.jsx";
import { login, logout } from "@/redux/action.js"

import CSider from "@/components/normal/sider/sider.jsx";
import CHeader from "@/components/normal/header/header.jsx";

import style from'./main.css';

const { Content } = Layout;

class Main extends Component {
  state = {
    collapsed:false,
    menu:[
      {
        txt:"文章",
        key:"article",
        icon:"copy",
        link:"",
        childrenMenu:[
          {
            txt:"全部",
            icon:"",
            link:"/article/全部",
          },
          {
            txt:"分类一",
            icon:"",
            link:"/article/分类一",
          },
          {
            txt:"分类二",
            icon:"",
            link:"/article/分类二",
          },
          {
            txt:"分类三",
            icon:"",
            link:"/article/分类三",
          }
        ]
      },
      {
        txt:"统计",
        key:"statistics",
        icon:"bar-chart",
        link:"/statistics",
        childrenMenu:[]
      },
      {
        txt:"通知",
        key:"notice",
        icon:"mail",
        link:"/notice",
        childrenMenu:[]        
      },
      {
        txt:"设置",
        key:"setting",
        icon:"setting",
        link:"",
        childrenMenu:[
          {
            txt:"个人信息",
            icon:"",
            link:"/app/setting/person",
          },
          {
            txt:"皮肤",
            icon:"",
            link:"/app/setting/theme",
          }
        ]        
      }
    ]
  }

  showSiderToggle = () => {
    this.setState({
      collapsed:!this.state.collapsed
    })
  }

  test = () => {
    this.props.login(this.props.username+"x","");
    
  }
  render() {
    return (
      <div className={style.Main}>
        <HashRouter>
          <Layout style={{height:"100%"}}>
            <CSider menu={this.state.menu} collapsed={this.state.collapsed}></CSider>
            <Layout>
              <CHeader showSiderToggle={this.showSiderToggle} collapsed={this.state.collapsed}></CHeader>
              <Content style={{height:"100%"}}>
                <PageRoute></PageRoute>
              </Content>
            </Layout>
          </Layout>
        </HashRouter>
      </div>
    );
  }
}
export default connect(
  state => ({
    username: state.username,
    isLogin: state.isLogin
  }),
  {
    login,
    logout
  }
)(Main);
