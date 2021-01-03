import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
    <div className="container-fluid">
      <button
        className="btn btn-link d-md-none rounded-circle mr-3"
        id="sidebarToggleTop"
        type="button"
      >
        <i className="fas fa-bars" />
      </button>
      <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            className="bg-light form-control border-0 small"
            type="text"
            placeholder="Search for ..."
          />
          <div className="input-group-append">
            <button className="btn btn-primary py-0" type="button">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>
      <ul className="nav navbar-nav flex-nowrap ml-auto">
        <li className="nav-item dropdown d-sm-none no-arrow">
          <a
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
            aria-expanded="false"
            href="#"
          >
            <i className="fas fa-search" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
            role="menu"
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline mr-auto navbar-search w-100">
              <div className="input-group">
                <input
                  className="bg-light form-control border-0 small"
                  type="text"
                  placeholder="Search for ..."
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary py-0"
                    type="button"
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        <li
          className="nav-item dropdown no-arrow mx-1"
          role="presentation"
        >
          <div className="nav-item dropdown no-arrow">
            <a
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
              href="#"
            >
              <span className="badge badge-danger badge-counter">
                3+
              </span>
              <i className="fas fa-bell fa-fw" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
              role="menu"
            >
              <h6 className="dropdown-header">alerts center</h6>
              <a
                className="d-flex align-items-center dropdown-item"
                href="#"
              >
                <div className="mr-3">
                  <div className="bg-primary icon-circle">
                    <i className="fas fa-file-alt text-white" />
                  </div>
                </div>
                <div>
                  <span className="small text-gray-500">
                    December 12, 2019
                  </span>
                  <p>A new monthly report is ready to download!</p>
                </div>
              </a>
              <a
                className="d-flex align-items-center dropdown-item"
                href="#"
              >
                <div className="mr-3">
                  <div className="bg-success icon-circle">
                    <i className="fas fa-donate text-white" />
                  </div>
                </div>
                <div>
                  <span className="small text-gray-500">
                    December 7, 2019
                  </span>
                  <p>$290.29 has been deposited into your account!</p>
                </div>
              </a>
              <a
                className="d-flex align-items-center dropdown-item"
                href="#"
              >
                <div className="mr-3">
                  <div className="bg-warning icon-circle">
                    <i className="fas fa-exclamation-triangle text-white" />
                  </div>
                </div>
                <div>
                  <span className="small text-gray-500">
                    December 2, 2019
                  </span>
                  <p>
                    Spending Alert: We've noticed unusually high
                    spending for your account.
                  </p>
                </div>
              </a>
              <a
                className="text-center dropdown-item small text-gray-500"
                href="#"
              >
                Show All Alerts
              </a>
            </div>
          </div>
        </li>
        <li
          className="nav-item dropdown no-arrow mx-1"
          role="presentation"
        >
          <div className="nav-item dropdown no-arrow">
            <a
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
              href="#"
            >
              <i className="fas fa-envelope fa-fw" />
              <span className="badge badge-danger badge-counter">
                7
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
              role="menu"
            >
              <h6 className="dropdown-header">alerts center</h6>
              <a
                className="d-flex align-items-center dropdown-item"
                href="#"
              >
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="assets/img/avatars/avatar4.jpeg"
                  />
                  <div className="bg-success status-indicator" />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    <span>
                      Hi there! I am wondering if you can help me with a
                      problem I've been having.
                    </span>
                  </div>
                  <p className="small text-gray-500 mb-0">
                    Emily Fowler - 58m
                  </p>
                </div>
              </a>
              <a
                className="d-flex align-items-center dropdown-item"
                href="#"
              >
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="assets/img/avatars/avatar2.jpeg"
                  />
                  <div className="status-indicator" />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    <span>
                      I have the photos that you ordered last month!
                    </span>
                  </div>
                  <p className="small text-gray-500 mb-0">
                    Jae Chun - 1d
                  </p>
                </div>
              </a>
              <a
                className="d-flex align-items-center dropdown-item"
                href="#"
              >
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="assets/img/avatars/avatar3.jpeg"
                  />
                  <div className="bg-warning status-indicator" />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    <span>
                      Last month's report looks great, I am very happy
                      with the progress so far, keep up the good work!
                    </span>
                  </div>
                  <p className="small text-gray-500 mb-0">
                    Morgan Alvarez - 2d
                  </p>
                </div>
              </a>
              <a
                className="d-flex align-items-center dropdown-item"
                href="#"
              >
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="assets/img/avatars/avatar5.jpeg"
                  />
                  <div className="bg-success status-indicator" />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    <span>
                      Am I a good boy? The reason I ask is because
                      someone told me that people say this to all dogs,
                      even if they aren't good...
                    </span>
                  </div>
                  <p className="small text-gray-500 mb-0">
                    Chicken the Dog · 2w
                  </p>
                </div>
              </a>
              <a
                className="text-center dropdown-item small text-gray-500"
                href="#"
              >
                Show All Alerts
              </a>
            </div>
          </div>
          <div
            className="shadow dropdown-list dropdown-menu dropdown-menu-right"
            aria-labelledby="alertsDropdown"
          />
        </li>
        <div className="d-none d-sm-block topbar-divider" />
        <li className="nav-item dropdown no-arrow" role="presentation">
          <div className="nav-item dropdown no-arrow">
            <a
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
              href="#"
            >
              <span className="d-none d-lg-inline mr-2 text-gray-600 small">
                Valerie Luna
              </span>
              <img
                className="border rounded-circle img-profile"
                src="assets/img/avatars/avatar1.jpeg"
              />
            </a>
            <div
              className="dropdown-menu shadow dropdown-menu-right animated--grow-in"
              role="menu"
            >
              <a className="dropdown-item" role="presentation" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                &nbsp;Profile
              </a>
              <a className="dropdown-item" role="presentation" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                &nbsp;Settings
              </a>
              <a className="dropdown-item" role="presentation" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                &nbsp;Activity log
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" role="presentation" href="#">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                &nbsp;Logout
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  );
};
