import { TextField } from '@mui/material';
import React from 'react';

const LocationFilter = ({ onChange, filters }) => {
  const handleLocationChange = (e) => {
    onChange({ ...filters, location: e.target.value });
  };
  return (
    <>
      <TextField
        label='Location'
        color='secondary'
        focused
        onChange={handleLocationChange}
      />
    </>
  );
};

export default LocationFilter;
