import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Layout, Menu, Icon } from 'antd';

import style from './sider.css';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;



class CSider extends Component {
    render(){
        return (
            <Sider
                trigger={null}
                collapsed={this.props.collapsed} 
                style={{height:"100%"}} 
            >
                <div className={style.sider_title}></div>
                <Menu theme="dark" defaultSelectedKeys={['article0']} mode="inline">
                    {
                        this.props.menu.map(( item, index ) => {
                            let menuItem = (
                            <Menu.Item key={item.key}>
                                <Link to={item.link}>
                                <Icon type={item.icon}></Icon>
                                <span>{item.txt}</span>
                                </Link>
                            </Menu.Item>
                            )

                            let subMenu = (
                                <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.txt}</span></span>}>
                                    {
                                    item.childrenMenu.map(( childrenItem, childrenIndex )=>{
                                        return (
                                        <Menu.Item key={item.key+childrenIndex}>
                                            <Link to={childrenItem.link}>
                                            <span>{childrenItem.txt}</span>
                                            </Link>
                                        </Menu.Item>
                                        )
                                    })
                                    }
                                </SubMenu>
                            )

                            return item.childrenMenu.length===0 ? menuItem : subMenu
                        })
                    }
                </Menu>
            </Sider> 
        )
    }
}

export default CSider