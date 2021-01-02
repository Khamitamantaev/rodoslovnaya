import React, { useState, useEffect } from "react";

import UserService from "../services/user-service";

const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
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
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
        <div className="flex justify-center ...">
          <div><button class="bg-green-500 ...">Button1</button></div>
          <div><button class="bg-green-500 ...">Button2</button></div>
          <div><button class="bg-green-500 ...">Button3</button></div>
        </div>
        
      </header>
    </div>
  );
};

export default BoardAdmin;
