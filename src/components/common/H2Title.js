import React from 'react';
import styled from 'styled-components';

const TitleBlock = styled.div`
    h2{
        font-size: 24px; color: #fff;
    }
`;

function H2Title({ name }) {
    return (
        <TitleBlock>
            <h2>{name}</h2>
        </TitleBlock>
    );
}

export default H2Title;