import styled from "@emotion/styled";

export const Input = styled.input`
  color: red;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;
