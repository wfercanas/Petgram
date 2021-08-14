import React from "react";
import { Link } from "react-router-dom";
import { StyledArticle, StyledImgWrapper, StyledImg } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";
import PropTypes from "prop-types";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
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
                toggleLike({ variables: { input: { id } } });
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

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }
    if (propValue < 0) {
      return new Error(`${propName} must be greater than 0`);
    }
  },
};
