import React from 'react';
import { Grid, Button, Typography, Stack, Box } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Endpoints from '../../assets/Endpoint.gif';
import { styled } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';

const GetStartedButton = styled(Button)(({ theme }) => ({
  borderRadius: '100px',
  border: '2px solid #11D9C5',
  background:
    'radial-gradient(1027.76% 142.09% at 100% 2.36%, #122C6F 0%, #11D9C5 49%, rgba(18, 44, 111, 0.97) 97.83%)',
  display: 'inline-flex',
  height: '55px',
  padding: '28px 60px 28px 60px',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexShrink: 0,
  color: '#fff',
}));

export const Introduction = () => {
  return (
    <Grid container spacing={2} alignItems={'center'}>
      <Grid item xs={6} md={8}>
        <Stack margin="10vh" gap={2}>
          <Stack flexDirection="row" mb={3}>
            <Typography variant="h2" fontWeight="bold">
              Consumer Behaviour
            </Typography>
            <AccessAlarmIcon sx={{ color: '#11D9C5', fontSize: '4.125rem', marginLeft: '10px' }} />
          </Stack>
          <Stack gap={1} pb={2}>
            <Typography variant="h5" fontWeight="bold">
              Context:
            </Typography>
            <Typography variant="body1">
              The file has been used in order to apply different machine learning algorithms and to compare different
              results, taking as an example the Udemy Machine Learning courses files.
            </Typography>
          </Stack>
          <Stack gap={1} pb={2}>
            <Typography variant="h5" fontWeight="bold">
              Content:
            </Typography>
            <Typography variant="body1">
              The data represents details about 400 clients of a company including the unique ID, the gender, the age of
              the customer and the salary. Besides this, we have collected information regarding the buying decision -
              whether the customer decided to buy specific products or not.
            </Typography>
            <Stack pl={2} borderLeft="2px solid #fff">
              <Stack flexDirection="row" gap={1}>
                target ={' '}
                <Box component="span" fontWeight="bold">
                  Purchased
                </Box>
              </Stack>
              <Stack flexDirection="row" gap={1}>
                features =
                <Box component="span" fontWeight="bold">
                  User ID, Gender, Age, EstimatedSalary
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <ScrollLink to="checkerSection" smooth={true} duration={600}>
            <GetStartedButton sx={{ marginTop: '20px' }}>
              <Typography style={{ textTransform: 'none', color: '#fff', fontWeight: 600, fontSize: 18 }}>
                Get Started!
              </Typography>
            </GetStartedButton>
          </ScrollLink>
        </Stack>
      </Grid>
      <Grid item xs={6} md={4}>
        <img style={{ width: '80%', height: '80%' }} src={Endpoints} alt="" />
      </Grid>
    </Grid>
  );
};
