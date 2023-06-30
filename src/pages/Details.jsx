import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const [cat, setCat] = useState([""]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setCat(data));
  }, []);
  return (
    <section className="container bg-light shadow my-4 details">
      <div className="row mx-auto pb-5 pt-4">
        <div className="col-lg-5">
          <div className="card border-0 shadow rounded-3  bg-light">
            <img src={cat.image} className=" w-90 h-90" alt="" />
          </div>
        </div>
        <div className="col-lg-7 px-4 pt-3">
          <h1 className="fw-bold pb-2 text-capitalize">{cat.title}</h1>
          <p className="text-capitalize">{cat.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p>
              <i class="bi bi-star"></i> <i class="bi bi-star"></i>{" "}
              <i class="bi bi-star"></i> <i class="bi bi-star"></i>{" "}
              <i class="bi bi-star pe-3"></i>(0 review)
            </p>
            <p className="stock">In stock</p>
          </div>
          <div className="d-flex gap-4 qtg py-3">
            <p className="fs-5 text-dark">Quantity:</p>
            <form action="">
              <input type="text" className="" />
            </form>
            <p className="fs-6">(10 available)</p>
          </div>
          <div className="pt-4">
          <p className="fs-5">Price: <span className="fs-3 ps-5 fw-bold text-danger">Rs {cat.price}</span></p>
          </div>
          <p>Until Price: <span className="text-decoration-line-through ps-2 text-dark"> Rs 300</span>  10% off</p>
        
          <form action="">
        <button type="button" class="btn btn-danger me-3"><i class="bi bi-cart-dash pe-2"></i>Buy Now</button>
        <button type="button" class="btn btn-primary"><i class="bi bi-cart-dash pe-2"></i>Add To Card</button>

        </form>
        </div>
        
      </div>
    </section>
  );
};

export default Details;
