import React, { Component } from 'react';
import {} from 'antd';

let isloadingHoc = (isloading) => (LoadingView,View) => {
    return class Hoc extends Component {
        render(){
            return isloading ? <LoadingView></LoadingView> : <View></View>;
        }
    }
}

export default isloadingHoc;