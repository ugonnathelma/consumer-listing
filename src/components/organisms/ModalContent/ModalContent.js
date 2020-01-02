import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Heading from "../../atoms/Heading";
import CurrencyInputField from "../../atoms/InputField/CurrencyField";
import Button from "../../atoms/Button";
import Loader from "../../atoms/Loader";
import { Content, ButtonWrap, ErrorDisplay, SuccessDisplay } from "./styles";
import { DEFAULT_LOCALE } from "../../../config";
import { CompanyPropType } from "../../../utils/proptypes";

const ModalContent = ({
  company,
  closeModal,
  saveNewBudget,
  isFormValid,
  error,
  isLoading,
  isSuccess,
  budget,
  handleFieldChange
}) => {
  return (
    <Content data-test-id="modal-content">
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <Heading
            text={company.name}
            size="1.2em"
            dataTestId="modal-content-heading"
          />
          <CurrencyInputField
            lang={DEFAULT_LOCALE}
            width="100%"
            value={budget}
            onValueChange={handleFieldChange}
          />
          <ErrorDisplay data-test-id="error-message">{error}</ErrorDisplay>
          <ButtonWrap>
            {isSuccess ? (
              <SuccessDisplay>Budget Updated</SuccessDisplay>
            ) : (
              <Button asLink onClick={closeModal}>
                Cancel
              </Button>
            )}
            <Button
              disabled={!isFormValid()}
              primary
              width="8em"
              onClick={isSuccess ? closeModal : saveNewBudget}
            >
              {isSuccess ? "Done" : "Save"}
            </Button>
          </ButtonWrap>
        </Fragment>
      )}
    </Content>
  );
};

export default ModalContent;

ModalContent.propTypes = {
  company: PropTypes.shape(CompanyPropType),
  closeModal: PropTypes.func.isRequired,
  saveNewBudget: PropTypes.func.isRequired,
  isFormValid: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
  budget: PropTypes.number,
  handleFieldChange: PropTypes.func.isRequired
};
