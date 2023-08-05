
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/index";
import { styles } from "../style";
import { logo, menu, close } from "../assets";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full fixed top-0 z-20  ${toggle ? "xxs:bg-purple-950": "" }
     ${scrolled ? " xxs:bg-purple-950 xxs:bg-opacity-50" : "bg-transparent"} `}
    >
      <div className="container w-full max-w-7xl mx-auto py-4 flex justify-between items-center">
        <Link to="/"  >
          {/* <sapn className="from-pink-700">3D</sapn> Protflio{" "} */}
          <img src={logo} alt="logo" loading="lazy" className="h-[70px] w-[70px] object-contain"/>
        </Link>
        <ul className="list-none hidden sm:flex text-center gap-9 ">
          {navLinks.map((item) => (
            <li
              className="  font-medium cursor-pointer text-[18px] text-secondary hover:text-white"
              key={item.id}
            >
              {item.title}
            </li>
          ))}
        </ul>
        {/* mobile screen */}
        <div className="sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
         </div>
      </div>
      
      <ul className ={`${!toggle ? "hidden":"flex"} list-none sm:hidden flex flex-col gap-10 text-center mb-9 `} >
            {navLinks.map((item) => (
              <li
                className=" font-medium cursor-pointer text-[18px] text-secondary"
                key={item.id}
              >
                {item.title}
              </li>
            ))}
          </ul>
    </nav>
  );
}
export default Navbar;
