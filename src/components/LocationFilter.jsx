import React from 'react';

const LocationFilter = ({ onChange, filters }) => {
  const handleLocationChange = (e) => {
    onChange({ ...filters, location: e.target.value });
  };
  return (
    <>
      <input
        type='text'
        onChange={handleLocationChange}
        placeholder='Location'
      />
    </>
  );
};

export default LocationFilter;
