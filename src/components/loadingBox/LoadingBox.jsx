import React from 'react';
import { Spin, Icon } from 'antd';

import style from './LoadingBox.css';

console.log(style);

const LoadingBox = (props) => (
    <div className={style.loading_box}>
        <Spin {...props}/>
    </div>
)

export default LoadingBox;