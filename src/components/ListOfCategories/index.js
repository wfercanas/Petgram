import React, { useEffect, useState } from "react";

import { Category } from "../Category";
import { StyledList, StyledListItem } from "./styles";

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://petgram-server-edsf8xpy2.now.sh/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);
  return { categories, loading };
};

const ListOfCategories = () => {
  const { loading, categories } = useCategoriesData();

  const [showFixed, setShowFixed] = useState(false);
  const onScroll = (event) => {
    const newShowFixed = window.scrollY > 200;
    if (showFixed !== newShowFixed) {
      setShowFixed(newShowFixed);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [showFixed]);

  const renderList = (fixed) => (
    <StyledList fixed={fixed}>
      {categories.map((category) => (
        <StyledListItem key={category.id}>
          <Category {...category} path={`/pet/${category.id}`}/>
        </StyledListItem>
      ))}
    </StyledList>
  );

  if (loading) {
    return "...Cargando";
  }
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export { ListOfCategories };
