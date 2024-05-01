import React from 'react';
import JobCard from '../components/JobCard';
import { Grid } from '@mui/material';

const Dashboard = () => {
  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      limit: 8,
      offset: 0,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    const res = await fetch(
      'https://api.weekday.technology/adhoc/getSampleJdJSON',
      requestOptions
    );
    const data = await res.json();
    console.log('data is: ', data);
    console.log('1st job data is: ', data.jdList[1]);
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div>
        <JobCard />
      </div>
      {/* <Grid container my={4}>
        {arr.map((i) => (
          <Grid item key={i} xs={12} sm={12} md={6} lg={4}>
            <JobCard />
          </Grid>
        ))}
      </Grid> */}
    </>
  );
};

export default Dashboard;
