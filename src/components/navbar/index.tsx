import { Bars3Icon, PlusIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { NavBarData } from "./NavBarData";
import { useMediaQuery } from "react-responsive";
import {useEffect, useRef, useState} from "react";

const Navbar = () => {
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<number>(0);
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;
    const currentMenuItem = NavBarData.findIndex(
        (item) => item.path === currentPath
    );
    setSelectedMenuItem(currentMenuItem);
  }, [location]);

  const isAboveMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const flexBetween = "flex justify-start items-center";
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuToggle(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
      <aside className="h-screen">
        <nav className="h-full">
          {isAboveMedium || isMenuToggle
              ? (
                  <div
                      ref={menuRef}
                      className={` ${
                          isMenuToggle ? "w-64" : "w-20"
                      } flex flex-col p-2 h-full bg-white border-r shadow-sm ease-in-out`}
                  >
                    {/* TOGGLE AND LOGO */}
                    <div className={`${flexBetween} w-64 p-2`}>
                      <button>
                        <Bars3Icon
                            className="h-12 w-12 mr-4 ml-0 p-2 bg-grey-50 hover:bg-gray-100 rounded-full"
                            onClick={() => setIsMenuToggle(!isMenuToggle)}
                        />
                      </button>
                      <img
                          src="https://img.logoipsum.com/243.svg"
                          className={`${isMenuToggle ? "w-32" : "w-0"} duration-75`}
                      />
                    </div>
                    {/* ADD BUTTON */}
                    <div
                        className={`${flexBetween} ${
                            isMenuToggle ? "w-32" : "w-16"
                        } mb-3 p-2 border rounded-full bg-grey-50 hover:bg-gray-100 `}
                    >
                      <button className="">
                        <PlusIcon className="h-12 w-12 ml-0 p-2 bg-grey-50 hover:bg-gray-100 rounded-full" />
                      </button>
                      <div
                          className={`${isMenuToggle ? "ml-3" : "ml-0"} duration-75`}
                      >
                        {isMenuToggle ? "Add" : ""}
                      </div>
                    </div>
                    {/* MENU ITEMS */}
                    <ul className="overflow-y-auto overflow-x-hidden"
                        onMouseEnter={() => isAboveMedium && setIsMenuToggle(true)}
                        onMouseLeave={() => isAboveMedium && setIsMenuToggle(false)}
                    >
                      {NavBarData.map((item, index) => {
                        return (
                            <Link
                                to={item.path}
                                key={index}
                                onClick={() => {
                                  setSelectedMenuItem(index);
                                }}
                            >
                              <li
                                  className={`${
                                      selectedMenuItem === index
                                          ? "bg-gray-100 border-r-4 border-r-indigo-500"
                                          : "hover:bg-gray-100"
                                  } h-16 flex justify-start items-center hover:bg-gray-100 cursor-pointer"`}
                              >
                                <div className="flex justify-start items-center">
                                  <div className="ml-4">
                                    <item.icon key={index} className="h-7 w-7 mr-2"/>
                                  </div>
                                  <div
                                      className={`${
                                          isMenuToggle ? "ml-4" : "ml-0"
                                      } duration-75 `}
                                  >
                                    {isMenuToggle ? item.title : ""}
                                  </div>
                                </div>
                              </li>
                            </Link>
                        );
                      })}
                    </ul>
                  </div>
              )
              : (
                  <div className={`${flexBetween} w-64 p-4`}>
                    <button>
                      <Bars3Icon
                          className="h-12 w-12 mr-4 ml-0 p-2 bg-grey-50 hover:bg-gray-100 rounded-full"
                          onClick={() => setIsMenuToggle(!isMenuToggle)}
                      />
                    </button>
                    <img
                        src="https://img.logoipsum.com/243.svg"
                        className={`${isMenuToggle ? "w-32" : "w-0"} duration-75`}
                    />
                  </div>
              )}
        </nav>
      </aside>
  );
};

export default Navbar;
