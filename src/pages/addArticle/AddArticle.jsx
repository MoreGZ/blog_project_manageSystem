import React,{Component} from 'react';
import { withRouter } from 'react-router'
import { Modal } from 'antd';
import { connect } from 'react-redux';

import Editor from '@/components/editor/Editor.jsx';
import LoadingBox from '@/components/loadingBox/LoadingBox.jsx'

const confirm = Modal.confirm;
const warning = Modal.warning;
const error = Modal.error;
const info = Modal.info;
class AddArtilce extends Component {
    constructor(props){
        super(props);

        this.publicArticle = this.publicArticle.bind(this);
        this.returnBack = this.returnBack.bind(this);

        this.state = {
            isPublic: false,
            isSave: false,
            title:"",
            content:'',
        }
    }

    publicArticle = () => {
        confirm({
            title: '圈定要发布文章吗?',
            cancelText: "否",
            okText: "是",
            // content: '圈定要发布文章吗',
            onOk: this.publicOkHandler
        });
    }

    publicOkHandler = () => {
        this.setState({
            isSave: true
        })        
    }

    returnBack = () => {
        if(this.state.isSave) return;
        warning({
            title: '您正在编辑，确定要退出吗?',
            okText: "是",
            maskClosable: true,
            onOk: () => {
                this.props.history.push(`/main/article/${this.props.match.params.articleClass}`);
            }
        });
    }

    onTitleChange = (title) => {
        this.setState({
            title: title,
            isSave: false
        },)
    }

    onContentChange = (content) => {
        this.setState({
            content: content,
            isSave: false
        })
    }

    componentWillReceiveProps(nextProps){
        if(this.props.isArticleLoading && !nextProps.isArticleLoading){
            if(this.props.latestErrorMessage){
                error({
                    title:this.props.latestErrorMessage,
                    onOk: () => {

                    }
                })
            }
        }
    }

    render(){
        return (
            <div>
                <Editor 
                    onTitleChange={this.onTitleChange} 
                    onContentChange={this.onContentChange} 
                    onFinish={this.publicArticle}
                    finishButtonText="发布文章"
                    onReturnBack={this.returnBack}
                ></Editor>
                {
                    this.state.isPublic ?
                    <LoadingBox></LoadingBox> :
                    ""
                }
            </div>
        )
    }
}

export default withRouter(AddArtilce)