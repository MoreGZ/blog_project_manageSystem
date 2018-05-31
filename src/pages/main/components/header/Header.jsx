import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Layout, Menu, Icon, Avatar, Spin } from 'antd';
import { connect } from 'react-redux';
import TransitionGroup from 'react-addons-css-transition-group';

import style from './Header.css';
import { logout } from '@/redux/user/actions';

import Progress from '@/components/loadingBar/LoadingBar.jsx';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

class CHeader extends Component {
    state = {
      progress: 30
    }
    render(){
        return (
          <Header style={{ background: '#fff',padding:"0 10px",position:"relative"}} >
            {/* <Progress/> */}
            <Icon 
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.showSiderToggle}
              style={{cursor:"pointer",fontSize:"18px"}}
            ></Icon>
              <TransitionGroup transitionName="fade" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                {
                  (this.props.isUserLoading || this.props.isArticleLoading) ? 
                  <Spin 
                    className={style.loadingSpin} 
                    indicator={<Icon type="loading" style={{ fontSize: 26 }} spin />}
                  ></Spin>
                  : ""
                }
              </TransitionGroup>
            <Menu mode="horizontal" style={{float:"right",lineHeight:'64px'}}>
              <Menu.Item key="notice">
                <span>通知</span>
              </Menu.Item>
              <SubMenu title={<Avatar  src="./favicon.ico"/>}>
                <Menu.Item key="setting0">编辑个人信息</Menu.Item>
                <Menu.Item key="logout"><div onClick={() => {this.props.logout()}}>退出登录</div></Menu.Item>
              </SubMenu>
            </Menu>
          </Header>   
        )
    }
}

export default connect(
  (state) => ({
    isLogin: state.user.isLogin,
    isUserLoading: state.user.isLoading,
    username: state.user.username,
    avatar: state.user.avatar,
    isArticleLoading:state.article.isLoading
  }),{
    logout
  }
)(CHeader)