import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import { Button, Icon, Tooltip, Select, Upload } from 'antd';

import style from './Editor.css';

const Option = Select.Option;
class Editor extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.defaultTitle,
            content: this.props.defaultContent
        }
    }
//     state = {
//         title:"",
//         content:`# Live demo
// Changes are automatically rendered as you type.
// * Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
// * Renders actual, "native" React DOM elements
// * Allows you to escape or skip HTML (try toggling the checkboxes above)
// * If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
// ## HTML block below
// <blockquote>
// This blockquote will change based on the HTML settings above.
// </blockquote>
// ## How about some code?
// \`\`\`js
// var React = require('react');
// var Markdown = require('react-markdown');
// React.render(
// <Markdown source="# Your markdown here" />,
// document.getElementById('content')
// );
// \`\`\`
// Pretty neat, eh?
// ## Tables?
// | Feature | Support |
// | ------ | ----------- |
// | tables | ✔ |
// | alignment | ✔ |
// | wewt | ✔ |
// ## More info?
// Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
// ---------------
// A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal
//         `,
//     }
    static defaultProps = {
        onTitleChange: () => {},
        onContentChange: () => {},
        defaultTitle: "",
        defaultContent: "",
        finishButtonText: "完成",
        onFinish: () => {},
        onReturnBack: () => {},
        onSelcet: () => {},
        selectOptions: [],
        selectDefaultValue: "",
        isShowSelect: false
    }
    update = (e) => {
        this.setState({
            content: e.target.value
        })

        this.props.onContentChange(e.target.value);
    }
    updateTitle = (e) => {
        this.setState({
            title:e.target.value
        })

        this.props.onTitleChange(e.target.value);
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
                        value={this.state.title}
                    />
                    <div className={style.toolbar}>
                        <Tooltip placement="topLeft" title="退出" arrowPointAtCenter>
                            <Button type="primary" icon="rollback" style={{marginRight:"5px"}} onClick={() => {this.props.onReturnBack()}}></Button>
                        </Tooltip>
                        <Button>
                            <Icon type="upload" /> 上传图片
                        </Button>
                        {
                            this.props.isShowSelect ? 
                            <Select defaultValue={this.props.selectDefaultValue} style={{ width: 120 }} onChange={this.props.SelcetHandle}>
                                {
                                    this.props.selectOptions.map((item) => {
                                        return <Option value={item.class_id} key={item.class}>{item.class_name}</Option>
                                    })
                                }
                            </Select> :
                            ""
                        }
                        <Button type="primary" icon="check" style={{float:"right"}} onClick={() => {this.props.onFinish()}}>
                            {this.props.finishButtonText}
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
                    <pre className={style.preview}dangerouslySetInnerHTML={{ __html:marked(this.state.content)}}>  
                    </pre>
                </div>            
            </div>
        )
    }
}

Editor.propTypes = {
    onTitleChange: PropTypes.func.isRequired,
    onContentChange: PropTypes.func.isRequired,
    defaultTitle: PropTypes.string,
    defaultContent: PropTypes.string,
    finishButtonText: PropTypes.string,
    onFinish: PropTypes.func,
    onReturnBack: PropTypes.func,
    onSelcet: PropTypes.func,
    selectOptions: PropTypes.array,
    selectDefaultValue: PropTypes.string,
    isShowSelect: PropTypes.bool
}

export default Editor;