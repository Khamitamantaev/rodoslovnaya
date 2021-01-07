import React, { useState, useEffect } from "react";
import "../index.css";
import "react-simple-hook-modal/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

import { Stage, Layer, Star, Text, Circle } from "react-konva";

import UserService from "../services/user-service";
import starService from "../services/star-service";

// function generateShapes() {
//   return [...Array(0)].map((_, i) => ({
//     id: i.toString(),
//     x: Math.random() * window.innerWidth,
//     y: Math.random() * window.innerHeight,
//     rotation: Math.random() * 180,
//     isDragging: false
//   }));
// }

const initialStarState = {
  id: null,
  title: "",
  achievement: "",
  friends: "",
  postionX: null,
  positionY: null,
  rotation: Math.random() * 180,
  isDragging: false,
};

// const INITIAL_STATE = generateShapes();

const BoardUser = () => {
  const [star, setStar] = useState(initialStarState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStar({ ...star, [name]: value });
  };
  // const [stars, setStars] = useState(INITIAL_STATE);
  const [content, setContent] = useState([]);

  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShow = () => setShow(true);
  const handleShowUpdate = () => setShowUpdate(true);
  const handleDragStart = (e) => {
    const id = e.target.id();
    setStar(
      content.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };

  const handleDragEnd = (e) => {
    setStar(
      content.map((star) => {
        return {
          ...star,
          isDragging: false,
          positionX: e.target.x(),
          positionY: e.target.y()
        };
      })
    );
  };

  const saveStar = () => {
    var data = {
      title: star.title,
      achievement: star.achievement,
      friends: star.friends,
      positionX: star.positionX,
      positionY: star.positionY,
    };

    starService
      .create(data)
      .then((response) => {
        setStar({
          id: response.data.id,
          title: response.data.title,
          achievement: response.data.achievement,
          friends: response.data.friends,
          positionX: star.positionX,
          positionY: star.positionY,
        });
        setSubmitted(!submitted);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newStar = () => {
    setStar(initialStarState);
    setSubmitted(false);
  };

  useEffect(() => {
    starService.getAll().then(
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
  }, [submitted]);

  return (
    <>
    <Button variant="success" size="lg" block onClick={handleShow}>
    Добавить достижение!
  </Button>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить достижение</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="submit-form">
            {submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={newStar}>
                  Add
                </button>
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={star.title}
                    onChange={handleInputChange}
                    name="title"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="achievement">Achievement</label>
                  <input
                    type="text"
                    className="form-control"
                    id="achievement"
                    required
                    value={star.achievement}
                    onChange={handleInputChange}
                    name="achievement"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="friends">Friends</label>
                  <input
                    type="text"
                    className="form-control"
                    id="friends"
                    required
                    value={star.friends}
                    onChange={handleInputChange}
                    name="friends"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="positionX">PositionX</label>
                  <input
                    type="text"
                    className="form-control"
                    id="positionX"
                    required
                    type="number"
                    value={star.positionX}
                    onChange={handleInputChange}
                    name="positionX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="positionX">PositionY</label>
                  <input
                    type="text"
                    className="form-control"
                    id="positionY"
                    required
                    type="number"
                    value={star.positionY}
                    onChange={handleInputChange}
                    name="positionY"
                  />
                </div>

                <button onClick={saveStar} className="btn btn-success">
                  Добавить
                </button>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
       <Modal show={showUpdate} onHide={handleCloseUpdate} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Изменить достижение</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="submit-form">
            {submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={newStar}>
                  Add
                </button>
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={star.title}
                    onChange={handleInputChange}
                    name="title"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="achievement">Achievement</label>
                  <input
                    type="text"
                    className="form-control"
                    id="achievement"
                    required
                    value={star.achievement}
                    onChange={handleInputChange}
                    name="achievement"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="friends">Friends</label>
                  <input
                    type="text"
                    className="form-control"
                    id="friends"
                    required
                    value={star.friends}
                    onChange={handleInputChange}
                    name="friends"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="positionX">PositionX</label>
                  <input
                    type="text"
                    className="form-control"
                    id="positionX"
                    required
                    type="number"
                    value={star.positionX}
                    onChange={handleInputChange}
                    name="positionX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="positionX">PositionY</label>
                  <input
                    type="text"
                    className="form-control"
                    id="positionY"
                    required
                    type="number"
                    value={star.positionY}
                    onChange={handleInputChange}
                    name="positionY"
                  />
                </div>

                <button onClick={saveStar} className="btn btn-success">
                  Добавить
                </button>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
     
      <Stage width={window.innerWidth} height={4000} className="bg-black">
        <Layer>
          {content.map((star, index) => (
            <Star
              key={star.id}
              id={star.id}
              x={star.positionX}
              y={star.positionY}
              numPoints={5}
              innerRadius={10}
              outerRadius={25}
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
              onClick={handleShowUpdate}
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
};

export default BoardUser;
