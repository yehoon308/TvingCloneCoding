import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LivePage from './pages/LivePage';
import TvPage from './pages/TvPage';
import MoviePage from './pages/MoviePage';
import ParamountPage from './pages/ParamountPage';
import TvingBestPage from './pages/TvingBestPage';
import MovieTopPage from './pages/MovieTopPage';
import ParaTopPage from './pages/ParaTopPage';
import TvProgramNewPage from './pages/TvProgramNewPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//style - 특정 컴포넌트를 만들어서 스타일링 하는게 아니라 글로벌 스타일을 추가하고 싶을 땐 createGlobalStyle 이라는 것을 사용
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{ padding: 0;  margin: 0; color: #fff; font-family: 'Noto Sans KR', sans-serif; box-sizing: border-box; }
  body { background: #000; }
  li{ list-style: none; }
  a{ text-decoration: none; }
`;
const BodyBlock = styled.div`
  width: 100%; overflow: hidden;
`;

function App() {
  return (
    <BodyBlock>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/paramount" element={<ParamountPage />} />
        <Route path="/tvingbest/:id" element={<TvingBestPage />} />
        <Route path="/movietop/:id" element={<MovieTopPage />} />
        <Route path="/paratop/:id" element={<ParaTopPage />} />
        <Route path="/tvprogramnew/:id" element={<TvProgramNewPage />} />
      </Routes>
      <Footer />
    </BodyBlock>
  );
}

export default App;