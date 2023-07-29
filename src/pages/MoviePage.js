import React from 'react';
import MovieTopListContainer from '../containers/MovieTopListContainer';
import styled from 'styled-components';

const MovieBlock = styled.div`
    padding: 200px 0 0 60px;
`;

function MoviePage() {
    return (
        <MovieBlock>
            <MovieTopListContainer />
        </MovieBlock>
    );
}

export default MoviePage;