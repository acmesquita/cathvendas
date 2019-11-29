import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content:space-between;
  padding: 10px 5%;

  button {
    padding: 5px;
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
    border: none;
    border-radius: 3px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Div = styled.div`
  p {
    padding-left: 5%;
    font-size: 14px;
    font-weight: 300;
  }
`;