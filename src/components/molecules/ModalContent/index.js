import React, { useState, useEffect, Fragment, useContext } from "react";
import axios from "axios";

import Heading from "../../atoms/Heading";
import CurrencyInputField from "../../atoms/InputField/CurrencyField";
import Button from "../../atoms/Button";
import Loader from "../../atoms/Loader";
import { Content, ButtonWrap, ErrorDisplay, SuccessDisplay } from "./styles";
import { getCurrency } from "../../../utils";
import { DEFAULT_LOCALE, API_URL } from "../../../config";
import { store } from "../../../config/store";

const ModalContent = ({ companyId, closeModal }) => {
  const [company, setCompany] = useState({});
  const [budget, setBudget] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(false);
  const { dispatch } = useContext(store);

  const isFormValid = () => {
    const isTouched =
      company.budget &&
      budget &&
      getCurrency(budget, DEFAULT_LOCALE) !==
        getCurrency(company.budget, DEFAULT_LOCALE);
    return isTouched;
  };

  // fetch data on first load
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${API_URL}/companies/${companyId}`);
      if (data) {
        setCompany(data);
        setBudget(data.budget);
        setLoading(false);
      }
    };

    fetchData();
  }, [companyId]);

  const optimisticUpdate = data => {
    dispatch({ type: "UPDATE_COMPANY", payload: data });
  };

  const saveNewBudget = async () => {
    if (budget < company.budget_spent) {
      setError("New budget cannot be less than spent amount");
    } else {
      const { status, data } = await axios.put(
        `${API_URL}/companies/${companyId}`,
        {
          ...company,
          budget: Number(budget)
        }
      );
      if (status === 200) {
        setSuccess(true);
        optimisticUpdate(data);
      }
    }
  };

  const handleFieldChange = value => {
    setError(null);
    setBudget(value);
  };

  return (
    <Content>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <Heading text={company.name} size="1.2em" />
          <CurrencyInputField
            lang={DEFAULT_LOCALE}
            width="100%"
            value={budget}
            onValueChange={handleFieldChange}
          />
          <ErrorDisplay>{error}</ErrorDisplay>
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
