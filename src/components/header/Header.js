import React from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

import MainHeader from "./MainHeader";
import ThemeButton from "./ThemeButton";

const Header = () => {
  const { pathname: currentPath } = useLocation();
  const error = useSelector((state) => state.error.error);
  let inPostSection = false;
  if (currentPath === "/posts") {
    inPostSection = true;
  }

  return (
    <>
      {!error && (
        <header>
          <div className="fixed top-0 bg-gray-100 dark:bg-gray-800 w-full p-5">
            <h1 className="text-purple-600 dark:text-purple-300 text-4xl font-semibold">
              {inPostSection ? "POSTS" : "COMMENTS"}
            </h1>
            <span className="float-right">
              {!inPostSection && <MainHeader />}
            </span>
            <ThemeButton />
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
