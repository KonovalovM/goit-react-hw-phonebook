import styled from '@emotion/styled';
import or from 'images/bg1.jpg';
export const Container = styled.div`

  min-height: 200px;
  display: grid;
  align-items: center;
  margin: 0 auto;  
  width: 600px;
  background-color: #ffffffe8;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
             23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
 
`;

export const Wrapper = styled.div`
  // background-color: #ffffffe8; 
  padding-top: 130px; 
  padding-bottom: 70px;
  background-image: url(${or});
  background-size: cover;
  background-repeat: repeat;
`;

export const Footer = styled.footer`
  color: white;
  padding: 20px;
  text-align: center;
  background-color: #05beff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
             23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;