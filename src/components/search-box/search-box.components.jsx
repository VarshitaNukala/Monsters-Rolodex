import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
      type="search"
    />
  );
};
