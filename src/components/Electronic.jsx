import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
const Electronic = () => {
  let [product, setProduct] = useState([""]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 992 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 992, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };
  return (
    <>
    {/* electronice section start */}
      <div className="container my-4 bg-light feature-specifice">
        <div className="d-flex justify-content-between pt-3 align-items-center">
          <h4 className="">Electronics</h4>
          <a href="" className="btn btn-sm btn-danger">
            view more
          </a>
        </div>
        <hr />

        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          responsive={responsive}
        >
          {product.map((a, index) => (
            <div className="fproduct py-3">
              <div
                className="card shadow border-0 p-3 mx-1 text-center"
                key={index}
                style={{ width: "13.5rem" }}
              >
                <div className="img-box pt-2">
                  <img
                    src={a.image}
                    className="card-img-top"
                    height={145}
                    alt={a.title}
                  />
                </div>
                <div className="card-body text-dark pt-4 pb-0">
                  <h6 className="card-title mb-0">
                    <Link
                      to={`/details/${a.id}`}
                      className="text-decoration-none text-dark tt"
                    >
                      {" "}
                      {a.title}
                    </Link>
                  </h6>
                  <p className="card-text fw-bold p-0 m-0 ">
                    <span className="text-danger">$ {a.price}</span>
                  </p>
                  <p className="text-warning p-0 m-0">
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                  </p>
                </div>
                <div className="f-icon">
                  <div>
                    <a type="button" class="btn btn-info">
                      <i class="bi bi-heart"></i>
                    </a>
                  </div>
                  <div className="py-2">
                    <a type="button" class="btn btn-info">
                      <i class="bi bi-arrow-clockwise"></i>
                    </a>
                  </div>
                  <div>
                    <a type="button" class="btn btn-info">
                      <i class="bi bi-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {/* electronice section end */}

    </>
  );
};

export default Electronic;
