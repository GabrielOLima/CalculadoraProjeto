import { Textfit } from "react-textfit";
import styled from "styled-components";

const Screen = ({ value }) => {
  return (
    <StyledComponent className="screen" mode="single" max={70}>
      {value}
    </StyledComponent>
  );
};

export default Screen;