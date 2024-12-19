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
              Naïve Bayes Classification : Spam Email Detection
            </Typography>
            <AccessAlarmIcon sx={{ color: '#11D9C5', fontSize: '4.125rem', marginLeft: '10px' }} />
          </Stack>
          <Stack gap={1} pb={2}>
            <Typography variant="h5" fontWeight="bold">
              Context:
            </Typography>
            <Typography variant="body1">
              The file has been used to apply different machine learning algorithms and compare their performance, using
              spam email detection as the primary use case.
            </Typography>
          </Stack>
          <Stack gap={1} pb={2}>
            <Typography variant="h5" fontWeight="bold">
              Content:
            </Typography>
            <Typography variant="body1">
              The data represents details about email communications, including unique identifiers, email content
              characteristics, and sender information. Additionally, it includes the classification of whether the email
              was marked as spam or not spam.
            </Typography>
            <Stack pl={2} borderLeft="2px solid #fff">
              <Stack flexDirection="row" gap={1}>
                target ={' '}
                <Box component="span" fontWeight="bold">
                  Spam
                </Box>
              </Stack>
              {/* <Stack flexDirection="row" gap={1}>
                features =
                <Box component="span" fontWeight="bold">
                  User ID, Gender, Age, EstimatedSalary
                </Box>
              </Stack> */}
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
