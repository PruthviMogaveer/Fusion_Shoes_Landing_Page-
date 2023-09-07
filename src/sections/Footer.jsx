import { footerLogo, footerIcon } from "../../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container" id="footer">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a
            href="/"
            className="flex justify-center items-center mb-[-15px] mt-[-50px]"
          >
            <img src={footerIcon} alt="Footer icon" className="h-10 w-10" />
            <img src={footerLogo} alt="Footer logo" className="h-20 w-40" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Fusion store. Find
            your perfect sizein Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer">
                <a href="#footer">
                  <img src={icon.src} alt={icon.alt} height={24} width={24} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex text-white-400 mt-24 flex-col justify-center items-center  ">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer hover:text-slate-gray">
          <i class="fa-regular fa-copyright"></i>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer hover:text-slate-gray">
          {" "}
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
