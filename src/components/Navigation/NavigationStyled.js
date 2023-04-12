import styled from 'styled-components';
// import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex; 
`;

export const Item = styled.li`
  margin-right: 20px; 
  &:last-child {
    margin-right: 0;
  }
`;

export const Link = styled(NavLink)`
  color: #fffff;   
  &.active {
    color: #cccccc;
  }
`;