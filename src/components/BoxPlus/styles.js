import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  border: 1px dashed #aaa;
  padding: 20px;
  width: 20%;
  height: 150px;
  background-color: white;
  border-radius: 5px;
  display:flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 60px;
    color: blue;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
