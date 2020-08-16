import styled, { keyframes } from 'styled-components';

export const keyFrameRight = keyframes`
    0% { 
        height: 200px;
        right: 45%;
    }
    100% { 
        right: 0;
        overflow: hidden;
        visibility:hidden;
    }

`;