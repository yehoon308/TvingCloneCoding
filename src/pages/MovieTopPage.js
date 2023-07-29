import React from 'react';
import { useParams } from 'react-router-dom';
import MovieTopContainer from '../containers/MovieTopContainer';

function MovieTopPage() {
    const { id } = useParams();

    return (
        <div>
            <MovieTopContainer movieTopId={parseInt(id,10)} />
        </div>
    );
}

export default MovieTopPage;