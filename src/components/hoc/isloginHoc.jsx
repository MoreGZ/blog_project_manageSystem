import React,{ Component } from 'react';

let isloginHoc = (islogin) => (LoginView, NoLoginView) => {
    class Hoc extends Component{
        render(){
            return islogin ? <LoginView></LoginView> : <NoLoginView></NoLoginView>
        }
    }
    return Hoc;
}

export default isloginHoc