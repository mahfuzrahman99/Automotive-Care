import logo from "../../assets/automotive-logo-design-vector-removebg-preview.png";
import bgCar from "../../assets/r5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <section id="about" className="">
      <div className="">
        <div className="text-center mb-2 p-2 md:grid grid-cols-2 justify-center items-center">
          <img src={logo} className="h=[150px]" alt="" />
          <div>
            <h2 className="text-xl md:text-3xl font-extrabold  text-red-400">
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                AUTOMOTIVE CARE
              </span>
            </h2>
            <p className="mt-4 md:text-xl px-4 md:px-12">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-medium">
                AUTOMOTIVE CARE
              </span>
              , your premier destination for a world of automotive excellence.
              We are your trusted partner in finding the perfect car that suits
              your style, needs, and budget.
            </p>
          </div>
        </div>
        <div
          className="md:grid grid-cols-3 gap-2 bg-blue-600 p-4 rounded-lg"
          style={{
            backgroundImage: `url(${bgCar})`, // Set the background image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="text-center"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="text-gray-400 mb-2 p-2 h-[350px] md:h-[400px] lg:h-[270px] border-2 border-white rounded-tl-3xl rounded-br-3xl ">
              <h2 className="text-xl font-extrabold text-red-400">
                ### Our Commitment
              </h2>
              <p className="mt-4 font-medium ">
                At{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-medium">
                  AUTOMOTIVE CARE
                </span>
                , we are committed to delivering the best in the world of
                automobiles. We take pride in offering a wide range of cars from
                renowned brands, each meticulously chosen for quality,
                innovation, and performance. Our mission is to provide you with
                an exceptional automotive experience.
              </p>
            </div>
          </div>
          <div
            className="text-center text-gray-400  h-[350px] md:h-[400px] lg:h-[270px] border-2 border-white rounded-tl-3xl rounded-br-3xl  mb-2 p-2"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h2 className="text-xl font-extrabold text-red-400">
              ### Explore Your Options
            </h2>
            <p className="mt-4 font-medium ">
              Discover an extensive selection of cars, from luxury to economy,
              SUVs to sedans. We feature the latest models from top brands,
              ensuring you have access to the most cutting-edge automotive
              technologies.
            </p>
          </div>
          <div
            className="text-center h-[350px] md:h-[400px] lg:h-[270px] text-gray-400 mb-2 p-2 border-2 border-white rounded-tl-3xl rounded-br-3xl "
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h2 className="text-xl font-extrabold text-red-400">
              ### Customer-Centric Service
            </h2>
            <p className="mt-4 font-medium ">
              Our dedication to customer satisfaction is unwavering. We aim to
              make your car buying journey as seamless as possible. Our
              knowledgeable team is here to assist you at every step, from
              helping you find the perfect car to addressing your questions and
              concerns.For More Information Please
              <br />{" "}
              <a
                href="#contact"
                className="text-red-400 font-bold btn btn-sm btn-outline border-none"
              >
                Contact
              </a>
            </p>
          </div>
          <div
            className="text-center h-[350px] md:h-[400px] lg:h-[270px] text-gray-400 mb-2 p-2 border-2 border-white rounded-tl-3xl rounded-br-3xl "
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h2 className="text-xl font-extrabold text-red-400">
              ### Visit Our Showroom
            </h2>
            <p className="mt-4 font-medium ">
              We invite you to visit our showroom, where you can view our
              featured cars up close and take a test drive. Our location is
              easily accessible, and we are here to welcome you and answer any
              inquiries you may have. <br /> For Visit Please Follow The{" "}
              <a
                href="#location"
                className="text-red-400 font-bold btn btn-sm btn-outline border-none"
              >
                Location
              </a>
            </p>
          </div>
          <div
            className="text-center h-[350px] md:h-[400px] lg:h-[270px] text-gray-400 mb-2 p-2 border-2 border-white rounded-tl-3xl rounded-br-3xl "
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h2 className="text-xl font-extrabold text-red-400">
              ### Meet Our Team
            </h2>
            <p className="mt-4 font-medium ">
              Our professional and experienced management team is committed to
              providing you with top-notch service and ensuring that your
              automotive needs are met. Get to know the faces behind{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-medium">
                AUTOMOTIVE CARE
              </span>{" "}
              and discover our passion for cars.
            </p>
          </div>
          <div
            className="text-center h-[350px] md:h-[400px] lg:h-[270px] text-gray-400 mb-2 p-2 rounded-tl-3xl border-2 border-white rounded-br-3xl "
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h2 className="text-xl font-extrabold text-red-400">
              ### What Our Customers Say
            </h2>
            <p className="mt-4 font-medium ">
              We value feedback from our customers and take pride in the
              relationships we build. Read what our satisfied customers have to
              say about their experiences with us. <br />
              <span className="text-white">
                You Want To See Our Customer Reviews
              </span>{" "}
              <br />
              <a
                href="#reviews"
                className="text-red-400 font-bold btn btn-sm btn-outline border-none"
              >
                {" "}
                For Hare
              </a>
            </p>
          </div>
          <div
            className="text-center  h-[350px] md:h-[400px] lg:h-[270px] text-gray-400 mb-2 p-2 border-2 border-white rounded-tl-3xl rounded-br-3xl "
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h2 className="text-xl font-extrabold text-red-400">
              ### Get in Touch
            </h2>
            <p className="mt-4 font-medium ">
              Your journey to finding the perfect car starts with us. If you
              have any questions or would like to explore a specific car in more
              detail, do not hesitate to contact us. We are here to assist you
              with a smile and a passion for cars.
            </p>
          </div>
        </div>
        <div>
          <h1 className=" text-2xl md:text-2xl font-bold lg:text-4xl md:font-black my-5 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              AUTOMOTIVE CARE
            </span>{" "}
            - Where Excellence Meets the Road!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
