import styled from "styled-components";

export const Wrap = styled.div`
  ${({ cellWidths, minWidth }) => `
  display: flex;
  flex-wrap: wrap;

  ${cellWidths.map(
    (width, index) => `
  & > *:nth-child(${index + 1}) {
    flex: ${width};
    min-width:${minWidth ? minWidth : "200px"};
  }
  `
  )}
`}
`;
