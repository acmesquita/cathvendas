import styled from 'styled-components';

export const Container = styled.div`
  background-color: #eee;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;

  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;
  font-family: sans-serif;

  .field {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    input {
      margin-bottom: 10px;
      width: 100%;
      font-size: 16px;
      padding: 5px;
      border-radius: 3px;
      border: 1px solid #ddd;
      color: #444;
    }
    label {
      text-align: right;
      text-transform: uppercase;
      color: #444;
      margin-bottom: 2px;
    }
  }


  button {
    width: 100%;
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