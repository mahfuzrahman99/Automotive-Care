import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Shared/Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";
import bannerBG from "../../assets/img-1.jpg";
import Brand from "../../components/Brand";
import Member from "../../components/Member";
import Client from "../../components/Client";
import AOS from "aos";
import "aos/dist/aos.css";
import CarCarousel from "../../components/CarCarousel/CarCarousel";
import axios from "axios";
import About from "../about/About";

AOS.init();

const Home = () => {
  const brands = useLoaderData();
  const [members, setMembers] = useState([]);
  const [clients, setClients] = useState([]);

  const divStyle = {
    backgroundImage: `url(${bannerBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  useEffect(() => {
    axios
      .get("https://assignment-teen-server-site.vercel.app/addManagements")
      .then(function (response) {
        console.log(response);
        setMembers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://assignment-teen-server-site.vercel.app/addClients")
      .then(function (response) {
        console.log(response);
        setClients(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div
        className="banner-parent h-[50vh] overflow-hidden md:h-[90vh] bg-opacity-80"
        style={divStyle}
      >
        <Navbar className="-z-10" />
        <Banner />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="border-2 p-4 border-gray-200 my-14 rounded-lg">
          <h2 className="text-5xl font-bold text-center my-7">Our Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
            {brands.map((brand) => (
              <Brand key={brand._id} brand={brand} />
            ))}
          </div>
        </div>
        <div className="border-2 p-4 border-gray-200 my-14 rounded-lg">
          <h2 className="text-5xl font-bold text-center my-7">
            Our Most Selling Cars
          </h2>
          <CarCarousel />
        </div>
        <div className="border-2 p-4 border-gray-200 my-14 rounded-lg">
          <h2 className="text-5xl font-bold text-center my-7">
            Our Management Team
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-5 gap-2 justify-center"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            id="card"
          >
            {members.map((member) => (
              <Member key={member._id} member={member} />
            ))}
          </div>
        </div>
        <div
          className="border-2 p-4 border-gray-200 my-14 rounded-lg"
          id="reviews"
        >
          <h2 className="text-5xl font-bold text-center my-7">
            Our Clients Reviews
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-2 justify-center"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {clients.map((client) => (
              <Client key={client._id} client={client} />
            ))}
          </div>
        </div>
        <div
          className="border-2 p-4 border-gray-200 my-14 rounded-lg"
          id="about"
        >
          <h2 className="text-5xl font-bold text-center my-7">About Us</h2>
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
