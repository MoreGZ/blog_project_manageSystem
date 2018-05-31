import * as actionTypes from './actionTypes';

const finishLoading = () => ({
    type: actionTypes.FINISH_LOADING
})

const startLoading = () => ({
    type: actionTypes.START_LOADING
})

const requestError = () => ({
    type: actionTypes.REQUEST_ERROR
})