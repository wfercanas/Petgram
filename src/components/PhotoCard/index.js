import React from "react";
import { StyledImgWrapper, StyledImg, StyledButton } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <StyledImgWrapper>
          <StyledImg src={src} />
        </StyledImgWrapper>
      </a>
      <StyledButton>
        <MdFavoriteBorder size="32px" />
        {likes} likes!
      </StyledButton>
    </article>
  );
};

export { PhotoCard };
