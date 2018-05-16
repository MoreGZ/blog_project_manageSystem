import React, { Component } from 'react';
import marked from 'marked';
import { Button, Icon, Tooltip } from 'antd';

import style from './markdownEditor.css';
console.log(style);
class MarkdownEditor extends Component {
    state = {
        title:"",
        content:`# Live demo
Changes are automatically rendered as you type.
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below
<blockquote>
This blockquote will change based on the HTML settings above.
</blockquote>
## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
<Markdown source="# Your markdown here" />,
document.getElementById('content')
);
\`\`\`
Pretty neat, eh?
## Tables?
| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal
        `,
    }
    update = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    updateTitle = (e) => {
        this.setState({
            title:e.target.value
        })
    }
    render(){
        return (
            <div className={style.markdown_editor}>
                <div className={style.left}>
                    <input 
                        type="text" 
                        className = {style.title_input}
                        placeholder="请填写标题"
                        onChange = {this.updateTitle}
                    />
                    <div className={style.toolbar}>
                        <Tooltip placement="topLeft" title="退出" arrowPointAtCenter>
                            <Button type="primary" icon="rollback" style={{marginRight:"5px"}}></Button>
                        </Tooltip>
                        <Button icon="upload">
                            上传图片
                        </Button>
                        <Button type="primary" icon="check" style={{float:"right"}}>
                            发布文章
                        </Button>
                    </div>
                    <textarea 
                        className={style.textarea}
                        onChange = {this.update}
                    >
                        {this.state.content}
                    </textarea>  
                </div>         
                <div 
                    className={style.right}
                >
                    <h1 className={style.title}>{this.state.title}</h1>
                    <div 
                        className={style.preview}
                        dangerouslySetInnerHTML={{__html:marked(this.state.content)}}
                    >    
                    </div>
                </div>            
            </div>
        )
    }
}

export default MarkdownEditor;