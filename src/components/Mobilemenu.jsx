import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Mobilemenu = () => {
  const [navopen, setnavopen] = useState(false);
  const navitems = [
    {
      title: "AboutUs",
      url: "/",
    },
    {
      title: "Features",
      url: "/",
    },
    {
      title: "Pricing",
      url: "/",
    },
    {
      title: "SignUp",
      url: "/",
    },
  ];
  return (
    <div className="block md:hidden">
      {!navopen ? (
        <button onClick={() => setnavopen(true)}>
          <GiHamburgerMenu size={20} />
        </button>
      ) : (
        <>
          <button onClick={() => setnavopen(false)}>
            <IoClose size={20} className="mt-2" />
          </button>
          <div className="absolute left-0 w-full pl-10 border-b top-20 bg-white/60 backdrop-blur-md">
            <ul className="flex flex-col items-center mb-5">
              {navitems.map((item, index) => (
                <li className="mb-2">
                  <a
                    key={index}
                    href={item.url}
                    className="flex flex-col font-semibold text-md"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li className="flex flex-col gap-2">
              <a href="" className='items-center px-4 py-1.5 text-white bg-black rounded-md cursor:pointer'>Login</a>
              <a href="" className='items-center px-3 py-1.5 text-white bg-black rounded-md cursor:pointer'>Sign Up</a>
              </li>
            </ul>
            
          </div>
        </>
      )}
    </div>
  );
};

export default Mobilemenu;
