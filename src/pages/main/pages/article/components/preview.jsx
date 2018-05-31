import React,{ Component } from 'react';
import marked from 'marked';

import style from '@/style/preview.css';

class Preview extends Component{
    render(){
        return (
            <div className={style.pre_body}>
                <div className="pre_main">
                    <h1 className={style.title}>{this.state.title}</h1>
                    <pre className={style.preview}dangerouslySetInnerHTML={{ __html:marked(this.state.content)}}>  
                    </pre>
                </div>
            </div> 
        )
    }
}



export default Preview
