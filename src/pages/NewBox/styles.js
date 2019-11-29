import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  background: white;
  border: 1px solid #aaa;
  border-radius: 5px;
  width: 90%;

  input {
    padding: 5px;
    margin: 10px 0px;
    font-size: 14px;
    color: #444;
    font-family: sans-serif;
    border: none;
    border-bottom: 1px solid #aaa;
    
  }

  button {
    padding: 10px;
    border: none;
    background: #0c9ece;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    text-transform: uppercase;
    width: 25%;
    cursor: pointer;
  }
`;
