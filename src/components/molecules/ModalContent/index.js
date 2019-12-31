import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import Heading from "../../atoms/Heading";
import CurrencyInputField from "../../atoms/InputField/CurrencyField";
import Button from "../../atoms/Button";
import Loader from "../../atoms/Loader";
import { Content, ButtonWrap, ErrorDisplay } from "./styles";
import { getCurrency } from "../../../utils";
import { DEFAULT_LOCALE, API_URL } from "../../../config";

const ModalContent = ({ companyId, closeModal }) => {
  const [company, setCompany] = useState({});
  const [budget, setBudget] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

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

  const saveNewBudget = () => {
    if (budget < company.budget_spent) {
      setError("New budget cannot be less than spent amount");
    } else {
      axios.put(`${API_URL}/companies/${companyId}`, {
        ...company,
        budget: Number(budget)
      });

      console.log(companyId, Number(budget), "j;i");
    }
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
            onValueChange={setBudget}
          />
          <ErrorDisplay>{error}</ErrorDisplay>
          <ButtonWrap>
            <Button asLink onClick={closeModal}>
              Cancel
            </Button>
            <Button
              disabled={!isFormValid()}
              primary
              width="8em"
              onClick={saveNewBudget}
            >
              Save
            </Button>
          </ButtonWrap>
        </Fragment>
      )}
    </Content>
  );
};

export default ModalContent;
