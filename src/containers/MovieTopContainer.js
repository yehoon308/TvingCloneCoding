import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieTop } from '../modules/movietop';
import MovieTop from '../components/movie/MovieTop';

function MovieTopContainer({ movieTopId }) {
    const { data, loading, error } = useSelector(
        state => state.movietops.movietop[movieTopId]
      ) || {
        loading: false,
        data: null,
        error: null
      };

      
    const dispatch = useDispatch();
    useEffect(() => {
        if (data) return;
        dispatch(getMovieTop(movieTopId));
    }, [movieTopId, dispatch, data]);

    

    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러발생!</div>;
    if(!data) return null;
    return <MovieTop movietop={data} />;
}

export default MovieTopContainer;