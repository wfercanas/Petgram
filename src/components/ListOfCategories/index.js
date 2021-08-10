import React from "react";
import { Category } from "../Category";
import { StyledList, StyledListItem } from "./styles";

const ListOfCategories = () => {
  return (
    <StyledList>
      {[1, 2].map((category) => (
        <StyledListItem key={category}>
          <Category />
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export { ListOfCategories };
