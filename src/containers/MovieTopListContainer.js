import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieTopList from "../components/movie/MovieTopList";
import { getMovieTops } from "../modules/movietop";
import LoadingList from "../components/common/LoadingList";
import Error from "../components/common/Error";

function MovieTopListContainer() {
  const { data, loading, error } = useSelector((state) => state.movietops.movietops);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 메인이미지 목록 요청
  useEffect(() => {
    dispatch(getMovieTops());
  }, [dispatch]);

  if (loading && !data) return <LoadingList />;
  if (error) return <Error />;
  if (!data) return null;
  return <MovieTopList movietops={data} />;
}

export default MovieTopListContainer;