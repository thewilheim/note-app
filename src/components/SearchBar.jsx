import React from "react";

function SearchBar({ searchValue, setSearchValue }) {
  return (
    <input
      type="text"
      id="searchBar"
      placeholder="Search products"
      name="searchBar"
      onChange={(e) => setSearchValue(e.target.value)}
      value={searchValue}
      class="searchBar"
    />
  );
}

export default SearchBar;
