import React,{ Component } from "react";
import style from './NotFound.css'

class NotFound extends Component{
    state = {
        animated: ''
    };
    enter = () => {
        this.setState({animated: style.hinge})
    };
    render() {
        return (
            <div className={style.center} style={{height: '100%', background: '#ececec', overflow: 'hidden'}}>
                <img src="./img/404.png" alt="404" className={`${style.animated} ${style.swing} ${this.state.animated} `} onMouseEnter={this.enter} />
            </div>
        )
    }
}


export default NotFound;