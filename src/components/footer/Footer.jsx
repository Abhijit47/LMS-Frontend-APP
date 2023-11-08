import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/images/online-learning -512.png";
import { footerBottomLinks, footerLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-y-4 sm:gap-x-4 lg:gap-x-4">
          {footerLinks.map((links, index) => (
            <div
              className="col-span-4 p-8 sm:col-span-2 lg:col-span-1"
              key={index}
            >
              <h6 className="text-md mb-3 font-medium uppercase tracking-widest text-gray-900">
                {links.linksHeader}
              </h6>
              <ul className="list-none">
                {links.linkName.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      to={link.replaceAll(" ", "-")}
                      className="capitalize text-gray-600 hover:text-gray-800"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container mx-auto flex flex-col items-center px-5 py-2 sm:flex-row">
          <img
            src={FooterLogo}
            alt="Logo"
            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
          />
          <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
            @&nbsp;{new Date().getFullYear()}&nbsp;LMS All rights reserved.
          </p>
          <span className="mt-4 inline-flex justify-center gap-4 sm:ml-auto sm:mt-0 sm:justify-start">
            {footerBottomLinks.map((bottomLink, index) => (
              <Link to="/" className="text-gray-500" key={index}>
                {bottomLink.linkIcon}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

/*
xs:items-center sm:grid-cols-2 md:grid-cols-2 md:text-left lg:grid-cols-4 xl:items-start
*/
export default Footer;
