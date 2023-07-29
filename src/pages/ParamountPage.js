import React from 'react';
import styled from 'styled-components';
import ParaTopListContainer from '../containers/ParaTopListContainer';

const ParamountBlock = styled.div`
    padding: 200px 0 0 60px;
`;

function ParamountPage() {
    return (
        <ParamountBlock>
            <ParaTopListContainer />
        </ParamountBlock>
    );
}

export default ParamountPage;