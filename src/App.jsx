import {
  CustomerReviews,
  Footer,
  PopularProduct,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
  Hero,
} from "./sections";
import Nav from "./components/Nav";
import Fade from "react-reveal/Fade";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Fade duration={1200}>
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
      </Fade>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8 ">
        <Footer />
      </section>
    </main>
  );
};

export default App;
