import styled from 'styled-components';

export const Container = styled.div`
  #customers {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 90%;
    margin-left: 5%;
  }

  #customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #customers tr:nth-child(even){background-color: #f2f2f2;}

  #customers tr:hover {background-color: #ddd;}

  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #0b0bff;
    text-transform: uppercase;
    color: white;
  }
  .in {
    color: green;
  }

  .out {
    color: red;
  }
`;
