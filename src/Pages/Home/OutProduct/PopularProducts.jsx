import star from "../../../assets/icons/star.svg";

const PopularProducts = ({ card }) => {
  const { _id, img, title, price } = card;
  return (
    <div className="card bg-base-100 shadow-xl mt-12">
      <figure className="px-8 pt-8">
        <img src={img} className="w-[345px] h-[225px] rounded-xl" alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center space-y-2">
        <div className="flex justify-center items-center">
          <img className="w-6 h-6 " src={star} alt="" />
          <img className="w-6 h-6 " src={star} alt="" />
          <img className="w-6 h-6 " src={star} alt="" />
          <img className="w-6 h-6 " src={star} alt="" />
          <img className="w-6 h-6 " src={star} alt="" />
        </div>
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <h3 className="font-semibold text-lg text-orange-700">${price}.00</h3>
      </div>
    </div>
  );
};

export default PopularProducts;
