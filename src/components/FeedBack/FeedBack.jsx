const FeedBack = ({ feedBackData }) => {
  console.log(feedBackData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {feedBackData.map((feed) => (
        <div className="card bg-base-100 shadow-xl">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <img
                className="w-12 h-12 rounded-full"
                src={feed.userImg}
                alt=""
              />
              <h2 className="card-title ml-4">{feed.name}</h2>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
            <p>{feed.review}</p>
            <div className="card-actions justify-end items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedBack;
