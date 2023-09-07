import { arrowRight } from "../../assets/icons";
import { offer } from "../../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="special offer"
          width={773}
          height={687}
          className="object-contain w-full hover:scale-95 transition delay-150"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl leading-[1.2] max-sm:text-[72px] max-sm:leading-[82px] font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover unbeatable deals in our Special Offer section. We're excited
          to present you with exclusive discounts on a range of stylish shoes.
          Whether you're looking for the perfect pair of sneakers, elegant
          heels, or comfortable boots, you'll find something extraordinary at
          prices that will make your wallet smile.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Don't miss out on these limited-time offers – step into savings today!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
