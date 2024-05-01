import { Box, Paper, Stack } from '@mui/material';
import React, { useState } from 'react';

const JobCard = () => {
  const [hovered, setHovered] = useState(false);
  const [jobData, setJobData] = useState({
    jdLink: 'https://weekday.works',
    jdUid: 'cfff35ac-053c-11ef-83d3-06301d0a7178-92010',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    jobRole: 'frontend',
    location: 'delhi ncr',
    maxExp: null,
    maxJdSalary: null,
    minExp: null,
    minJdSalary: null,
    salaryCurrencyCode: null,
  });
  const [mockData, setMockData] = useState({
    estimatedSalary: '10-15 LPA',
  });
  return (
    <Paper
      elevation={hovered ? 4 : 1}
      sx={{
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 4,
        transition: 'box-shadow 0.3s',
        '&:hover': {
          boxShadow: hovered
            ? '0px 0px 15px rgba(255, 0, 0, 0.7)'
            : '0px 0px 10px rgba(255, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box>
        <Stack mx={2}>
          <Stack direction={'row'} gap={1}>
            <Box
              sx={{
                borderRadius: 2,
                padding: 0.5,
                border: '1px solid grey',
              }}
            >
              Posted 9 days ago
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                padding: 0.5,
                border: '1px solid grey',
              }}
            >
              10 applicants
            </Box>
          </Stack>
          <Stack direction={'row'}>
            <Box
              component='img'
              sx={{
                height: 50,
                width: 40,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
                borderRadius: '50%',
              }}
              src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2'
            />
            <Stack>
              <Box>Firefly</Box>
              <Box>{jobData.jobRole}</Box>
              <Box>{jobData.location}</Box>
            </Stack>
          </Stack>
          <Stack direction={'row'}>
            <Box>Estimated Salary: </Box>
            <Box>&#8377;{mockData.estimatedSalary} &#x2713;</Box>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
};

export default JobCard;
