import React, { useState, useEffect } from "react";
import bgAside from "../../assets/groceries.png";
import Header from "./Header";
import ThemeContext from "./ThemeContext";

const Layout = ({ children }) => {
  const theme = useState("#27272a");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="container">
        <Header />
        <main style={{ backgroundColor: theme[0] }}>{children}</main>
        <aside
          style={{
            background: `url(${bgAside})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></aside>
        <footer>
          <p> Cheikhany Ejiwen © 2021 </p>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
