import * as actionTypes from "./actionTypes";

const defaultState = {
    articles:[],
    totalPage:0,
    currentPage:1,
    isLoading: false,
    latestClass: "",
    latestErrorCode: "",
    latestErrorMessage: "",
    
}

const reducer = (state = defaultState, action = {}) => {
    switch(action.type){
        case actionTypes.FETCH_ARTICLES_BYCLASSANDPAGE_START: 
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_FIRSTPAGEARTICLE_BYCLASS_START:
            return {
                isLoading: true,
                articles:[],
                totalPage:0,
                currentPage:1,
                latestErrorCode: "",
                latestErrorMessage: ""
            }
        case actionTypes.FETCH_FIRSTPAGEARTICLE_BYCLASS_FINISH:
            return {
                ...state,
                isLoading: false,
                articles:[action.data.articles],
                currentPage: 1,
                totalPage:action.data.totalPage
            }
        case actionTypes.FETCH_ARTICLES_BYCLASSANDPAGE_FINISH:
            return {
                ...state,
                isLoading: false,
                articles: action.articles
            }
        case actionTypes.FETCH_ARTICLES_BYCLASSANDPAGE_ERROR:
            return{
                ...state,
                latestErrorCode: action.latestErrorCode,
                latestErrorMessage: action.latestErrorMessage
            }
        case actionTypes.CHANGE_PAGE:
            return{
                ...state,
                currentPage: action.nextPage
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer;