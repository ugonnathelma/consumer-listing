import React, { useState } from "react";

import ListItem from "../../molecules/ListItem";
import { ListContainer } from "./styles";
import Heading from "../../atoms/Heading";
import { getCurrency, getDate } from "../../../utils";
import Modal from "../Modal";
import ModalContent from "../../molecules/ModalContent";
import { DEFAULT_LOCALE } from "../../../config";

const List = ({ companies }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const closeModal = () => {
    setShowModal(false);
    setSelectedRow(null);
  };

  return (
    <ListContainer data-test-id="consumer-list">
      <Heading
        text="Consumers"
        padding="0em 2em"
        showRule
        dataTestId="consumer-list-heading"
      />
      {showModal && (
        <Modal
          header={"Update Total Budget"}
          content={
            <ModalContent closeModal={closeModal} companyId={selectedRow} />
          }
          close={closeModal}
        />
      )}
      {companies.map(
        ({ name, budget, id, date_of_first_purchase, budget_spent }, index) => (
          <ListItem
            hideRule={index + 1 === companies.length}
            onClick={() => {
              setSelectedRow(id);
              setShowModal(true);
            }}
            active={selectedRow === id}
            padding="0em 2em"
            key={id}
            name={name}
            totalBudget={getCurrency(budget, DEFAULT_LOCALE, "EUR")}
            budgetSpent={getCurrency(budget_spent, DEFAULT_LOCALE, "EUR")}
            budgetLeft={getCurrency(
              budget - budget_spent,
              DEFAULT_LOCALE,
              "EUR"
            )}
            firstPurchaseDate={getDate(date_of_first_purchase, DEFAULT_LOCALE)}
          />
        )
      )}
    </ListContainer>
  );
};

export default List;
