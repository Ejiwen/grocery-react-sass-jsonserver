import React, { useState, useEffect } from "react";
import axios from "axios";
import bgAside from "../../assets/groceries.png";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <main>{children}</main>
      <aside
        style={{
          background: `url(${bgAside})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></aside>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;