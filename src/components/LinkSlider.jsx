import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Ldata from '../data/Ldata'
const LinkSlider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 992 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 992, min: 768 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 768, min: 576 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1,
        },
      };
  return (
    <>
     {/* jewelery section start */}
     <div className="container my-5 px-4 feature-specifice">
        <hr />

        <Carousel
        arrows={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          responsive={responsive}
        >{Ldata.map((a,index)=>(

           <div className="link-box" key={index}>
           <Link to={``}> <img src={a.img} className="w-100 link"height={70} alt="" /></Link>
           </div> 
        ))}
          
        </Carousel>
        <hr />
      </div>
      {/* jewelery section end */}
      
    </>
  )
}

export default LinkSlider
