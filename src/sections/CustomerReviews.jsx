import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
import Fade from "react-reveal/Fade";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <Fade top>
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our
          <span className="to-coral-red "> Cusomer </span>
          Say?
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          experiance with us.
        </p>
      </Fade>
      <Fade bottom delay={700}>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <Fade bottom duration={1200}>
              <ReviewCard
                key={review.customerName}
                imgURL={review.imgURL}
                feedback={review.feedback}
                rating={review.rating}
                customerName={review.customerName}
              />
            </Fade>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default CustomerReviews;
