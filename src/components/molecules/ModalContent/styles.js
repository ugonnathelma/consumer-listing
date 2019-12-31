import styled from "styled-components";

export const Content = styled.div``;

export const ButtonWrap = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > * {
    margin-left: 0.7em;
  }
`;

export const ErrorDisplay = styled.div`
  min-height: 1.5em;
  margin-top: 0.4em;
  color: ${({ theme }) => theme.errorColor};
`;

export const SuccessDisplay = styled.div`
  color: ${({ theme }) => theme.successColor};
`;
