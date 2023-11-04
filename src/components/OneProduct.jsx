/* eslint-disable react/prop-types */
import { MdModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useAuthContext from "../Hooks/useAuthContext";
AOS.init();

const OneProduct = ({ prod }) => {
  const { user } = useAuthContext();
  const admin = user && user.email === "mahfuzurrahmanshabbir@gmail.com";

  const { Product_type, brandName, name, photoURL, price, rating, _id } = prod;

  return (
    <div>
      <div
        className="card bg-base-100 shadow-xl"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <figure>
          <img
            className="h-[150px] md:h-[280px] w-full"
            src={photoURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-lg md:text-2xl font-medium md:font-semibold">
            {name}
            <div className="badge badge-secondary ml-1">Brand: {brandName}</div>
          </h2>
          <p>Category: {Product_type}</p>
          <p>Price: ${price}</p>
          <p className="flex items-center">
            <span>
              <Rating
                style={{ maxWidth: 100 }}
                readOnly
                halfFillMode="svg"
                value={rating < 4.5 ? Math.floor(rating) : rating}
              />
            </span>
            <span className="text-xl ml-2">{rating}</span>
          </p>
          <div>
            {user ? (
              <div>
                {admin ? (
                  <div className="card-actions justify-end">
                    <Link to={`/updateProduct/${_id}`}>
                      <div
                        className="badge badge-outline text-black bg-blue-500 h-7 border-none rounded-md w-16"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Edit!"
                      >
                        <MdModeEdit />
                      </div>
                    </Link>
                    <Tooltip id="my-tooltip" />
                    <Link to={`/productDetails/${_id}`}>
                      <div
                        className="badge badge-outline text-black bg-amber-500 h-7 border-none rounded-md w-16"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="View Details!"
                      >
                        <FaEye />
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="card-actions justify-end">
                    <Link to={`/productDetails/${_id}`}>
                      <div
                        className="badge badge-outline text-black bg-amber-500 h-10 border-none rounded-md w-32"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="View Details!"
                      >
                        <FaEye className="text-2xl" />
                      </div>
                    </Link>
                    <Tooltip id="my-tooltip" />
                  </div>
                )}
              </div>
            ) : (
              <div className="flex justify-end ">
                <h1 className="text-lg font-medium">
                  For Details And Purchase Please{" "}
                  <Link
                    to={`/login`}
                    className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:text-2xl hover:font-extrabold"
                  >
                    Login
                  </Link>
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
