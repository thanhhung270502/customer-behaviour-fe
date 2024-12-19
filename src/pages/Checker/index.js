import React from 'react';
import { useState } from 'react';
import { Box, Typography, FormControl, TextField, Stack, Select, MenuItem, Button, Grid } from '@mui/material';
import {
  CATEGORY,
  CATEGORY_INFO,
  FREQUENCY,
  FREQUENCY_INFO,
  SEASON,
  SEASON_INFO,
  SHORT_QUESTION,
  SHORT_QUESTION_INFO,
} from '../../constants/common';
import { getResult } from '../../api';

export const Checker = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [category, setCategory] = useState();
  const [season, setSeason] = useState();
  const [purchaseAmount, setPurchaseAmount] = useState();
  const [reviewRating, setReviewRating] = useState();
  const [subscriptionStatus, setSubscriptionStatus] = useState();
  const [discountApplied, setDiscountApplied] = useState();
  const [previousPurchases, setPreviousPurchases] = useState();
  const [frequencyOfPurchases, setFrequencyOfPurchases] = useState();

  const [isPotentialCustomers, setIsPotentialCustomers] = useState();

  const getResultData = async () => {
    const ageInt = parseInt(age, 10);
    const genderInt = parseInt(gender, 10);
    const categoryInt = parseInt(category, 10);
    const seasonInt = parseInt(season, 10);
    const purchaseAmountInt = parseInt(purchaseAmount, 10);
    const reviewRatingInt = parseInt(reviewRating, 10);
    const subscriptionStatusInt = parseInt(subscriptionStatus, 10);
    const discountAppliedInt = parseInt(discountApplied, 10);
    const previousPurchasesInt = parseInt(previousPurchases, 10);
    const frequencyOfPurchasesInt = parseInt(frequencyOfPurchases, 10);

    await getResult(
      ageInt,
      genderInt,
      categoryInt,
      seasonInt,
      purchaseAmountInt,
      reviewRatingInt,
      subscriptionStatusInt,
      discountAppliedInt,
      previousPurchasesInt,
      frequencyOfPurchasesInt,
    ).then((data) => {
      console.log(data);

      if (data) {
        setIsPotentialCustomers(data.result);
        setIsLoading(false);
      }
    });
  };

  const onSubmit = async () => {
    setIsLoading(true);
    await getResultData();
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
          <FormControl>
            <Grid container spacing={4}>
              <Grid item lg={6} xs={12}>
                <Stack gap={2}>
                  {/* Age */}
                  <Stack>
                    <TextField
                      label="Age"
                      variant="outlined"
                      value={age}
                      onChange={(event) => setAge(event.target.value)}
                      type="number"
                    />
                  </Stack>
                  {/* Gender */}
                  <Stack>
                    <Box>Gender</Box>
                    <Select
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      value={gender}
                      onChange={(event) => setGender(event.target.value)}
                    >
                      <MenuItem value={0}>Male</MenuItem>
                      <MenuItem value={1}>Female</MenuItem>
                    </Select>
                  </Stack>
                  {/* Category */}
                  <Stack>
                    <Box>Category</Box>
                    <Select
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                    >
                      {Object.entries(CATEGORY).map(([a, b]) => (
                        <MenuItem value={CATEGORY_INFO[b].value} key={a}>
                          <Stack
                            sx={{ padding: '0.25rem 1rem', width: 'fit-content', borderRadius: '0.25rem' }}
                            fontWeight="bold"
                            bgcolor={CATEGORY_INFO[b].bgcolor}
                            color={CATEGORY_INFO[b].color}
                          >
                            {CATEGORY_INFO[b].label}
                          </Stack>
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>
                  {/* Purchase Amount (USD) */}
                  <Stack>
                    <TextField
                      label="Purchase Amount (USD)"
                      variant="outlined"
                      value={purchaseAmount}
                      onChange={(event) => setPurchaseAmount(event.target.value)}
                      type="number"
                    />
                  </Stack>
                  {/* Season */}
                  <Stack>
                    <Box>Season</Box>
                    <Select
                      id={season}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      value={season}
                      onChange={(event) => setSeason(event.target.value)}
                    >
                      {Object.entries(SEASON).map(([a, b]) => (
                        <MenuItem value={SEASON_INFO[b].value} key={a}>
                          <Stack
                            sx={{ padding: '0.25rem 1rem', width: 'fit-content', borderRadius: '0.25rem' }}
                            fontWeight="bold"
                            bgcolor={SEASON_INFO[b].bgcolor}
                            color={SEASON_INFO[b].color}
                          >
                            {SEASON_INFO[b].label}
                          </Stack>
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>
                  {/* Review Rating */}
                  <Stack>
                    <TextField
                      label="Review Rating"
                      variant="outlined"
                      value={reviewRating}
                      onChange={(event) => setReviewRating(event.target.value)}
                      type="number"
                    />
                  </Stack>
                  {/* Subscription Status */}
                  <Stack>
                    <Box>Subscription Status</Box>
                    <Select
                      id="subscriptionStatus"
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      value={subscriptionStatus}
                      onChange={(event) => setSubscriptionStatus(event.target.value)}
                    >
                      {Object.entries(SHORT_QUESTION).map(([a, b]) => (
                        <MenuItem value={SHORT_QUESTION_INFO[b].value} key={a}>
                          <Stack
                            sx={{ padding: '0.25rem 1rem', width: 'fit-content', borderRadius: '0.25rem' }}
                            fontWeight="bold"
                            bgcolor={SHORT_QUESTION_INFO[b].bgcolor}
                            color={SHORT_QUESTION_INFO[b].color}
                          >
                            {SHORT_QUESTION_INFO[b].label}
                          </Stack>
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>
                  {/* Discount Applied */}
                  <Stack>
                    <Box>Discount Applied</Box>
                    <Select
                      id="discountApplied"
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      value={discountApplied}
                      onChange={(event) => setDiscountApplied(event.target.value)}
                    >
                      {Object.entries(SHORT_QUESTION).map(([a, b]) => (
                        <MenuItem value={SHORT_QUESTION_INFO[b].value} key={a}>
                          <Stack
                            sx={{ padding: '0.25rem 1rem', width: 'fit-content', borderRadius: '0.25rem' }}
                            fontWeight="bold"
                            bgcolor={SHORT_QUESTION_INFO[b].bgcolor}
                            color={SHORT_QUESTION_INFO[b].color}
                          >
                            {SHORT_QUESTION_INFO[b].label}
                          </Stack>
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>
                  {/* Previous Purchases */}
                  <Stack>
                    <TextField
                      label="Review Rating"
                      variant="outlined"
                      value={previousPurchases}
                      onChange={(event) => setPreviousPurchases(event.target.value)}
                      type="number"
                    />
                  </Stack>
                  {/* Frequency of Purchases */}
                  <Stack>
                    <Box>Frequency of Purchases</Box>
                    <Select
                      id="frequencyOfPurchases"
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      value={frequencyOfPurchases}
                      onChange={(event) => setFrequencyOfPurchases(event.target.value)}
                    >
                      {Object.entries(FREQUENCY).map(([a, b]) => (
                        <MenuItem value={FREQUENCY_INFO[b].value} key={a}>
                          <Stack
                            sx={{ padding: '0.25rem 1rem', width: 'fit-content', borderRadius: '0.25rem' }}
                            fontWeight="bold"
                            bgcolor={FREQUENCY_INFO[b].bgcolor}
                            color={FREQUENCY_INFO[b].color}
                          >
                            {FREQUENCY_INFO[b].label}
                          </Stack>
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>

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
                  {isPotentialCustomers}
                </Stack>
              </Grid>
            </Grid>
          </FormControl>
        </Stack>
      </Box>
    </Stack>
  );
};
