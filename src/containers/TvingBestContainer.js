import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTvingBest } from '../modules/tvingbest';
import TvingBest from '../components/main/TvingBest';

function TvingBestContainer({ tvingId }) {
    const { data, loading, error } = useSelector(
        state => state.tvingbests.tvingbest[tvingId]
      ) || {
        loading: false,
        data: null,
        error: null
      };
      
    const dispatch = useDispatch();
    useEffect(() => {
        if (data) return;
        dispatch(getTvingBest(tvingId));
    }, [tvingId, dispatch, data]);

    

    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러발생!</div>;
    if(!data) return null;
    return <TvingBest tvingbest={data} />;
}

export default TvingBestContainer;