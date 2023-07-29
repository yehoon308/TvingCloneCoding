import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ParaTopList from "../components/paramount/ParaTopList";
import { getParaTops } from "../modules/paratop";
import LoadingList from "../components/common/LoadingList";
import Error from "../components/common/Error";

function ParaTopListContainer() {
  const { data, loading, error } = useSelector((state) => state.paratops.paratops);
  const dispatch = useDispatch();


  // 컴포넌트 마운트 후 메인이미지 목록 요청
  useEffect(() => {
    dispatch(getParaTops());
  }, [dispatch]);

  if (loading && !data) return <LoadingList />;
  if (error) return <Error />;
  if (!data) return null;
  return <ParaTopList paratops={data} />;
}

export default ParaTopListContainer;