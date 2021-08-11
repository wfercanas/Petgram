import React from "react";
import {
  StyledArticle,
  StyledImgWrapper,
  StyledImg,
  StyledButton,
} from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, element] = useNearScreen();

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <StyledArticle ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <StyledImgWrapper>
              <StyledImg src={src} />
            </StyledImgWrapper>
          </a>
          <StyledButton onClick={() => setLiked(!liked)}>
            <Icon size="32px" />
            {likes} likes!
          </StyledButton>
        </>
      )}
    </StyledArticle>
  );
};

export { PhotoCard };
