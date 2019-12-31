import React from "react";
import { withTheme } from "styled-components";

import Heading from "../../atoms/Heading";
import Flex from "../../atoms/Flex";
import { ReactComponent as CloseIcon } from "../../../icons/close.svg";
import { Container, Wrap, CloseButton, Content } from "./styles";

const Modal = ({ header, content, close, theme }) => {
  return (
    <Wrap>
      <Container>
        <header>
          <Flex cellWidths={[3, 1]} minWidth="0px">
            <Heading text={header} primary />
            {close && (
              <CloseButton onClick={close}>
                <CloseIcon width="1em" height="1em" fill={theme.primaryColor} />
              </CloseButton>
            )}
          </Flex>
        </header>
        <hr />
        <Content>{content}</Content>
      </Container>
    </Wrap>
  );
};

export default withTheme(Modal);
