import styled from "styled-components";

export const ButtonBlock = styled.button`
  ${({ theme, width, asLink, primary, secondary, disabled }) => `
  outline: none;
  padding: 0.7em;
  border-radius: 30px;
  cursor:pointer;
  font-size: 16px;
  border: 1px solid ${theme.lightGrey};
  transition: border 0.4s;
  ${width && `width: ${width}`};

  &:focus {
    border: 1px solid ${theme.secondaryColor};
  }

  ${asLink &&
    `border:0px;
    background: transparent;
    padding:0;
    color: ${theme.secondaryColor};

    &:hover {
      color: ${theme.primaryColor};
    }
  `};

  ${primary &&
    `
    background: ${theme.primaryColor};
    color: white;
    &:hover {
      background: ${theme.primaryLight};
    }
  `};

  ${secondary &&
    `
    background: ${theme.secondaryColor};
    color: white;
    &:hover {
      background: ${theme.secondaryLight};
    }
  `};

  ${disabled &&
    `background: ${theme.lightGrey};
  &:hover {
    background: ${theme.lightGrey};
  }`};
`}
`;
