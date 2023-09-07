import { shoe8 } from "../../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl leading-[1.2] max-sm:text-[72px] max-sm:leading-[82px] font-bold capitalize lg:max-w-lg">
          We provide You
          <span className="text-coral-red"> Super</span>
          <br />
          <span className="text-coral-red">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          We take immense pride in our commitment to delivering nothing but the
          best when it comes to shoes. Our dedication to exceptional quality,
          craftsmanship, and customer satisfaction is unmatched. Explore our
          collection of meticulously crafted shoes that not only meet but exceed
          your expectations.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Join us in raising the bar for footwear excellence. Your journey to
          superior quality starts here.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="popular shoe"
          height={522}
          width={570}
          className="object-contain hover:scale-95 transition delay-150"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
