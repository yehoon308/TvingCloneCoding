import * as mainAPI from '../apis/main';

import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
} from '../libs/asyncUtils';

// 메인이미지 여러개 조회하기
const GET_MAINS = 'GET_MAINS'; // 요청 시작
const GET_MAINS_SUCCESS = 'GET_MAINS_SUCCESS'; // 요청 성공
const GET_MAINS_ERROR = 'GET_MAINS_ERROR'; // 요청 실패

export const getMains = createPromiseThunk(GET_MAINS, mainAPI.getMains);

const initialState = {
    mains: reducerUtils.initial()
};

export default function mains(state = initialState, action) {
    switch (action.type) {
        case GET_MAINS:
        case GET_MAINS_SUCCESS:
        case GET_MAINS_ERROR:
          return handleAsyncActions(GET_MAINS, 'mains', true)(state, action);
        default:
          return state;
    }
}