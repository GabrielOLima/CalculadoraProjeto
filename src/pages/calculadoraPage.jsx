import React, {useState} from "react";
import styled from 'styled-components';
import { Textfit } from "react-textfit";
import { ButtonBox, Wrapper, Screen } from "../styles";

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

const CalculadoraPage = ({ children, value, onClick }) => {


    return (
        <Wrapper>
            <Screen value="0" />
            <ButtonBox onClick={onClick} value="0">
            </ButtonBox>
        </Wrapper>
    )
}

export default CalculadoraPage;