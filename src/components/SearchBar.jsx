import React from "react";

const SearchBar = ({ value, onSearch }) => {
    const handleChange = (e) => {
      onSearch(e.target.value);
    };
  
    return (
      <div className="search-bar">
        <input className="inputField" type="text" value={value} onChange={handleChange} placeholder="Search..."  />
      </div>
    );
  }

export default SearchBar