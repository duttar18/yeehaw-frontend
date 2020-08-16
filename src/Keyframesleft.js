import styled, { keyframes } from 'styled-components';

export const keyFrameLeft = keyframes`
    0% { 
        height: 200px;
        left: 45%;
    }
    100% { 
        left: 0;
        overflow: hidden;
        visibility:hidden;
    }

`;