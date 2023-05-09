import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 510px;
    padding: 30px 20px;
    margin: 50px auto;
    box-shadow: ${({theme: {colors}}) => colors.shadowContainer};
    background: ${({theme: {colors}}) => colors.bgContainer};
    border-radius: 10px;
`