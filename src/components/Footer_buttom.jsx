import React from 'react'
import log1 from '../assets/img/cod.png'
import log2 from '../assets/img/logo1.png'
const Footer_buttom = () => {
  return (
    <section className='footer-buttom text-light'>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-2">
            <div>
                <p className='p-0 m-0'>&copy; 2023 Online Shopping in Nepal | Online shopping Nepal |<a href="" className='text-decoration-none text-warning fw-bold'> electo.com</a> Terms Privacy policy Seller policy Return policy Support policy</p>
            </div>
            <div className='d-flex gap-2 justify-content-end'>
                <img src={log1} width={40} alt="" />
                <img src={log2} width={40} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer_buttom
