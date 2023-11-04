import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import navbarADBG from "../assets/automotive-logo-design-vector-update.jpg";
import { useEffect, useState } from "react";
import OneProduct from "./OneProduct";
import NotFound from "./NotFound";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Advertisement = () => {
  const brand = useLoaderData();
  const [counter, setCounter] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const [dataDisplay, setDataDisplay] = useState([]);

  const parentDivStyle = {
    backgroundImage: `url(${navbarADBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // +++++Pagination and all products fetching functionality start+++++++++++++++
  useEffect(() => {
    fetch(`https://assignment-teen-server-site.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        setCounter(data);
      });
  }, []);
  const productCounter = counter.filter((p) => p.brandName === brand.name);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayData = productCounter.slice(startIndex, endIndex);

  const count = parseInt(productCounter.length);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handleItemPerPageChange = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  // +++++Pagination and all products fetching functionality end++++++++++++++++++

  // ++++++++++Search functions++++++++++++++++++++++++++++++++
  const handleSearchCarModel = (e) => {
    e.preventDefault();
    const enteredSearchValue = e.target.search.value.toLowerCase();
    e.target.reset();
    const filteredProducts = productCounter.filter(
      (p) =>
        p.name.toLowerCase().includes(enteredSearchValue) &&
        p.brandName === brand.name
    );
    setDataDisplay(filteredProducts);
  };

  return (
    <div>
      <div style={parentDivStyle} className="">
        <Navbar />
      </div>

      <div>
        <Swiper

          spaceBetween={0}
          centeredSlides={true}
          // effect={'fade'}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true} 
          modules={[Autoplay]}
          className={`mySwiper ${
            productCounter.length > 0 ? "h-[30vh] md:h-[90vh]" : ""
          }`}
        >
          <SwiperSlide>
            <img src={brand.ad_img_1} className="w-full object-cover" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand.ad_img_2} className="w-full object-cover" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand.ad_img_3} className="w-full object-cover" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      {productCounter.length > 0 ? (
        <div className="flex justify-end mx-3 md:mr-6">
        <form
          onSubmit={handleSearchCarModel}
          className="border-2 border-gray-200 my-2 md:my-4 p-1 rounded-md flex w-full  md:w-1/3"
        >
          <input
            type="text"
            name="search"
            placeholder="Search Here"
            className="pl-4  w-2/3  border-none"
          />
          <button className="btn-group btn border-none border-l-2 w-1/3 border-gray-200 rounded-r-md">
            Search
          </button>
        </form>
      </div>
      ) : (
        
        ""
      )}

      <div className="border-2 border-gray-200 p-2 m-2 rounded-xl">
        {productCounter.length > 0 ? (
          <h2 className="text-xl md:text-5xl font-bold text-center my-6 md:my-16">
            Our Featured Products
          </h2>
        ) : (
          ""
        )}
        <div>
          {dataDisplay.length > 0 ? (
            <div>
              {dataDisplay.length > 0 ? (
                <div className="max-w-5xl mx-auto p-2 md:p-0 mb-10 grid justify-center items-center gap-4  grid-cols-1 md:grid-cols-2 ">
                  {dataDisplay.map((prod) => (
                    <OneProduct key={prod._id} prod={prod} />
                  ))}
                </div>
              ) : (
                <NotFound />
              )}
            </div>
          ) : (
            <div>
              {displayData.length > 0 ? (
                <div className="max-w-5xl mx-auto p-2 md:p-0 mb-10 grid justify-center items-center gap-4  grid-cols-1 md:grid-cols-2 ">
                  {displayData.map((prod) => (
                    <OneProduct key={prod._id} prod={prod} />
                  ))}
                </div>
              ) : (
                <NotFound />
              )}
            </div>
          )}
        </div>
        {dataDisplay.length > 0 ? (
          ""
        ) : (
          <div className="flex flex-wrap justify-center space-x-1 md:space-x-2 lg:space-x-3">
            <button
              onClick={handlePrevPage}
              className="btn btn-sm w-1/5 sm:w-auto my-2"
            >
              <GrLinkPrevious className="" />
            </button>
            {pages.map((page) => (
              <button
                className={
                  currentPage === page
                    ? "bg-yellow-300 btn btn-sm w-1/5 sm:w-auto ml-2 md:my-2 my-2"
                    : "btn btn-sm w-1/5 sm:w-auto ml-2 md:my-2 my-2"
                }
                onClick={() => setCurrentPage(page)}
                key={page}
              >
                {page + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className="btn btn-sm w-1/5 sm:w-auto my-2"
            >
              <GrLinkNext />
            </button>
            <select
              value={itemsPerPage}
              onChange={handleItemPerPageChange}
              className="btn btn-sm w-1/5 sm:w-auto my-2"
              id=""
            >
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="10">10</option>
              <option value="40">40</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Advertisement;
