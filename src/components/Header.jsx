import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import CatPage from "../pages/CatPage";
import Details from "../pages/Details";
const Header = () => {
  return (
    <>
      {/* navabar section start */}
      <nav className="navbar navbar-expand-lg p-0 m-0">
        <div className="container align-items-center">
          <Link className="navbar-brand nav-logo" to="/">electro <span>.</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-lg-0 ms-4 ">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Home 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Home 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Home 3
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Home 4
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Blog 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Blog 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <div className="ph px-2">
                <i class="bi bi-headset"></i>
              </div>
              <div className="cc">
                <span className="fw-bold"> Support</span> (+800) 856 800 604{" "}
                <br />
                Email: info@electro.com
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* navbar section end */}

      <section className="header-bottom py-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 p-0 m-0">
              <p className="text-shop p-0 ps-2 m-0">
             Shop By Department
             </p>
            </div>
            <div className="col-lg-4">
              <form className="d-flex" role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button className="btn btn-dark" type="submit">
                  <i class="bi bi-search"></i>
                </button>
              </form>
            </div>
            <div className="col-lg-4 header-icon">
              <div className="icon text-end">
                <a href="">
                  <i class="bi bi-heart"></i>
                </a>
                <a href="">
                  <i class="bi bi-person fs-5"></i>
                </a>
                <a href="">
                  <i class="bi bi-cart"></i>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:cid" element={<CatPage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default Header;
