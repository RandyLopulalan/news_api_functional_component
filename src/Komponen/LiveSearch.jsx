import React from "react";

const LiveSearch = ({ search, setSearch }) => {
  return (
    <div className="live_search">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          autoFocus
          type="search"
          role="searchbox"
          placeholder="search news..."
          className="live_search_input"
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        />{" "}
        <button type="submit" className="live_search_btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default LiveSearch;
