import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => `
  background: white;
  padding: 2em 2em;
  box-shadow: 2px 2px 2px #d3d3d3;
  border-radius: 3px;
  width: 50%;
  min-width: 320px;
  min-height: 220px;

  hr {
    border: none;
    border-top: 1px solid ${theme.lightGrey};
  }
`}
`;

export const Wrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Content = styled.div`
  margin-top: 1em;
`;
