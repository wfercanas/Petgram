import React, { useEffect, useState } from "react";

import { Category } from "../Category";
import { StyledList, StyledListItem } from "./styles";

const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://petgram-server-edsf8xpy2.now.sh/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const onScroll = (event) => {
    const newShowFixed = window.scrollY > 200;
    if (showFixed !== newShowFixed) {
      setShowFixed(newShowFixed);
    }
  };

  const [showFixed, setShowFixed] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [showFixed]);

  const renderList = (fixed) => (
    <StyledList className={fixed ? "fixed" : ""}>
      {categories.map((category) => (
        <StyledListItem key={category.id}>
          <Category {...category} />
        </StyledListItem>
      ))}
    </StyledList>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export { ListOfCategories };
