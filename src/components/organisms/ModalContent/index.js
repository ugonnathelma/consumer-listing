import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { getCurrency } from "../../../utils";
import { DEFAULT_LOCALE, API_URL } from "../../../config";
import { store } from "../../../config/store";
import ModalContent from "./ModalContent";

const Content = ({ companyId, closeModal }) => {
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
        dispatch({ type: "UPDATE_COMPANY", payload: data });
      }
    }
  };

  const handleFieldChange = value => {
    setError(null);
    setSuccess(false);
    setBudget(value);
  };

  return (
    <ModalContent
      handleFieldChange={handleFieldChange}
      saveNewBudget={saveNewBudget}
      budget={budget}
      isFormValid={isFormValid}
      error={error}
      isLoading={isLoading}
      isSuccess={isSuccess}
      closeModal={closeModal}
      company={company}
    />
  );
};

export default Content;

Content.propTypes = {
  companyId: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired
};
