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
class EditArticle extends Component {
    constructor(props){
        super(props);

        this.publicArticle = this.publicArticle.bind(this);
        this.returnBack = this.returnBack.bind(this);

        console.log(this.props.article);

        this.state = {
            isPublic: false,
            isSave: false,
            title:this.props.article.title ? this.props.article.title : "",
            content:this.props.article.content ? this.props.article.content : "",
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
                this.props.history.goBack();
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

    componentDidMount() {
        if(!this.props.articles.length){
            this.props.history.replace("/main/article/全部")
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
                    isShowSelect={true}
                    selectDefaultValue={this.props.article.classification}
                    selectOptions={this.props.classList}
                    defaultContent={this.state.content}
                    defaultTitle={this.state.title}
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

const articleSelector = (articles, article_id) => {
    let article = {};
    articles.forEach((articleList) => {
        articleList.forEach((artilceItem) => {
            // console.log(artilceItem)
            if(artilceItem.article_id == article_id) article = artilceItem
        })
    });
    return article;
}

export default withRouter(connect(
    (state, ownProps) => ({
        articles: state.article.articles,
        article: articleSelector(state.article.articles, ownProps.match.params.artilceId),
        classList: state.class.classList
    })
)(EditArticle))