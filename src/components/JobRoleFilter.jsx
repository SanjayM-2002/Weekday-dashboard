import React from 'react';

const JobRoleFilter = ({ onChange, filters }) => {
  const handleJobRoleChange = (e) => {
    onChange({ ...filters, role: e.target.value });
  };
  return (
    <>
      <input
        type='text'
        onChange={handleJobRoleChange}
        placeholder='Job Role'
      />
    </>
  );
};

export default JobRoleFilter;
