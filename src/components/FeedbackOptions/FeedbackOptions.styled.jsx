import styled from 'styled-components';

export const OptionList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;

export const OptionBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  min-width: 70px;
  cursor: pointer;
  text-transform: capitalize;
  background-color: transparent;
  border: 1px solid ${({theme: {colors}}) => colors.btnBorderColor};
  padding: 7px;
  border-radius: 5px;
  transition: background 300ms ${({theme: {colors}}) => colors.cubicBezier},
    color 300ms ${({theme: {colors}}) => colors.cubicBezier},
    box-shadow 300ms ${({theme: {colors}}) => colors.cubicBezier};

  :hover,
  :focus {
    outline: none;
    box-shadow: ${({ theme: { colors } }) => colors.boxShadow};
    color: ${({ theme: { colors } }) => colors.white};
    background: ${({ theme: { colors } }) => colors.accentColor};
    border: 1px solid ${({ theme: { colors } }) => colors.accentColor};;
    text-shadow: 0 0 5px #ffffff,
                0 0 10px #ffffff,
                0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff,
                0 0 20px #008cff,
                0 0 50px #008cff,
                0 0 100px #008cff;
  }
  :hover svg,
  :focus svg {
    scale: 1.25;
  }

  svg {
    width: 20px;
    height: 20px;
    transition: scale ${({theme: {colors}}) => colors.cubicBezier};
  }
`;