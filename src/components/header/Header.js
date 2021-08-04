import React from "react";
import { useLocation } from "react-router";

import MainHeader from "./MainHeader";

const Header = () => {
  const {pathname: currentPath} = useLocation();
  let inPostPath = false;
  if (currentPath === "/posts") {
    inPostPath = true;
  }
 
  return (
    <header>
      <h1 style={{ textAlign: "center" }}>
        {inPostPath ? "POSTS" : "COMMENTS"}
      </h1>
      {!inPostPath && <MainHeader />}
    </header>
  );
};

export default Header;
