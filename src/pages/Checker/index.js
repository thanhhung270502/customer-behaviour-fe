import React from 'react';
import { useState } from 'react';
import { Box, Typography, FormControl, TextField, Stack, Select, MenuItem, InputLabel, Button } from '@mui/material';

export const Checker = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState(0);
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState('');

  const handleChangeAge = (e) => setAge(e.target.value);
  const handleChangeGender = (e) => setGender(e.target.value);
  const handleChangeSalary = (e) => setSalary(e.target.value);

  const handleSubmit = () => console.log(gender, age, salary);

  const onSubmit = () => {
    setIsLoading(true);
    handleSubmit();
    setIsLoading(false);
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
          <FormControl sx={{ width: '600px' }}>
            <Stack gap={2}>
              <Stack>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChangeGender}
                >
                  <MenuItem value={0}>Male</MenuItem>
                  <MenuItem value={1}>Female</MenuItem>
                </Select>
              </Stack>
              <TextField label="Age" variant="outlined" value={age} onChange={handleChangeAge} type="number" />
              <TextField label="Salary" variant="outlined" value={salary} onChange={handleChangeSalary} />
            </Stack>
            <Stack py={2}>
              <Button disabled={isLoading} variant="contained" onClick={onSubmit}>
                Submit
              </Button>
            </Stack>
          </FormControl>
        </Stack>
      </Box>
    </Stack>
  );
};
