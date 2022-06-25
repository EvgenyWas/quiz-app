import React from 'react';

import styled from "styled-components";

type Props = {
    image: string,
}

const Blob = ({ image }: Props) => {
    return (
        <StyledBlob>
            <img src={image} alt="Blob" />
        </StyledBlob>
    );
};

const StyledBlob = styled.div`
    position: absolute;
`

export default Blob;