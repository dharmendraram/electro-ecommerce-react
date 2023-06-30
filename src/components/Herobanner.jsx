import React from 'react'
import Hdata from '../data/Hdata'
const Herobanner = () => {
  return (
    <>
    {/* hero banner section start */}
      <div className="container py-1">
        <div className="row">
        {Hdata.map((a,index)=>(
            <div className="col-lg-4">
                <div className="hero-box p-3"key={index}>
                    <img src={a.img}className='w-100' height={180} alt="" />
                </div>

            </div>
        ))}
        </div>
      </div>
      {/* hero banner section end */}
    </>
  )
}

export default Herobanner
