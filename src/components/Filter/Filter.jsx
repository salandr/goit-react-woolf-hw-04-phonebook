import React from 'react';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChangeFilter}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};

export default Filter;
