import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './user/reducer.js';
import articleReducer from './article/reducer.js';
import classReducer from './class/reducer.js';
// import appStatusReducer from './appStatus/reducer.js';

import * as userActionTypes from "./user/actionTypes"

function fixErrorMiddleware({dispatch, getState}){
    return function(next){
        return function(action){
            console.log(action);
            if(!action.success && action.code ){
                if(action.code === "002"){
                    // 处理没有登录的逻辑
                    dispatch({
                        type: userActionTypes.LOGIN_ERROR,
                        latestErrorCode: action.code,
                        latestErrorMessage: action.message
                    })
                    
                }

                if(action.code === "006"){
                    console.log(action.code)
                    dispatch({
                        type: userActionTypes.LOGIN_ERROR,
                        latestErrorCode: action.code,
                        latestErrorMessage: action.message
                    })
                }

                return ;
            }
            return next(action);
        }
    }
}

const reducer = combineReducers({
    user: userReducer,
    article: articleReducer,
    class: classReducer,
    // appStatus: appStatusReducer
})

let store = createStore(reducer, applyMiddleware(thunk,fixErrorMiddleware));

export default store;



