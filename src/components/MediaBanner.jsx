import React from 'react'
import S2data from '../data/S2data'
import { Link } from 'react-router-dom'

const MediaBanner = () => {
  return (
    <>
     <div className="container my-4 ">
        <div className="row">
            {S2data.map((a)=>(
                <div className="col-lg-3">
                    <div className="media-box m-2">
                        <Link to={``}><img src={a.S2image} alt="" className='w-100' /></Link>
                    </div>
                </div>
            ))}
        </div>
        </div> 
    </>
  )
}

export default MediaBanner
