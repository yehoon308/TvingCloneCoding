import * as paraTopAPI from '../apis/paratop';

import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
    createPromiseThunkById,
    handleAsyncActionsById
} from '../libs/asyncUtils';

// 메인이미지 여러개 조회하기
const GET_PARATOPS = 'GET_PARATOPS'; // 요청 시작
const GET_PARATOPS_SUCCESS = 'GET_PARATOPS_SUCCESS'; // 요청 성공
const GET_PARATOPS_ERROR = 'GET_PARATOPS_ERROR'; // 요청 실패

// 메인이미지 하나 조회하기
const GET_PARATOP = 'GET_PARATOP';
const GET_PARATOP_SUCCESS = 'GET_PARATOP_SUCCESS';
const GET_PARATOP_ERROR = 'GET_PARATOP_ERROR';

export const getParaTops = createPromiseThunk(GET_PARATOPS, paraTopAPI.getParaTops);
export const getParaTop = createPromiseThunkById(GET_PARATOP, paraTopAPI.getParaTopById);

const initialState = {
    paratops: reducerUtils.initial(),
    paratop: reducerUtils.initial()
};

export default function paratops(state = initialState, action) {
    switch (action.type) {
        case GET_PARATOPS:
        case GET_PARATOPS_SUCCESS:
        case GET_PARATOPS_ERROR:
          return handleAsyncActions(GET_PARATOPS, 'paratops', true)(state, action);
        case GET_PARATOP:
        case GET_PARATOP_SUCCESS:
        case GET_PARATOP_ERROR:
          return handleAsyncActionsById(GET_PARATOP, 'paratop', true)(state, action);
        default:
          return state;
    }
}