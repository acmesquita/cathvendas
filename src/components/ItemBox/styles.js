import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  border: 1px solid #aaa;
  padding: 20px;
  width: 20%;
  height: 150px;
  background-color: white;
  border-radius: 5px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
