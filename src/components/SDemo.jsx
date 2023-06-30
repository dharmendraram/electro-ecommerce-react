import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cimage from "../assets/icon.webp";
import { Link } from "react-router-dom";
const SDemo = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 992 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 992, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 576 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 2,
    },
  };
  let [cproduct, setCproduct] = useState([""]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCproduct(data));
  }, []);
  return (
    <>
      <div className="container py-4 bg-light">
        <Carousel
        
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          responsive={responsive}
        >
          {cproduct.map((a,index) => (
            <>
            <div className="border-0 rounded-5 mx-3 my-3 shadow bg-1 text-center "key={index}>
              <div className="box-slider2 text-center py-4">
              <Link to={`/cat/${a}`}>  <img src={cimage}  alt="" /></Link>
              </div>
              </div>
            <p className="text-center m-0 pb-3 link-title">
            <Link
              to={`/cat/${a}`}
              className="text-decoration-none text-dark text-uppercase "
            >
              {a}
            </Link>
          </p>
          </>
          
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default SDemo;
