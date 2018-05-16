import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Layout, Menu, Icon, Avatar, Progress } from 'antd';
import { connect } from 'react-redux';
import { logout } from '@/redux/action';


const { Header } = Layout;
const SubMenu = Menu.SubMenu;

class CHeader extends Component {
    state = {
      progress: 30
    }
    progressLaadingAnimate = () => {
      
    }
    progressFinishLaadingAnimate = () => {

    }
    componentWillReceiveProps(nextProps){
      if(nextProps.isLoading){
        this.progressLaadingAnimate();
      }
    }
    render(){
        return (
          <Header style={{ background: '#fff',padding:"0 10px",position:"relative"}} >
            <Progress percent={30} status="active" showInfo={false} strokeWidth={3} style={{position:"absolute",width:"100%",top:'-12px',left:"0px"}}/>
            <Icon 
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.showSiderToggle}
              style={{cursor:"pointer",fontSize:"18px"}}
            ></Icon>
            <Menu mode="horizontal" style={{float:"right",lineHeight:'64px'}}>
              <Menu.Item key="notice">
                <span>通知</span>
              </Menu.Item>
              <SubMenu title={<Avatar  src="./favicon.ico"/>}>
                <Menu.Item key="setting0">编辑个人信息</Menu.Item>
                <Menu.Item key="logout"><div onClick={this.props.logout}>退出登录</div></Menu.Item>
              </SubMenu>
            </Menu>
          </Header>   
        )
    }
}

export default connect(
  (state) => ({
    username: state.username,
    avatar: state.avatar,
  }),{
    logout
  }
)(CHeader)