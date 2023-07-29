import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TvingBestList from "../components/main/TvingBestList";
import { getTvingBests } from "../modules/tvingbest";
import LoadingList from "../components/common/LoadingList";
import Error from "../components/common/Error";

function TvingBestListContainer() {
  const { data, loading, error } = useSelector((state) => state.tvingbests.tvingbests);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 메인이미지 목록 요청
  useEffect(() => {
    dispatch(getTvingBests());
  }, [dispatch]);

  if (loading && !data) return <LoadingList />;
  if (error) return <Error />;
  if (!data) return null;
  return <TvingBestList tvingbests={data} />;
}

export default TvingBestListContainer;