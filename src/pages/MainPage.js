import React from 'react';
import MainListContainer from '../containers/MainListContainer';
import TvingBestListContainer from '../containers/TvingBestListContainer';
import MovieTopListContainer from '../containers/MovieTopListContainer';
import TvProgramNewListContainer from '../containers/TvProgramNewListContainer';
import ParaTopListContainer from '../containers/ParaTopListContainer';


function MainPage() {
    return (
        <div>
            <MainListContainer />
            <TvingBestListContainer />
            <MovieTopListContainer />
            <TvProgramNewListContainer />
            <ParaTopListContainer />
        </div>
    );
}

export default MainPage;