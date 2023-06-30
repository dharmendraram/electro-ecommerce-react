import React from "react";
import { Link } from "react-router-dom";
const Footer_top = () => {
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-4 p-0 m-0">
          <p><Link to="/" className="text-decoration-none fw-blod f-logo text-light">electo  <span className="text-warning">.</span></Link></p>
          <ul className="p-0 m-0 main-text">
            <li>Online Shopping In Nepal - electo.com</li>
            <li className="text-light">Address <br /><span className="text-light">Kalanki,Kathmandu</span></li>
            <li className="text-light">Phone <br /><span className="text-dark">(+800) 856 800 604</span></li>
            <li className="text-light">Email</li>
            <li><a href="" className="text-decoration-none text-light">info@electro.com</a></li>
          </ul>
        <ul className="d-flex p-0  pt-3 social-icon">
            <li><a href=""><i class="bi bi-facebook"></i></a></li>
            <li><a href=""><i class="bi bi-instagram"></i></a></li>
            <li><a href=""><i class="bi bi-twitter"></i></a></li>
            <li><a href=""><i class="bi bi-youtube"></i></a></li>
            <li><a href=""><i class="bi bi-google"></i></a></li>
        </ul>

          </div>

          <div className="col-lg-2">
            <p className="p-0 m-0 text-light fs-6 fw-bold pb-2">USEFUL LINK</p>
            <ul className="p-0 m-0 footer-text">
              <li>
                <a href=""className="text-decoration-none">Become a vendor</a>
              </li>
              <li>
                <a href="" className="text-decoration-none text-dark">Warranty</a>
              </li>
              <li>
                <a href=""className="text-decoration-none text-dark">Full Refund</a>
              </li>
              <li>
                <a href=""className="text-decoration-none text-dark">Referral</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2">
            <p className="p-0 m-0 text-light fs-7 fw-bold pb-2">MY ACCOUNT</p>
            <ul className="p-0 m-0 footer-text">
              <li>
                <a href=""className="text-decoration-none text-dark">Login</a>
              </li>
              <li>
                <a href="" className="text-decoration-none text-dark">Order History</a>
              </li>
              <li>
                <a href=""className="text-decoration-none text-dark">My Wishlist</a>
              </li>
              <li>
                <a href=""className="text-decoration-none text-dark">Track Orderal</a>
              </li>
            </ul>
            
          </div>

          <div className="col-lg-4">
          <p className="p-0 m-0 text-light fs-6 fw-bold pb-2">NEWS LETTER</p>
    <form>
  <div className="mb-2">
    <input type="email" className="form-control email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email address..." />
  </div>
  <button type="submit" className="btn btn-danger w-100 sub-footer">Subscribe</button>
</form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer_top;
