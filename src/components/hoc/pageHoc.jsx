import React, { Component } from 'react';

const pageHoc = (WrappedComponent) => {
    return class pageComponent extends Component{
        render() {
            return (
                <div style={{height: "100%", width: "100%"}}>
                    <WrappedComponent {...this.dprops}></WrappedComponent>
                </div>
            )
        }
    }
}

export default pageHoc;