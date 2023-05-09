import { font } from 'components/constants/mixins';
import styled from 'styled-components';

export const StatisticsList = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  row-gap: 15px;
  justify-content: space-around;

`;
export const StatisticsItem = styled.li`
  ${font({ fs: 17, fw: 500})}
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;