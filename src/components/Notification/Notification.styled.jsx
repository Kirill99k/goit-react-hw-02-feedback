import { font } from 'components/constants/mixins';
import styled from 'styled-components';

export const MessageText = styled.p`
  ${font({ fs: 17, fw: 500})}
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;