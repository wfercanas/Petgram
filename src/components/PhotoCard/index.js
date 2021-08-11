import React, { useEffect, useRef, useState } from "react";
import {
  StyledArticle,
  StyledImgWrapper,
  StyledImg,
  StyledButton,
} from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      console.log(isIntersecting);
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(element.current);
  }, [element]);

  return (
    <StyledArticle ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <StyledImgWrapper>
              <StyledImg src={src} />
            </StyledImgWrapper>
          </a>
          <StyledButton>
            <MdFavoriteBorder size="32px" />
            {likes} likes!
          </StyledButton>
        </>
      )}
    </StyledArticle>
  );
};

export { PhotoCard };
