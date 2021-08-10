import React from "react";

import { categories } from "../../../api/db.json";
import { Category } from "../Category";
import { StyledList, StyledListItem } from "./styles";

const ListOfCategories = () => {
  return (
    <StyledList>
      {categories.map((category) => (
        <StyledListItem key={category.id}>
          <Category {...category} />
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export { ListOfCategories };
