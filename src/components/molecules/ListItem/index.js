import React from "react";
import PropTypes from "prop-types";

import Flex from "../../atoms/Flex";
import { Wrap } from "./styles";
import Heading from "../../atoms/Heading";
import CompanyPropType from "../../../utils/proptypes";

const ListItem = ({
  name,
  firstPurchaseDate,
  totalBudget,
  budgetSpent,
  budgetLeft,
  padding,
  onClick,
  active,
  hideRule
}) => {
  return (
    <Wrap
      padding={padding}
      onClick={onClick}
      active={active}
      data-test-id="consumer-list-item"
    >
      <Flex cellWidths={[1, 3]}>
        <div>
          <Heading text={name} primary size="1.2em"></Heading>
        </div>
        <Flex cellWidths={[1, 1, 1, 1]}>
          <div data-test-id="purchase-date">
            <p>
              <strong>1st Purchase Date:</strong> {firstPurchaseDate}
            </p>
          </div>
          <div data-test-id="total-budget">
            <p>
              <strong>Total Budget:</strong> {totalBudget}
            </p>
          </div>
          <div data-test-id="budget-spent">
            <p>
              <strong>Budget Spent:</strong> {budgetSpent}
            </p>
          </div>
          <div data-test-id="budget-left">
            <p>
              <strong>Budget Left:</strong> {budgetLeft}
            </p>
          </div>
        </Flex>
      </Flex>
      {!hideRule && <hr />}
    </Wrap>
  );
};

export default ListItem;

ListItem.propTypes = {
  padding: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
  hideRule: PropTypes.bool,
  ...CompanyPropType
};
