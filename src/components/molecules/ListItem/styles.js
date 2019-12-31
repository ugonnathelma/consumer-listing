import styled from "styled-components";

export const Wrap = styled.div`
  ${({ padding, theme, active }) => `
  min-height: 2em;
  padding: ${padding ? padding : "1em 0em"};
  cursor: pointer;
  transition: all 0.3s;
  ${active && `background: ${theme.lighterGrey}`};
  hr {
    border: none;
    border-top: 1px solid ${theme.lighterGrey};
    margin:0;
  }

  p {
    display: flex;
    flex-direction:column;
    font-size: 1.2em;
  }

  strong {
    color: ${theme.primaryColor};
    font-size: 0.8em;
  }


  &:hover {
    background: ${theme.lighterGrey}
  }

`}
`;
