import React from 'react';
import { useParams } from 'react-router-dom';
import ParaTopContainer from '../containers/ParaTopContainer';

function ParaTopPage() {
    const { id } = useParams();

    return (
        <div>
            <ParaTopContainer paraTopId={parseInt(id,10)} />
        </div>
    );
}

export default ParaTopPage;