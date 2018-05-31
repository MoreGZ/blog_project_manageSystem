import React, {Component} from 'react';
import { Progress } from 'antd';
import { connect } from "react-redux";


class LoadingBar extends Component {

    constructor(props){
        super(props);

        this.loadingAnimate = this.loadingAnimate.bind(this);
        this.finishLoadingAnimate = this.finishLoadingAnimate.bind(this);

        this.state = {
            percent: 0
        }
    }

    loadingAnimate = () => {
        let speed = 10;
        this.t = window.setInterval(()=> {
            this.setState({
                percent: this.state.percent+speed
            })
            speed = speed/2;
        },300)
    }

    finishLoadingAnimate = () => {
        window.clearInterval(this.t);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.isLogouting){
            let speed = 20;
            this.state.percent = 0;
            let t = setInterval(()=> {
                this.setState({
                    percent: this.state.percent+speed
                })
                speed = speed/2;
            },700)

            this.setState({
                t: t
            })
        }else{
            clearInterval(this.state.t);
            this.setState({
                percent: 100
            })
        }
    }

    render() {
        return (
            <Progress percent={this.state.percent}  status="active" showInfo={false} strokeWidth={3} style={{position:"absolute",width:"100%",top:'-12px',left:"0px"}}/>
        )
    }
}

export default connect(
    (state) => ({
        isLogouting: state.user.isLoading
    })
)(LoadingBar);