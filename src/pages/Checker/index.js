import React from 'react';
import { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  TextField,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Grid,
} from '@mui/material';
import { FREQUENCY_INFO } from '../../constants/common';

const FREQUENCY = {
  FORTNIGHTLY: 'Fortnightly',
  WEEKLY: 'Weekly',
  ANNUALY: 'Annually',
  QUARTERLY: 'Quarterly',
  BI_WEEKLY: 'Bi-Weekly',
  MONTHLY: 'Monthly',
  EVERY_3_MONTHS: 'Every 3 Months',
};

export const Checker = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState(10);
  const [age, setAge] = useState(0);
  const [category, setCategory] = useState(10);
  const [season, setSeason] = useState(10);
  const [frequency, setFrequency] = useState(FREQUENCY.ANNUALY);

  const handleChangeAge = (e) => setAge(e.target.value);
  const handleChangeGender = (e) => setGender(e.target.value);

  const handleSubmit = () => console.log(gender, age);

  const onSubmit = () => {
    setIsLoading(true);
    handleSubmit();
    setIsLoading(false);
  };

  const renderResult = () => {
    if (!frequency) return;
    return (
      <Stack
        sx={{ padding: '0.25rem 1rem', width: 'fit-content', borderRadius: '0.25rem' }}
        fontWeight="bold"
        bgcolor={FREQUENCY_INFO[frequency].bgcolor}
        color={FREQUENCY_INFO[frequency].color}
      >
        {frequency}
      </Stack>
    );
  };

  return (
    <Stack id="checkerSection">
      <Box margin="10vh">
        <Box sx={{ display: 'flex', marginBottom: '20px' }}>
          <Typography variant="h2" fontWeight="bold">
            Consumer Behaviour Predict
          </Typography>
        </Box>
        <Stack gap={2}>
          <Typography variant="text" sx={{ lineHeight: '32px' }}>
            ...
          </Typography>
          <FormControl>
            <Grid container spacing={4}>
              <Grid item lg={6} xs={12}>
                <Stack gap={2}>
                  <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={category}>
                    <MenuItem value={0}>
                      <em>Gender</em>
                    </MenuItem>
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                  </Select>
                  {/* <Stack>
                    <InputLabel id="demo-simple-select-label1">Gender</InputLabel>
                    <Select
                      labelId="demo-simple-select-label1"
                      id="demo-simple-select1"
                      value={gender}
                      label="Gender"
                      onChange={handleChangeGender}
                    >
                      <MenuItem value={0}>Male</MenuItem>
                      <MenuItem value={1}>Female</MenuItem>
                    </Select>
                  </Stack> */}
                  <TextField label="Age" variant="outlined" value={age} onChange={handleChangeAge} type="number" />
                  <TextField label="Purchase Amount (USD)" variant="outlined" type="number" />
                  {/* 'Season',
       'Review Rating', 'Subscription Status', 'Discount Applied',
       'Previous Purchases', 'Frequency of Purchases'] */}
                  <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={category}>
                    <MenuItem value={0}>
                      <em>Category</em>
                    </MenuItem>
                    <MenuItem value={10}>Clothing</MenuItem>
                    <MenuItem value={20}>Accessories</MenuItem>
                  </Select>
                  <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={season}>
                    <MenuItem value={0}>
                      <em>Season</em>
                    </MenuItem>
                    <MenuItem value={10}>Fall</MenuItem>
                    <MenuItem value={20}>Summer</MenuItem>
                  </Select>
                  <TextField label="Review Rating" variant="outlined" />
                  <TextField label="Subscription Status" variant="outlined" />
                  <TextField label="Discount Applied" variant="outlined" />
                  <TextField label="Previous Purchases" variant="outlined" />
                  <Stack pt={2}>
                    <Button disabled={isLoading} variant="contained" onClick={onSubmit}>
                      Submit
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Stack border="2px solid #fff" borderRadius={2} height={1} p={2} gap={2}>
                  <Typography variant="h6">Result: </Typography>
                  {renderResult()}
                </Stack>
              </Grid>
            </Grid>
          </FormControl>
        </Stack>
      </Box>
    </Stack>
  );
};
