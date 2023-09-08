import { headerLogo } from "../../assets/images";
import { hamburger } from "../../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 mx-[-10px] absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={100}
            height={50}
            className="m-0 w-40 h-20"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black active:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
