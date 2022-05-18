import React from "react";
import LiveSearch from "./LiveSearch";

const Header = ({ search, setSearch }) => {
  return (
    <header>
      Header
      <LiveSearch search={search} setSearch={setSearch} />
    </header>
  );
};

export default Header;
