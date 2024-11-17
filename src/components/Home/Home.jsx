import React from "react";
import Banner from "../Banner/Banner";
import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import FeedBack from "../FeedBack/FeedBack";

const Home = () => {
  const {serviceData, feedBackData} = useLoaderData();
  // console.log(serviceData);
  return (
    <div className=" max-w-[1000px] mx-auto rounded-lg mt-8">
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {serviceData.slice(0, 4).map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <button className="text-white btn mx-auto block mt-4 btn-primary">
        <NavLink to='/allTreatments'>Show More</NavLink>
      </button>

      <FeedBack feedBackData={feedBackData}></FeedBack>
    </div>
  );
};

export default Home;
