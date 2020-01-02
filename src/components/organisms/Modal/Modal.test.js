import React from "react";
import { mount } from "enzyme";
import { ThemeProvider } from "styled-components";

import Modal from "./index";

import theme from "../../../config/theme";

describe("Modal component", () => {
  const props = {
    header: "This is the Heading",
    content: <p>This is the content</p>
  };

  let wrapper = mount(
    <ThemeProvider theme={theme}>
      <Modal {...props} />
    </ThemeProvider>
  );

  it("renders Modal", () => {
    const modalLength = wrapper.find('[data-test-id="modal"]').hostNodes()
      .length;

    expect(modalLength).toEqual(1);
  });

  it("renders Modal Heading", () => {
    const text = wrapper
      .find('[data-test-id="modal-heading"]')
      .hostNodes()
      .text();

    expect(text).toEqual("This is the Heading");
  });

  it("renders Modal Content", () => {
    const text = wrapper
      .find('[data-test-id="modal-content"]')
      .hostNodes()
      .text();

    expect(text).toEqual("This is the content");
  });

  it("does not display close button when close function is not provided", () => {
    const buttonLength = wrapper
      .find('[data-test-id="close-modal-button"]')
      .hostNodes().length;

    expect(buttonLength).toEqual(0);
  });

  it("displays close button when close function is provided", () => {
    const mockFn = jest.fn();

    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Modal close={mockFn} {...props} />
      </ThemeProvider>
    );
    const buttonLength = wrapper
      .find('[data-test-id="close-modal-button"]')
      .hostNodes().length;
    expect(buttonLength).toEqual(1);
  });

  it("calls close function when close button is clicked", () => {
    const mockFn = jest.fn();

    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Modal close={mockFn} {...props} />
      </ThemeProvider>
    );

    wrapper
      .find('[data-test-id="close-modal-button"]')
      .hostNodes()
      .simulate("click");

    expect(mockFn).toHaveBeenCalled();
  });
});
