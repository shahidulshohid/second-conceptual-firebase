import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { treatment, image, description, cost, id } = service;
  // console.log(service);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatment}
          <div className="badge badge-secondary">$ {cost}</div>
        </h2>
        <p title={description}>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <NavLink to={`/details/${id}`}>
            <button className="badge badge-outline bg-primary text-white p-4">
              CheckOut more
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
