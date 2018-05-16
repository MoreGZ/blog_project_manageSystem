import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Button, Checkbox, Form, Spin } from 'antd';
import { login, logout } from '@/redux/action.js';

import style from './login.css';

import isloadingHoc from '@/components/hoc/isloadingHoc';

const FormItem = Form.Item;
class App extends Component {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err){
        // 登录操纵逻辑
        let x = this.props.login(values.username,values.password);
      }
    });
  }
  remenber = () => {
    let value = this.props.form.getFieldsValue().remenber;
    if(value){
      // 记住密码的逻辑
    }else{
      // 取消记住密码的逻辑
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    const buttonLoading = <Button 
        style={{width:'100%'}} 
        type="primary" 
        size="large"
      >
        <Spin indicator={<Icon type="loading" style={{ fontSize: 24 , color:"white"}} spin />} />
      </Button>
    
    const buttonNormal = <Button 
      style={{width:'100%'}} 
      type="primary" 
      size="large"
      htmlType="submit"
    >
      登录
    </Button>

    console.log(Spin);
    return (
      <div className={style.Login}>
        <div className={style.main_box}>
          <div className={style.title}>
            <h1 className={style.title_p}>后台管理系统</h1>
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
            {
              this.props.isLoading ? buttonLoading : buttonNormal
            }
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    username: state.username,
    isLogin: state.isLogin,
    isLoading: state.isLoading
  }),
  {
    login,
    logout
  }
  
)(Form.create()(App));
;