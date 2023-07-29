import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainList from "../components/main/MainList";
import Error from "../components/common/Error";
import { getMains } from "../modules/main";

function MainListContainer() {
  const { data, loading, error } = useSelector((state) => state.mains.mains);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 메인이미지 목록 요청
  useEffect(() => {
    dispatch(getMains());
  }, [dispatch]);

  if (loading && !data) return <div><img src="./img/main/main_loading.png" alt="메인로딩중" /></div>;
  if (error) return <Error />;
  if (!data) return null;
  return <MainList mains={data} />;
}

export default MainListContainer;