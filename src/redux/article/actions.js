import * as actionTypes from "./actionTypes";
import { fetchArticlesByClassAndPageApi, fetchFirstPageArticlesByClassApi } from "@/axios/api.js";

export const fetchFirstPageArticlesByClass = (className) => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_FIRSTPAGEARTICLE_BYCLASS_START
    })
    return fetchFirstPageArticlesByClassApi({
        params:{
            class_name: className
        }
    }).then((result) => {
        if(result.code !== '001' && result !== "002"){
            dispatch({
                type: actionTypes.FETCH_ARTICLES_BYCLASSANDPAGE_ERROR,
                latestErrorCode: result.code,
                latestErrorMessage: result.message
            })
        }else{
            dispatch({
                type: actionTypes.FETCH_FIRSTPAGEARTICLE_BYCLASS_FINISH,
                ...result
            })
        }
    }).catch((err) => {
        dispatch({
            type: actionTypes.FETCH_ARTICLES_BYCLASSANDPAGE_ERROR,
            latestErrorCode: "000",
            latestErrorMessage: err.message
        })
    })
}

export const fetchArticlesBiPageAndClass = (page, className) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.FETCH_ARTICLES_BYCLASSANDPAGE_START
    })
    return fetchArticlesByClassAndPageApi({
        params:{
            page: page,
            class_name: className
        }
    }).then((result) => {
        if(result.code !== '001' && result !== "002"){
            dispatch({
                type: actionTypes.FETCH_ARTICLES_BYCLASSANDPAGE_ERROR,
                latestErrorCode: result.code,
                latestErrorMessage: result.message
            })
        }else{
            let articles = getState().article.articles;
            articles[page-1] = result.data;
            console.log(articles);
            dispatch({
                type: actionTypes.FETCH_ARTICLES_BYCLASSANDPAGE_FINISH,
                page: page,
                ...result,
                articles: articles
            })
        }
    }).catch((err) => {
        dispatch({
            type: actionTypes.FETCH_ARTICLES_BYCLASSANDPAGE_ERROR,
            latestErrorCode: "000",
            latestErrorMessage: err.message
        })
    })
}

export const changePage = (nextPage, className) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.CHANGE_PAGE,
        nextPage: nextPage
    })
    let article = getState().article.articles[nextPage-1]
    if(!article){
        // 下一页的数据没有被获取，先获取数据，再跳转到下一页
        dispatch(fetchArticlesBiPageAndClass(nextPage, className))
    }
}

export const fetchArticlesByKeyword = (keyword) => (dispatch) => {

}

export const deleteArticle = (articleId) => (dispatch) => {
    
}