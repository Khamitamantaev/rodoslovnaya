import React, { useState, useEffect } from "react";

import UserService from "../services/user-service";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import Rodoslovnaya from "./dagre-d3-react/exampledagre";
import Rodoslovnayax from "./dagre-d3-react/exampledagrecopy";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [content, setContent] = useState([]);

  useEffect(() => {
    UserService.getAllUsers().then(
      (response) => {
        setContent(response.data);
        console.log(response.data);
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

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <Rodoslovnayax content={content}/>
    </div>
  );
};

export default Profile;