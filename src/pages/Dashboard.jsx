import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import { Box, CircularProgress, Grid } from '@mui/material';
import { Oval } from 'react-loader-spinner';
import JobRoleFilter from '../components/JobRoleFilter';
import LocationFilter from '../components/LocationFilter';

const Dashboard2 = () => {
  const [jobData, setJobData] = useState([]);
  const [filters, setFilters] = useState({
    location: '',

    role: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const raw = JSON.stringify({
      limit: 10,
      offset: page * 10,
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    try {
      const res = await fetch(
        'https://api.weekday.technology/adhoc/getSampleJdJSON',
        requestOptions
      );
      const data = await res.json();
      console.log('data is: ', data);
      console.log('1st job data is: ', data.jdList[0]);
      console.log('keys are: ', Object.keys(data.jdList[0]));
      setJobData((prevData) => [...prevData, ...data.jdList]);
      console.log('jobdata is: ', jobData);
      setPage(page + 1);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    console.log('page fetching is: ', page);
  }, []);
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      fetchData();
      console.log('loading is : ', isLoading);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filterJobs = (jobList, filters) => {
    const filteredByRole = filters.role
      ? jobList.filter((item) =>
          item.jobRole.toLowerCase().includes(filters.role.toLowerCase())
        )
      : jobList;

    const filteredByLocation = filters.location
      ? filteredByRole.filter((item) =>
          item.location.toLowerCase().includes(filters.location.toLowerCase())
        )
      : filteredByRole;

    return filteredByLocation;
  };

  return (
    <>
      {/* <div><JobCard /></div> */}
      <JobRoleFilter filters={filters} onChange={handleFilterChange} />
      <LocationFilter filters={filters} onChange={handleFilterChange} />

      <Grid container my={4}>
        {filterJobs(jobData, filters).map((job, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>

      <Box display='flex' justifyContent='center' alignItems='center'>
        <Oval
          visible={true}
          height='80'
          width='80'
          color='#4fa94d'
          ariaLabel='oval-loading'
          wrapperStyle={{}}
          wrapperClass=''
        />
      </Box>
    </>
  );
};

export default Dashboard2;
