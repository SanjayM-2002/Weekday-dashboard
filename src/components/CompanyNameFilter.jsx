import { TextField } from '@mui/material';
import React from 'react';

const CompanyNameFilter = ({ onChange, filters }) => {
  const handleCompanyNameChange = (e) => {
    onChange({ ...filters, companyName: e.target.value });
  };
  return (
    <>
      <TextField
        label='Company Name'
        color='secondary'
        focused
        onChange={handleCompanyNameChange}
      />
    </>
  );
};

export default CompanyNameFilter;
