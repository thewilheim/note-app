import { React, useState } from "react";

function SearchBar(props) {
  const { searchValue, setSearchValue } = props;
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
