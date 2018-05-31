import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Article.css';
import { Layout, Breadcrumb, Icon, Input, Button, Pagination, Card, Row, Col, Modal, Spin } from 'antd';
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';

import { fetchArticlesBiPageAndClass, fetchFirstPageArticlesByClass, changePage } from '@/redux/article/actions.js'
import pageHoc from "@/components/hoc/pageHoc.jsx";
import LoadingBox from '@/components/loadingBox/LoadingBox.jsx'

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;
const Search = Input.Search;
const confirm = Modal.confirm

class ArticlePage extends Component {
    state = {
        visible: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
    onChangePage = (nextPage, pageSize) => {
        let className = this.props.match.params.articleClass === "全部" ? "" : this.props.match.params.articleClass;
        this.props.changePage(nextPage, className);
    }

    onDelectArticleHandler = (article_id, article_title) => {
        confirm({
            title: `确定要删除文章”${article_title}“`,
            onOk:() => {
                console.log('OK');
            },
            onCancel:() => {
                console.log('Cancel');
            },
        })
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.articleClass !== this.props.match.params.articleClass){
            console.log(nextProps.match.params.articleClass)
            if(nextProps.match.params.articleClass === "全部"){
                this.props.fetchFirstPageArticlesByClass();
            }else{
                this.props.fetchFirstPageArticlesByClass(nextProps.match.params.articleClass);
            }
        }
    }

    componentDidMount() {
        if(this.props.match.params.articleClass === "全部"){
            this.props.fetchFirstPageArticlesByClass();
        }else{
            this.props.fetchFirstPageArticlesByClass(this.props.match.params.articleClass);
        }
        
    }

    
    componentDidUpdate() {
    }
    render(){
        const articlesContent = (
            <Row type="flex" justify="left" align="middle" gutter={24} style={{marginBottom:"16px"}}>
                {
                    this.props.articles.map((colItem,index) => {
                        return (
                            <Col span={4} key={index}>
                                <Card
                                    style={{minWidth:"150px"}}
                                    cover={<img alt="example" src="http://localhost:3001/img/1.jpg" />}
                                    actions={[<Icon type="delete" onClick={this.onDelectArticleHandler.bind(this, colItem.article_id, colItem.article_title)}/>, <Link to={`/editArticle/${colItem.article_id}`}><Icon type="edit" /></Link>]}
                                >
                                    <Meta
                                        title={colItem.title}
                                        description={colItem.content.length > 10 ? colItem.content.slice(0,10)+"..." : colItem.content}
                                    />
                                </Card>
                            </Col>
                        )                          
                    })
                }
            </Row> )
        return (
            <Layout style={{height:"100%"}}>
                <div style={{ padding: "0px 24px" }}>
                    <Breadcrumb style={{ margin: '20px 0',float:"left" }}>
                        <Breadcrumb.Item>文章</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.props.match.params.articleClass}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                        style={{ margin: '16px 0', float:"right", width:"250px" }}
                    />
                    <Link to={`/addArticle/${this.props.match.params.articleClass}`}>
                        <Button type="primary" icon="plus" size="small" className={style.add_article_btn}>添加文章</Button>
                    </Link>
                </div>
                <Content style={{ margin: 0, position: 'relative', height: `100%`, overflow:"auto"}}>
                    <div style={{ padding: "0px 24px", overflow:'auto',position:"absolute",top:"0px",left:"0px",right:"0px",bottom:"64px"}}>
                        {
                            this.props.articles.length ? 
                            articlesContent :
                            <LoadingBox></LoadingBox>
                        }
                    </div>
                    
                    <Footer style={{ position:'absolute',bottom:"0px",width:"100%",background:"#fff",padding:"20px 24px"}}>
                        <Pagination 
                            showQuickJumper 
                            onChange = {this.onChangePage}
                            current = {this.props.currentPage}
                            // defaultCurrent={1} 
                            defaultPageSize = {1}
                            total={this.props.totalPage} 
                            style={{float:"right"}}
                        />
                    </Footer>
                </Content>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </Layout>
        )
    }
}

const articlesSelector = (articles, page) => {
    return articles[page-1];
}

export default pageHoc(withRouter(connect(
    (state) => ({
        articles: articlesSelector(state.article.articles,state.article.currentPage) ? articlesSelector(state.article.articles,state.article.currentPage) : [],
        totalPage: state.article.totalPage,
        currentPage: state.article.currentPage,
        allArticles: state.article.articles
    }),
    {
        fetchArticlesBiPageAndClass,
        fetchFirstPageArticlesByClass,
        changePage
    }
)(ArticlePage)));