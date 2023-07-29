import React from 'react';
import { useParams } from 'react-router-dom';
import TvingBestContainer from '../containers/TvingBestContainer';

function TvingBestPage() {
    const { id } = useParams();

    return (
        <div>
            <TvingBestContainer tvingId={parseInt(id,10)} />
        </div>
    );
}

export default TvingBestPage;