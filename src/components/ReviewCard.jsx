import { star } from "../../assets/icons";

const ReviewCard = ({ customerName, rating, feedback, imgURL }) => {
  return (
    <div className="flex justify-center items-center flex-col hover:scale-105 transition delay-150">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px] "
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="font-montserrat text-xl text-slate-gray">{rating}</p>
      </div>
      <h3 className=" mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
