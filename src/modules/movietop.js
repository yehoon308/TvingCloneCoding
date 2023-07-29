import * as movieTopAPI from '../apis/movietop';

import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
    createPromiseThunkById,
    handleAsyncActionsById
} from '../libs/asyncUtils';

// 메인이미지 여러개 조회하기
const GET_MOVIETOPS = 'GET_MOVIETOPS'; // 요청 시작
const GET_MOVIETOPS_SUCCESS = 'GET_MOVIETOPS_SUCCESS'; // 요청 성공
const GET_MOVIETOPS_ERROR = 'GET_MOVIETOPS_ERROR'; // 요청 실패

// 메인이미지 하나 조회하기
const GET_MOVIETOP = 'GET_MOVIETOP';
const GET_MOVIETOP_SUCCESS = 'GET_MOVIETOP_SUCCESS';
const GET_MOVIETOP_ERROR = 'GET_MOVIETOP_ERROR';

export const getMovieTops = createPromiseThunk(GET_MOVIETOPS, movieTopAPI.getMovieTops);
export const getMovieTop = createPromiseThunkById(GET_MOVIETOP, movieTopAPI.getMovieTopById);

const initialState = {
    movietops: reducerUtils.initial(),
    movietop: reducerUtils.initial()
};

export default function movitops(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIETOPS:
        case GET_MOVIETOPS_SUCCESS:
        case GET_MOVIETOPS_ERROR:
          return handleAsyncActions(GET_MOVIETOPS, 'movietops', true)(state, action);
        case GET_MOVIETOP:
        case GET_MOVIETOP_SUCCESS:
        case GET_MOVIETOP_ERROR:
          return handleAsyncActionsById(GET_MOVIETOP, 'movietop', true)(state, action);
        default:
          return state;
    }
}