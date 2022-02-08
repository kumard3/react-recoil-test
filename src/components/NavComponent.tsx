import React, { useRef, useState } from "react";
// import  Link  from "react-router-dom";
import useOnClickOutside from "./useOnClickOutside";

const navData = [
  {
    name: "With Axios",
    href: "/datafetch",
  },
  {
    name: "axios",
    href: "/axios",
  },
];

export default function NavComponent() {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef<HTMLDivElement>(null);

  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className="relative bg-none text-xl font-bold drop-shadow-xl flex-none duration-500  ">
      <div className="w-full container mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center   py-6 sm:justify-between sm:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a
                href="#home"
                className="h-20 flex justify-center item-content w-full flex-col"
              >
                <h1>LOGO</h1>
              </a>
            </div>
            <div className="-mr-2 -my-2 sm:hidden">
              <>
                {isModalOpen ? (
                  <div
                    ref={ref}
                    className="fixed w-[24rem] right-0 top-0   p-2 h-[100vh]  transition transform md:hidden"
                  >
                    <div className="rounded-lg shadow-lg h-full   ring-opacity-5  border-[1px] border-red-100/20 text-white divide-y-2 divide-gray-50">
                      <div className="pt-5 pb-6 px-5">
                        <div className="-mr-2 float-right mb-3">
                          <button
                            onClick={() => setModalOpen(!true)}
                            className=" rounded-md p-2 inline-flex items-center justify-center "
                          >
                            <span className="sr-only">Close menu</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              ></path>
                            </svg>
                          </button>
                        </div>

                        <div className="mt-[5rem] z-10 relative">
                          <nav className="grid gap-y-8">
                            {navData.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md hover:bg-black/50  "
                              >
                                <h1 className="my-3 ml-3 text-3xl font-bold ">
                                  {item.name}
                                </h1>
                              </a>
                            ))}
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className=" rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 ">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="inline-flex items-center lg:hidden text-white  focus-visible:ring ring-indigo-300  active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="white"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            </div>
            <nav className="hidden sm:flex space-x-10 items-center">
              {navData.map((n) => {
                return (
                  <a key={n.name} href={n.href}>
                    {n.name}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
