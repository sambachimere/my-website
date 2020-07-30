import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  top: 34%;
  transform: translateY(-50%);
  width: 100%;
  height: 90%;
  max-height: 28vw;
  overflow: hidden;
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  z-index: 4;
  width: 50%;
  height: 100%;
  transform: translateX(-50%) translateY(-50%) scale(0.8);
  cursor: pointer;

  &.gallery__prev {
    left: 0;
  }

  &.gallery__next {
    left: 100%;
  }
`;

const Stream = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
`;

const Img = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  transition: 1s all ease;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  &:nth-child(1) {
    left: 0;
    z-index: 1;
    transform: translateX(-100%) scale(0.8);
  }

  &:nth-child(2) {
    left: 0;
    z-index: 2;
    transform: translateX(-50%) scale(0.8);
  }

  &:nth-child(3) {
    left: 50%;
    z-index: 4;
    transform: translateX(-50%) scale(1);
  }

  &:nth-child(4) {
    left: 100%;
    z-index: 2;
    transform: translateX(-50%) scale(0.8);
  }

  &:nth-child(n + 5) {
    left: 100%;
    z-index: 1;
    transform: scale(0.8);
  }
`;

const Carousel = ({ imgUrls }) => {
  const stream = React.useRef(null);
  let items;
  const handleClick = (direction) => {
    items = stream?.current?.querySelectorAll('.gallery__item');
    if (direction) {
      stream.current.insertBefore(items[items.length - 1], items[0]);
    } else {
      stream.current.appendChild(items[0]);
    }
  };

  return (
    <CarouselContainer className="gallery">
      <Button
        className="gallery__prev"
        onClick={(e) => handleClick(true)}
      ></Button>
      <Button
        className="gallery__next"
        onClick={(e) => handleClick(false)}
      ></Button>
      <Stream className="gallery__stream" ref={stream}>
        {imgUrls.map((url) => (
          <Img
            className="gallery__item"
            key={url}
            style={{
              backgroundImage: `url(${url})`,
            }}
          />
        ))}
      </Stream>
    </CarouselContainer>
  );
};

export default Carousel;
