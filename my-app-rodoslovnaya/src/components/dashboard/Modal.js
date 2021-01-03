import React from "react";

const Modal = () => {
  return (
    <nav
      className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
      style={{ backgroundColor: "rgb(208,136,96)" }}
    >
      <div className="container-fluid d-flex flex-column p-0">
        <a
          className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
          href="#"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            <span>Rodoslovnaya</span>
          </div>
        </a>
        <hr className="sidebar-divider my-0" />
        <ul className="nav navbar-nav text-light" id="accordionSidebar">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" href="index.html">
              <i className="fas fa-tachometer-alt" />
              <span>Dashboard</span>
            </a>
          </li>
        </ul>
        <div className="text-center d-none d-md-inline">
          <button
            className="btn rounded-circle border-0"
            id="sidebarToggle"
            type="button"
          />
        </div>
      </div>
    </nav>
  );
};

export default Modal;
