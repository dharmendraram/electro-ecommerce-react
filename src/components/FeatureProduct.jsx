import React from 'react'
import CommonSlider from './CommonSlider'

const FeatureProduct = () => {
  return (
    <>
    {/* featured product section start */}
      <div className="container bg-light feature">
        <div className="d-flex justify-content-between pt-3 align-items-center">
        <h4 className=''>Featured Products</h4>
        <a href="" className='btn btn-danger btn-sm '>View more</a>
        </div>
        <hr />
    <CommonSlider/>
      </div>
    {/* featured product end */}
    </>
  )
}

export default FeatureProduct
