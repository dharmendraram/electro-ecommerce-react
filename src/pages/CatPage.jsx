import React, { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";
const CatPage = () => {
  let {cid}=useParams()
  let [cat, setCat] = useState(['']);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${cid}`)
      .then((res) => res.json())
      .then((data) => setCat(data))
  }, [])
  
  return (
    <>
    <div className="container py-4">
        <h1 className='text-uppercase'>{cid}</h1>
        <hr />
  <div className="row">
    
  {cat.map((a,index) => (
      <div className="col-lg-3 fproduct py-3 ">
        <div
          className="card h-100 p-3 shadow text-center"key={index}
          style={{ width: "17rem" }}
        >
            <div className="img-box pt-2">
          <img
            src={a.image}
            className="card-img-top"
            height={150}
            alt={a.title}
          />
          </div>
          <div className="card-body text-dark pt-4 pb-0">
        <h6 className="card-title mb-0"> <Link to={`/details/${a.id}`} className="text-decoration-none text-dark tt"> {a.title}</Link></h6>
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
                
              <i class="bi bi-arrow-clockwise"></i></a>
            </div>
            <div>
              <a type="button" class="btn btn-info"><i class="bi bi-eye"></i></a>
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>  
  
  </div>
    </>
  )
}

export default CatPage
