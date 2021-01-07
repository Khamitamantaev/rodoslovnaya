import React, { useState, useEffect } from "react";
import "../index.css"

import { Stage, Layer, Star, Text, Circle } from "react-konva";

import UserService from "../services/user-service";

function generateShapes() {
  return [...Array(30)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}



const INITIAL_STATE = generateShapes();

const BoardUser = () => {
  const [stars, setStars] = useState(INITIAL_STATE);
  const [content, setContent] = useState("");

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };

  

  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };


  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight} className="bg-black">
        <Layer>
          <Text text="Попробуйте перенести Звездочку" />
          {stars.map((star) => (
            <Star 
              key={star.id}
              id={star.id}
              x={star.x}
              y={star.y}
              numPoints={5}
              innerRadius={20}
              outerRadius={40}
              fill="#FFFFFF"
              opacity={1}
              draggable
              rotation={star.rotation}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
              shadowOffsetX={star.isDragging ? 10 : 5}
              shadowOffsetY={star.isDragging ? 10 : 5}
              scaleX={star.isDragging ? 1.2 : 1}
              scaleY={star.isDragging ? 1.2 : 1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
};

export default BoardUser;
