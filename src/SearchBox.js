import React from 'react';

const SearchBox = ({ searchField, searchChange}) => {
  return (
    <div className="pa3">
      <input
        className={"pa3 ba b--green"}
        type="search"
        placeholder="Search for robot..."
        onChange={searchChange}
        ref={input => input && input.focus()}
      />
    </div>
  )
};

export default SearchBox;
