import React from "react";
import { Link } from "react-router-dom";
import samosa from "../../Assets/Images/logo.jpg";
import "../Navigation/Navigation.css";

const Navigation = () => {
  return (
    <div>
      <header className="App-header">
        <nav
          class="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div class="container-fluid">
            <Link to="/" style={{textDecoration:"none"}}>
              <a class="navbar-brand" href="#">
                <img
                  src={samosa}
                  alt="Logo"
                  width="60px"
                  height="60px"
                  class="d-inline-block align-text-top rounded-circle"
                ></img>
              </a>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link style={{ textDecoration: "none" }} to="/home">
                    <a class="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </Link>{" "}
                </li>
                <li class="nav-item">
                <Link style={{ textDecoration: "none" }} to="/About_Us"><a class="nav-link active" href="#">
                    About Us
                  </a></Link>{" "}
                </li>
                <li class="nav-item">
                  <Link style={{ textDecoration: "none" }} to="/Contact">
                    <a class="nav-link active" aria-current="page" href="#">
                      Contact
                    </a>
                  </Link>{" "}
                </li>
                <li class="nav-item">
                  <Link style={{ textDecoration: "none" }} to="/Tour">
                    <a class="nav-link active" aria-current="page" href="#">
                      Tour
                    </a>
                  </Link>{" "}
                </li>
                <li class="nav-item">
                  <Link style={{ textDecoration: "none" }} to="/Add_Tours">
                    <a class="nav-link active" aria-current="page" href="#">
                     Add-Tour
                    </a>
                  </Link>{" "}
                </li>
              </ul>
              <form class="d-flex">
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn btn-outline-success dropdown-toggle m-2"
                    data-bs-toggle="dropdown"
                  >
                    Login
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <Link to="Admin_Login" style={{ textDecoration: "none" }}>
                        <a class="dropdown-item" href="#">
                          Admin
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="Guide_Login" style={{ textDecoration: "none" }}>
                        <a class="dropdown-item" href="#">
                          Guide
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Customer_Login"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        <a class="dropdown-item" href="#">
                          Customer
                        </a>
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn btn-outline-success dropdown-toggle  m-2"
                    data-bs-toggle="dropdown"
                  >
                    Register
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <Link
                        to="Customer_Signup"
                        style={{ textDecoration: "none" }}
                      >
                        <a class="dropdown-item" href="#">
                          Customer
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </header>
      {/* <Link to="/home" className='btn btn-primary'>Home</Link>{" "}
            <Link to="/Customer_Login" className='btn btn-primary'>Customer_Login</Link>{" "}
            <Link to="/Forgot_password" className='btn btn-primary'>Forgot Password</Link>{" "} */}
    </div>
  );
};

export default Navigation;
