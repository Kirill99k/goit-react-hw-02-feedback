import { font } from 'components/constants/mixins';
import styled from 'styled-components';

export const SectionContainer = styled.section`
  max-width: 370px;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h2`
  ${font({ fs: 32, fw: 800})}
  margin-top: 0;
  margin-bottom: 40px;
`;
