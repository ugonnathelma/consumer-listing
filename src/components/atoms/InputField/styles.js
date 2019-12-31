import styled from "styled-components";

export const InputField = styled.input`
  ${({ theme, width }) => `
  outline: none;
  padding: 1em;
  border-radius: 30px;
  font-size: 16px;
  border: 1px solid ${theme.lightGrey};
  transition: border 0.4s;
  ${width && `width: ${width}`};

&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
&[type=number] {
  -moz-appearance:textfield;
}

  &:focus {
    border: 1px solid ${theme.secondaryColor};
  }
`}
`;
