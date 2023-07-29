import * as tvingBestAPI from '../apis/tvingbest';

import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
    createPromiseThunkById,
    handleAsyncActionsById
} from '../libs/asyncUtils';

// 메인이미지 여러개 조회하기
const GET_TVINGBESTS = 'GET_TVINGBESTS'; // 요청 시작
const GET_TVINGBESTS_SUCCESS = 'GET_TVINGBESTS_SUCCESS'; // 요청 성공
const GET_TVINGBESTS_ERROR = 'GET_TVINGBESTS_ERROR'; // 요청 실패

// 메인이미지 하나 조회하기
const GET_TVINGBEST = 'GET_TVINGBEST';
const GET_TVINGBEST_SUCCESS = 'GET_TVINGBEST_SUCCESS';
const GET_TVINGBEST_ERROR = 'GET_TVINGBEST_ERROR';

export const getTvingBests = createPromiseThunk(GET_TVINGBESTS, tvingBestAPI.getTvingBests);
export const getTvingBest = createPromiseThunkById(GET_TVINGBEST, tvingBestAPI.getTvingBestById);

const initialState = {
    tvingbests: reducerUtils.initial(),
    tvingbest: reducerUtils.initial()
};

export default function tvingbests(state = initialState, action) {
    switch (action.type) {
        case GET_TVINGBESTS:
        case GET_TVINGBESTS_SUCCESS:
        case GET_TVINGBESTS_ERROR:
          return handleAsyncActions(GET_TVINGBESTS, 'tvingbests', true)(state, action);
        case GET_TVINGBEST:
        case GET_TVINGBEST_SUCCESS:
        case GET_TVINGBEST_ERROR:
          return handleAsyncActionsById(GET_TVINGBEST, 'tvingbest', true)(state, action);
        default:
          return state;
    }
}