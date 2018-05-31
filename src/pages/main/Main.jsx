import React, { Component } from 'react';
import { HashRouter, Link } from "react-router-dom"
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Avatar, Modal } from 'antd';
import { withRouter } from "react-router-dom";
import { checkLogin } from "@/redux/user/actions.js";
import { fetchClasses } from "@/redux/class/actions.js";

import SubRoute from '@/routes/main'
import Sider from "@/pages/main/components/sider/Sider.jsx";
import Header from "@/pages/main/components/header/Header.jsx";

import style from'./Main.css';

const { Content } = Layout;

class Main extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      collapsed:false,
    }
  }

  showSiderToggle = () => {
    this.setState({
      collapsed:!this.state.collapsed
    })
  }
  
  componentDidMount() {
    if(!this.props.isLogin){
      this.props.checkLogin();
    }

    this.props.fetchClasses();
  }
  componentDidUpdate() {
    if(!this.props.isLogin){
      this.props.history.replace("/login");
    }
  }
  render() {
    return (
      <div className={style.Main}>
        <HashRouter>
          <Layout style={{height:"100%"}}>
            <Sider menu={this.props.menu} collapsed={this.state.collapsed}></Sider>
            <Layout>
              <Header showSiderToggle={this.showSiderToggle} collapsed={this.state.collapsed}></Header>
              <Content style={{height:"100%"}}>
                <SubRoute></SubRoute>
              </Content>
            </Layout>
          </Layout>
        </HashRouter>
      </div>
    );
  }
}

const MenuSelecor = (classlist) => {
  let classMenu = [
    {
      txt:"全部",
      icon:"",
      link:"/main/article/全部",
      class_id: -1
    }
  ];
  classlist.forEach((item) => {
    classMenu.push({
      txt:item.class_name,
      icon:"",
      link:"/main/article/"+item.class_name,
      class_id: item.class_id
    })
  })
  
  let menu = [
    {
      txt:"文章",
      key:"article",
      icon:"copy",
      link:"",
      childrenMenu:classMenu
    },
    {
      txt:"个人信息",
      key:"person",
      icon:"bar-chart",
      link:"/main/person",
      childrenMenu:[]
    }
  ]
  return menu
}

export default connect(
  state => ({
    menu: MenuSelecor(state.class.classList),
    isLogin: state.user.isLogin,
  }),
  {
    checkLogin,
    fetchClasses
  }
)(withRouter(Main));
