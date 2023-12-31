import Button from "../components/Button";
import Fade from "react-reveal/Fade";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <Fade left duration={1200}>
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
          Sign Up for<span className="text-coral-red"> Updates </span> &
          Newsletter
        </h3>
        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full hover:border-black transition delay-150">
          <input
            type="text"
            placeholder="subscribe@fusion.com"
            className="input"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="Sign Up" fullWidth />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Subscribe;
