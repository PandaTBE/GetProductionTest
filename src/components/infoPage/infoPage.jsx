import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
max-width: 1140px;
margin: 0 auto;
padding: 100px 0 0 0;
`
const Img = styled.img`
display: block;
margin: 0 auto;
width: 70%;
`

const InfoPage = () => {
    return (
        <Wrapper>
            <Img src="https://www.iguides.ru/upload/iblock/5f5/5f51051656aeddd5dd7fd5f99b903755.jpg" alt="OKGoogle" />
        </Wrapper>
    )
}

export default InfoPage;