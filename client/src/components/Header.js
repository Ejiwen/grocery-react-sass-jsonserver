import React, { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import SearchItem from "./SearchItem"

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  function themeSwitcher() {
    theme === "#27272a" ? setTheme("#fdfafa") : setTheme("#27272a");
  }

  return (
    <header style={{ backgroundColor: theme }}>
      <h2> Grocery List </h2>
      <button onClick={themeSwitcher}> Change Theme</button>
      <SearchItem />
    </header>
  );
};

export default Header;
