/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Carousel = ({ client }) => {
  const {
    car_img,
    car_brand_name,
    car_model_name,
    car_description,
  } = client;

  

  return (
    <div
      className="mb-4 font-semibold rounded-lg relative"
      
    >
      <div className="h-[400px] card shadow-xl">
        <figure>
          <img
            src={car_img}
            alt="Cars"
            className="h-[200px] w-full"
          />
        </figure>
        <div className="card-body p-4">
          <div className="">
          <h2 className="text-2xl">Brand: <span className="bg-clip-text text-transparent bg-gradient-to-l from-red-400 to-blue-400 font-bold">{car_brand_name}</span></h2>
          <h2 className="card-title">Model: <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-400 font-bold">{car_model_name}</span></h2>
          </div>
          <p><span className="text-xl font-semibold">Description: </span>{car_description.slice(0,90)}...<Link><span className="text-red-500 font-medium"> More Details</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
