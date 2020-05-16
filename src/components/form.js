import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  border: 1px solid red;
  width: 100px;
`;

function Form(props) {
  return <StyledForm>{props.children}</StyledForm>;
}

export default Form;
