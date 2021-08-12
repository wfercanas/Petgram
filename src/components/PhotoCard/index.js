import React from "react";
import { Link } from "react-router-dom";
import { StyledArticle, StyledImgWrapper, StyledImg } from "./styles";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, element] = useNearScreen();

  return (
    <StyledArticle ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <StyledImgWrapper>
              <StyledImg src={src} />
            </StyledImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                !liked && toggleLike({ variables: { input: { id } } });
                setLiked(!liked);
              };
              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  handleClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </>
      )}
    </StyledArticle>
  );
};

export { PhotoCard };
