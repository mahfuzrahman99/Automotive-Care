// import { useLoaderData } from "react-router-dom";
import Cart from "../../components/Cart";
import Navbar from "../../Shared/Navbar/Navbar";
import navbarADBG from "../../assets/automotive-logo-design-vector-update.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const axiosSecure = useAxiosSecure()
  const [removeData, setRemoveData] = useState([]);

  useEffect(() => {
    // const url = ;
    if(user){
      axiosSecure.get(`/cart?email=${user?.email}`)
    .then((res) => {
      console.log(res.data);
      setRemoveData(res.data);
    });
    }
  }, [user, axiosSecure]);

  const parentDivStyle = {
    backgroundImage: `url(${navbarADBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div style={parentDivStyle} className="">
        <Navbar />
      </div>
      <p className="text-xl md:text-3xl font-bold max-w-6xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        Total Carted Products: {removeData.length}
      </p>

      <div className="md:grid grid-cols-2 justify-center items-center gap-3 my-10 max-w-6xl mx-auto">
        {removeData.map((cart) => (
          <Cart
            key={cart._id}
            removeData={removeData}
            setRemoveData={setRemoveData}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
