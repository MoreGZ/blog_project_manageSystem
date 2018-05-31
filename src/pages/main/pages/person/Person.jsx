import React, { Component } from 'react';

import pageHoc from '@/components/hoc/pageHoc'

class SetPersonPage extends Component {
    render(){
        return (
            <div>
                this is the person page
            </div>
        )
    }
}


export default pageHoc(SetPersonPage);