import React, { useState, useEffect } from "react";

import UserService from "../services/user-service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <img src="https://w.wallhaven.cc/full/72/wallhaven-7232p9.jpg"></img>
  );
};

export default Home;