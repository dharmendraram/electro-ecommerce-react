import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cimage from '../assets/icon.webp';
const Catogery = () => {
  let [cproduct, setCproduct] = useState(['']);
  useEffect(()=>{
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => setCproduct(data));
},[])
  return (
    <>
    
      <ul className="cat-list m-0 p-0" key={cproduct.id}>
        {cproduct.map((a,index) => (
        <li key={index}> <Link to={`/cat/${a}`} className="text-decoration-none text-dark  text-uppercase link-cat"><img className="rounded-3 me-2" src={cimage} alt="" width={20} height={20} /> {a}</Link></li>
        ))}
      </ul>
    </>
  );
};

export default Catogery;
