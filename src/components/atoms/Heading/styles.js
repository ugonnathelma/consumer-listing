import styled from "styled-components";

export const Text = styled.h2`
  ${({ theme, size, primary }) => `
      color: ${primary ? theme.primaryColor : theme.secondaryColor};
      ${size && `font-size: ${size}`};
  }`}
`;

export const Wrap = styled.div`
  ${({ padding, theme, height }) => `
  ${padding && `padding: ${padding}`};
  
  hr {
    border: none;
    border-top: 1px solid ${theme.lightGrey};
  }`}
`;
