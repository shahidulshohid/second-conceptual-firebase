import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";
import { authContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

const Details = () => {
  const singleData = useLoaderData();
  const { description, treatment, image, cost } = singleData;
//   console.log(singleData);

const contextValue = useContext(authContext)
console.log(contextValue)

  return (
    <div className="max-w-[1000px] mx-auto rounded-lg mt-8"> 
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
            <p className="mb-5">
                {description}
            </p>
            <button onClick={() => document.getElementById("my_modal_5").showModal()} className="btn btn-primary">Book appointment</button>
          </div>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default Details;
