import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './article.css';
import { Layout, Breadcrumb, Icon, Input, Button, Pagination, Card, Row, Col, Modal,Progress } from 'antd';
// import MarkdownEditor from '@/components/normal/markdownEditor/markdownEditor.jsx'
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;
const Search = Input.Search;


class ArticlePage extends Component {
    state = {
        visible: false,
        articles:[
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
            {
                title:"this is title",
                discription:"this is description, this is description."
            },
        ]
    }
    onShowSizeChange = (current, pageSize) => {
        
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
    render(){
        // 将文章一维数组变成两位数组
        let articles2 = [];
        articles2[0] = [];
        let x = 0;
        let y = 0;
        this.state.articles.forEach((item) => {
            if(y<6){
                articles2[x].push(item);
                y++;
            }else{
                x++;
                y = 0;
                articles2[x] = [];
            }
        })
        return (
            <Layout style={{  height:"100%" }}>
                <div style={{ padding: "0px 24px" }}>
                    <Breadcrumb style={{ margin: '20px 0',float:"left" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                        style={{ margin: '16px 0', float:"right", width:"250px" }}
                    />
                    <Link to={`${this.props.path}/addArticle`}>
                        <Button type="primary" icon="plus" size="small" className={style.add_article_btn}>添加文章</Button>
                    </Link>
                </div>
                <Content style={{ margin: 0, position: 'relative', height: `100%`, overflow:"auto"}}>
                    <div style={{ padding: "0px 24px", overflow:'auto',position:"absolute",top:"0px",left:"0px",right:"0px",bottom:"64px"}}>
                    {
                        articles2.map((rowItem) => {
                            return (
                                <Row  type="flex" justify="left" align="middle" gutter={24} style={{marginBottom:"16px"}}>
                                {
                                    rowItem.map((colItem) => {
                                        return (
                                            <Col span={4}>
                                                <Card
                                                    style={{minWidth:"150px"}}
                                                    cover={<img alt="example" src="http://localhost:3001/img/1.jpg" />}
                                                    actions={[<Icon type="delete" />, <Link to={`${this.props.path}/${colItem.title}/edit`}><Icon type="edit" /></Link>]}
                                                >
                                                    <Meta
                                                        title="xxx"
                                                        description="this is description"
                                                    />
                                                </Card>
                                            </Col>
                                        )                          
                                    })
                                }
                                </Row>
                            )
                            
                        })
                    }   
                    </div>
                    <Footer style={{ position:'absolute',bottom:"0px",width:"100%",background:"#fff",padding:"20px 24px"}}>
                        <Pagination showQuickJumper onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} style={{float:"right"}}/>
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

export default ArticlePage;