import React from "react";
import Flex from "../../atoms/Flex";
import { Wrap } from "./styles";
import Heading from "../../atoms/Heading";

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
    <Wrap padding={padding} onClick={onClick} active={active}>
      <Flex cellWidths={[1, 3]}>
        <div>
          <Heading text={name} primary size="1.2em"></Heading>
        </div>
        <Flex cellWidths={[1, 1, 1, 1]}>
          <div>
            <p>
              <strong>1st Purchase Date:</strong> {firstPurchaseDate}
            </p>
          </div>
          <div>
            <p>
              <strong>Total Budget:</strong> {totalBudget}
            </p>
          </div>
          <div>
            <p>
              <strong>Budget Spent:</strong> {budgetSpent}
            </p>
          </div>
          <div>
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
