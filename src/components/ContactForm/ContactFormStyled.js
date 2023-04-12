// import styled from '@emotion/styled';
import styled from 'styled-components';

export const Form = styled.form`       
 flex-direction: column;
 width: 450px;
 height: 120px;
 padding: 10px;
 margin-bottom: 40px;
 display: flex;
`;

export const Label = styled.label`    
  margin-bottom: 10px;  
  font-weight: 500px;
  font-size: 16px;
  line-height: 1.16;
  letter-spacing: 0.01em;
`;

export const Input = styled.input`
  display:block;
  width: 100%;
  margin: 0;
  padding: 10px 42px;
  font: inherit;
  font-size: 18px;
  outline: none;
  border-radius: 4px;
  border: 1px solid rgba(45,18,18,.2);
  color: #05beff;  
`;

export const Button = styled.button`
  display: block;
  width: 100px;
  cursor: pointer;
  background-color: wight;
  border-radius: 4px;
  color: black;
`;
