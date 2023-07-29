//루트 리듀서 : 여러 리듀서 모듈을 하나로 모아주는 역할
import { combineReducers } from 'redux'; 
import mains from './main';
import tvingbests from './tvingbest';
import movietops from './movietop';
import paratops from './paratop';
import tvprogramnews from './tvprogramnew';
import liveseries from './liveseries';

//연결할 모듈 불러오기

const rootReducer = combineReducers({ mains, tvingbests, movietops, paratops, tvprogramnews, liveseries });

export default rootReducer;