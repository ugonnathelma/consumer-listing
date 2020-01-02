import React from "react";
import { mount } from "enzyme";

import ModalContent from "./ModalContent";
import Loader from "../../atoms/Loader";
import Button from "../../atoms/Button";
import CurrencyField from "../../atoms/InputField/CurrencyField";
import { ErrorDisplay } from "./styles";

describe("ModalContent component", () => {
  const mockCloseModal = jest.fn();
  const mockSaveBudget = jest.fn();
  const mockIsFormValid = jest.fn();
  const mockhandleFieldChange = jest.fn();

  const props = {
    company: {
      id: 1,
      name: "Martian Ugonna",
      budget: 150.0,
      budget_spent: 14500,
      date_of_first_purchase: "2120-07-07"
    },
    closeModal: mockCloseModal,
    saveNewBudget: mockSaveBudget,
    isFormValid: mockIsFormValid,
    error: null,
    isLoading: false,
    isSuccess: false,
    budget: 20.0,
    handleFieldChange: mockhandleFieldChange
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ModalContent {...props} />);
  });

  it("renders loader when isLoading is true", () => {
    wrapper.setProps({ ...props, isLoading: true });
    expect(wrapper.exists(Loader)).toBe(true);
  });

  it("does not render loader when isLoading is false", () => {
    expect(wrapper.exists(Loader)).toBe(false);
  });

  it(`renders "Cancel" and "Save" buttons`, () => {
    const buttons = wrapper.find(Button);
    expect(buttons.at(0).text()).toContain("Cancel");
    expect(buttons.at(1).text()).toContain("Save");
  });

  it(`calls "mockIsFormValid" `, () => {
    expect(mockIsFormValid).toHaveBeenCalled();
  });

  it(`calls "mockSaveBudget" on click "Save" button`, () => {
    wrapper
      .find(Button)
      .at(1)
      .props()
      .onClick();

    expect(mockSaveBudget).toHaveBeenCalled();
  });

  it(`renders "Martian Ugonna" as heading`, () => {
    expect(
      wrapper
        .find('[data-test-id="modal-content-heading"]')
        .hostNodes()
        .text()
    ).toContain("Martian Ugonna");
  });

  it(`renders 20.000 in input field`, () => {
    expect(wrapper.find(CurrencyField).props().value).toEqual(20.0);
  });

  it(`renders "There is an error" button when there is an error`, () => {
    wrapper.setProps({ ...props, error: "There is an error" });
    expect(wrapper.find(ErrorDisplay).text()).toContain("There is an error");
  });

  it(`calls "mockhandleFieldChange" when input field value is changed`, () => {
    expect(mockhandleFieldChange).toHaveBeenCalledTimes(0);
    wrapper
      .find(CurrencyField)
      .simulate("change", { target: { value: "25.000" } });
    expect(mockhandleFieldChange).toHaveBeenCalledTimes(1);
  });

  it(`renders "Budget Updated" when isSuccess is true`, () => {
    wrapper.setProps({ ...props, isSuccess: true });
    expect(wrapper.text()).toContain("Budget Updated");
  });

  it(`renders "Done" button when isSuccess is true`, () => {
    wrapper.setProps({ ...props, isSuccess: true });
    expect(wrapper.find(Button).text()).toContain("Done");
  });

  it(`calls "mockCloseModal" when "Done" button is clicked`, () => {
    wrapper.setProps({ ...props, isSuccess: true });
    wrapper
      .find(Button)
      .props()
      .onClick();
    expect(mockCloseModal).toHaveBeenCalled();
  });
});
