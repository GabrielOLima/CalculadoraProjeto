import styled from 'styled-components';
import { Textfit } from "react-textfit";

export const Wrapper = styled.div`
    width: 340px;
    height: 540px;
    padding: 10px;
    border-radius: 10px;
    background-color: #485461;
    background-image: rgba(255, 255, 255, 0.15);
`

export const Screen = styled.Textfit`
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: #4357692d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  font-weight: bold;
  box-sizing: border-box; 
`

export const ButtonBox = styled(Wrapper)`
  width: 100%;
  height: calc(100% - 110px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  :hover{
    background-color: rgb(61, 43, 184);
  }
  .equals {
  grid-column: 3 / 5;
  background-color: rgb(243, 61, 29);
    }
  .equals:hover {
  background-color: rgb(228, 39, 15);
    }
`

