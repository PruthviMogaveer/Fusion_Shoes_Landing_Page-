import { headerLogo } from "../../assets/images";
import { hamburger } from "../../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
        <ul
          className={`flex-1 flex justify-center items-center gap-16 max-lg:max-lg-menu transition duration-500 ease-in-out  ${
            menuOpen ? `max-lg:translate-x-0` : `max-lg:translate-x-[100%]`
          }`}
        >
          {menuOpen && window.innerWidth < 1024 ? (
            <div onClick={() => setMenuOpen(!menuOpen)}>
              <i class="fa-solid fa-xmark fa-2xl text-slate-gray"></i>
            </div>
          ) : (
            <div></div>
          )}
          {navLinks.map((item) => (
            <li key={item.label} onClick={() => setMenuOpen(!menuOpen)}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black active:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="hidden max-lg:block"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
