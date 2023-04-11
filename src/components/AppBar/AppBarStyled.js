import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 8px 0; 
  background-color: #090909;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
  
}
`;

export const Logo = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: #05beff;
`;
export const HeaderWrapper = styled.div`
  display: flex;
    gap: 10px;
`;