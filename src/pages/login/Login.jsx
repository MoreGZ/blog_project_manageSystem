import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Button, Checkbox, Form, message } from 'antd';
import { login, resetError } from '@/redux/user/actions.js';
import { withRouter } from "react-router-dom";

import style from './Login.css';

import LoadingBox from '@/components/loadingBox/LoadingBox.jsx'

const FormItem = Form.Item;
class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err){
        // 登录操纵逻辑
        this.props.login(values.username,values.password);
      }
    });
  }

  // 记住密码
  remenber = () => {
    let value = this.props.form.getFieldsValue().remenber;
    if(value){
      // 记住密码的逻辑
    }else{
      // 取消记住密码的逻辑
    }
  }

  loginErrorHandler = {
    "000": () => {
      message.error(this.props.latestErrorMessage);
      this.props.resetError();
    },
    "006": () => {
      message.error(this.props.latestErrorMessage);
      this.props.resetError();
    }
  }
  
  componentDidUpdate(){
    if(this.props.isLogin){
      this.props.history.replace("/main");
    }

    if(this.props.latestErrorCode){
      console.log(this.props.latestErrorCode)
      this.loginErrorHandler[this.props.latestErrorCode]();
    }

  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className={style.Login}>
        <div className={style.main_box}>
          {
            this.props.isLoginging ? <LoadingBox  indicator={<Icon type="loading" style={{ fontSize: 30 }} spin />}></LoadingBox> : ""
          }
          <div className={style.title}>
            <h1 className={style.title_p}>后台管理系统{this.props.latestErrorCode}</h1>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {
                getFieldDecorator("username",{
                    rules:[{required: true, message: "用户名不能为空"}]
                  }
                )(
                  <Input 
                    addonBefore={<Icon type='user'/>}
                    placeholder="请输入用户名"
                    size='large'
                    >
                  </Input>      
                )
              } 
            </FormItem>
            <FormItem>
                {
                  getFieldDecorator("password",{
                      rules:[{required: true, message: "密码不能为空"}]
                    }
                  )(
                    <Input 
                      addonBefore={<Icon type='lock'/>}
                      placeholder="请输入密码"
                      size='large'
                      type='password'>
                    </Input>   
                  )
                }
            </FormItem>
            <FormItem>
              {getFieldDecorator('remenber', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox onChange={this.remenber}>记住账号密码</Checkbox>
              )}
            </FormItem>
            <Button 
              style={{width:'100%'}} 
              type="primary" 
              size="large"
              htmlType="submit"
            >
              登录
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    isLoginging: state.user.isLoading,
    isLogin: state.user.isLogin,
    latestErrorCode: state.user.latestErrorCode,
    latestErrorMessage: state.user.latestErrorMessage
  }),
  {
    login,
    resetError,
  }
)(Form.create()(withRouter(App)));