import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import Fade from "react-reveal/Fade";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <Fade bottom duration={1200}>
          <ServiceCard key={service.label} {...service} />
        </Fade>
      ))}
    </section>
  );
};

export default Services;
