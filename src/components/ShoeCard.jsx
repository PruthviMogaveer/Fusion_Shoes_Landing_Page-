import { thumbnailBackground } from "../../assets/images";

const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl    
    ${
      bigShoeImg === imgURL.bigShoe
        ? "border-coral-red scale-105"
        : "border-transparent"
    } cursor-pointer max-sm:flex-1 hover:scale-105 transition delay-150`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={thumbnail - thumbnailBackground}
          alt=""
          width={160}
          className="absolute z-0"
        />
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain z-10"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
