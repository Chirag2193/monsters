import React from 'react';

export default function SearchBox({placeholder, handleChange}) {
  return (
      <>
        <input 
            type="search" 
            name="search" 
            onChange={handleChange} 
            placeholder={placeholder} />
      </>
  );
}
