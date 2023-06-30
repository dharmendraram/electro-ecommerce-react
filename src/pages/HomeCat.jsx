import React, { useState } from 'react'
import Catogery from '../components/Catogery'
import Slider from '../components/Slider'
import { Link } from 'react-router-dom'

const HomeCat = () => {
  const [show,setShow]=useState(true)
  return (
    <>
    <div className="container bg-light home-cat shadow">
        <div className="row">
            <div className="col-lg-3 m-0 p-0">
              <h6 onClick={()=>setShow(!show)}><Link to={``} className='home-text text-decoration-none text-uppercase '><i class="bi bi-list pe-1"></i> All Categories</Link></h6>
            {
             show? <Catogery/>:null
            }
            </div>
            <div className="col-lg-9 p-0 m-0">
            <Slider/>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default HomeCat
