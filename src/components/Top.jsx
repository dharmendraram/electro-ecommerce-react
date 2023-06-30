import React from "react";

const Top = () => {
  return (
    <section className="border-bottom top">
      <div className="container">
        <div className="top-left py-2">
          <div className="row">
            <div className="col-lg-6 align-items-center">
              Welcome to Worldwide Electronics Store
            </div>
            <div className="col-lg-6">
                <ul className="d-flex justify-content-end gap-4 align-items-center p- m-0">
                    <li><a href=""><i class="bi bi-geo-alt"></i>Store Locator</a></li>
                    <li><a href=""><i class="bi bi-truck-flatbed"></i>Track your order</a></li>
                    <li><a href=""><i class="bi bi-bag-check"></i>Shop</a></li>
                    <li><a href=""><i class="bi bi-person"></i>My Account</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
