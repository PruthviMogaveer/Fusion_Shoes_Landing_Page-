import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
import Fade from "react-reveal/Fade";

const PopularProduct = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12 max-xl:mt-[-130px]"
    >
      <Fade bottom Cascade duration={1200}>
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">
            Our <span className="text-coral-red">Popular </span>Products
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Experience top-notch quality and style with our popular selections.
            Discover a world of comfort, design and value.
          </p>
        </div>
        <div className="mt-16 gap-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {products.map((product) => (
            <Fade bottom duration={1200}>
              <PopularProductCard key={product.name} {...product} />
            </Fade>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default PopularProduct;
