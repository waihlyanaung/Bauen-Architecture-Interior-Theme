// // import React from 'react'
// "bg-white border-gray-200 ";
// import { useEffect, useState } from "react";
// import logo from "../assets/images/logo.png";
// import "./Navbar.css";
// import "animate.css";
// import { useNavigate } from "react-router";

// const Navbar = () => {
//   const nav = useNavigate();
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [navbarFixed, setNavbarFixed] = useState(false);
//   const [activePage, setActivePage] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     setNavbarFixed(scrollPosition > 100);
//   }, [scrollPosition]);

//   return (
//     <nav
//       className={`navbar ${
//         navbarFixed
//           ? "fixed drop-shadow-lg animate__animated animate__fadeInDown"
//           : ""
//       }`}
//     >
//       <div className=" w-full container flex flex-wrap items-center justify-between mx-auto ps-0 ms-0">
//         <a
//           href="#"
//           className={`logo font-Oswald items-center ${
//             navbarFixed ? "logoForFixed" : ""
//           }`}
//         >
//           <img src={logo} className=" h-14 mx-auto" alt="Bauen logo" />
//           <div
//             className={`name flex-col items-center justify-center font-normal ${
//               navbarFixed ? "fixed" : ""
//             }`}
//           >
//             <p className=" text-2xl text-center tracking-wider text-secondary">
//               BAUEN
//             </p>
//             <span className=" text-sm text-textColor tracking-wide logo-text">
//               INNOVATE DESIGN
//             </span>
//           </div>
//         </a>
//         <button
//           data-collapse-toggle="navbar-default"
//           type="button"
//           className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-default"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-6 h-6"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </button>
//         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//           <ul className="text-white uppercase text-xl tracking-wide font-Oswald font-light flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0">
//             <li className={`${activePage === 0 ? "active" : ""}`}>
//               <a
//                 href="#"
//                 className=" block py-2 pl-3 pr-4  md:p-0 hover:text-secondary transition-all duration-300"
//                 aria-current="page"
//                 onClick={() => {
//                   () => nav("/");
//                   () => setActivePage(0);
//                 }}
//               >
//                 Home
//               </a>
//             </li>
//             <li className={`${activePage === 1 ? "active" : ""}`}>
//               <a
//                 href="#about"
//                 className="block py-2 pl-3 pr-4  md:p-0 hover:text-secondary transition-all duration-300"
//                 onClick={() => {
//                   () => nav("/");
//                   () => setActivePage(1);
//                 }}
//               >
//                 About
//               </a>
//             </li>
//             <li className={`${activePage === 2 ? "active" : ""}`}>
//               <a
//                 href="#portfolio"
//                 className="block py-2 pl-3 pr-4  md:p-0 hover:text-secondary transition-all duration-300"
//                 onClick={() => {
//                   () => nav("/");
//                   () => setActivePage(2);
//                 }}
//               >
//                 Portfolio
//               </a>
//             </li>
//             <li className={`${activePage === 3 ? "active" : ""}`}>
//               <a
//                 href="#services"
//                 className="block py-2 pl-3 pr-4  md:p-0 hover:text-secondary transition-all duration-300"
//                 onClick={() => {
//                   () => nav("/");
//                   () => setActivePage(3);
//                 }}
//               >
//                 Services
//               </a>
//             </li>
//             <li className={`${activePage === 4 ? "active" : ""}`}>
//               <a
//                 href="#blog"
//                 className="block py-2 pl-3 pr-4  md:p-0 hover:text-secondary transition-all duration-300"
//                 onClick={() => {
//                   () => nav("/");
//                   () => setActivePage(4);
//                 }}
//               >
//                 Blog
//               </a>
//             </li>
//             <li className={`${activePage === 5 ? "active" : ""}`}>
//               <a
//                 href="#contact"
//                 className="block py-2 pl-3 pr-4  md:p-0 hover:text-secondary transition-all duration-300"
//                 onClick={() => {
//                   () => nav("/");
//                   () => setActivePage(5);
//                 }}
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import "./Navbar.css";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [close, setClose] = useState(false);

  const closeHandler = () => {
    setClose(!close);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setNavbarFixed(window.innerWidth <= 768 || scrollPosition > 100);
  }, [windowWidth, scrollPosition]);

  return (
    <nav
      className={`navbar ${
        navbarFixed
          ? "fixed drop-shadow-lg animate__animated animate__fadeInDown"
          : ""
      }`}
    >
      <div className=" w-full  flex flex-wrap items-center justify-between mx-auto ps-0">
        <a
          href="#"
          className={`logo font-Oswald items-center ${
            navbarFixed ? "logoForFixed" : ""
          }`}
        >
          <img src={logo} className=" h-14 mx-auto" alt="Bauen logo" />
          <div
            className={`name flex-col items-center justify-center font-normal ${
              navbarFixed ? "fixed" : ""
            }`}
          >
            <p className=" text-2xl text-center tracking-wider text-secondary">
              BAUEN
            </p>
            <span className=" text-sm text-textColor tracking-wide logo-text">
              INNOVATE DESIGN
            </span>
          </div>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 me-4 lg:me-0 ml-3 text-sm text-secondary bg-primary rounded-lg lg:hidden  focus:outline-none "
          aria-controls="navbar-default"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            close ? "hidden" : ""
          }  hidden w-full transition-all duration-500 lg:block lg:w-auto bg-primary lg:bg-transparent`}
          id="navbar-default"
        >
          <ul className="lg:text-white text-textColor  w-full uppercase text-xl tracking-wide font-Oswald font-light flex flex-col lg:flex-row p-4">
            <li onClick={() => closeHandler()}>
              <a
                href="#home"
                className="active block py-2 pl-3 pr-4  hover:text-secondary transition-all duration-300"
                aria-current="page"
                onClick={() => nav("/")}
              >
                Home
              </a>
            </li>
            <li onClick={() => closeHandler()}>
              <a
                href="#about"
                onClick={() => nav("/")}
                className="block py-2 pl-3 pr-4  hover:text-secondary transition-all duration-300"
              >
                About
              </a>
            </li>
            <li onClick={() => closeHandler()}>
              <a
                href="#portfolio"
                className="block py-2 pl-3 pr-4  hover:text-secondary transition-all duration-300"
                onClick={() => nav("/")}
              >
                Portfolio
              </a>
            </li>
            <li onClick={() => closeHandler()}>
              <a
                href="#services"
                className="block py-2 pl-3 pr-4  hover:text-secondary transition-all duration-300"
                onClick={() => nav("/")}
              >
                Services
              </a>
            </li>
            <li onClick={() => closeHandler()}>
              <a
                href="#blog"
                className="block py-2 pl-3 pr-4  hover:text-secondary transition-all duration-300"
                onClick={() => nav("/")}
              >
                Blog
              </a>
            </li>
            <li onClick={() => closeHandler()}>
              <a
                href="#contact"
                className="block py-2 pl-3 pr-4  hover:text-secondary transition-all duration-300"
                onClick={() => nav("/")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
