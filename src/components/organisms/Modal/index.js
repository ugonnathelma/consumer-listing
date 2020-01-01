import React from "react";
import { withTheme } from "styled-components";

import Heading from "../../atoms/Heading";
import Flex from "../../atoms/Flex";
import { ReactComponent as CloseIcon } from "../../../icons/close.svg";
import { Container, Wrap, CloseButton, Content } from "./styles";

const Modal = ({ header, content, close, theme }) => {
  return (
    <Wrap data-test-id="modal">
      <Container>
        <header>
          <Flex cellWidths={[3, 1]} minWidth="0px">
            <Heading text={header} primary dataTestId="modal-heading" />
            {close && (
              <CloseButton onClick={close} data-test-id="close-modal-button">
                <CloseIcon width="1em" height="1em" fill={theme.primaryColor} />
              </CloseButton>
            )}
          </Flex>
        </header>
        <hr />
        <Content data-test-id="modal-content">{content}</Content>
      </Container>
    </Wrap>
  );
};

export default withTheme(Modal);
