import axios from 'axios';

export const getResult = async (
  age,
  gender,
  category,
  season,
  purchaseAmount,
  reviewRating,
  subscriptionStatus,
  discountApplied,
  previousPurchases,
  frequencyOfPurchases,
) => {
  return await axios
    .post(`http://127.0.0.1:5000/api/v1/predict`, {
      age,
      gender,
      category,
      season,
      purchaseAmount,
      reviewRating,
      subscriptionStatus,
      discountApplied,
      previousPurchases,
      frequencyOfPurchases,
    })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error.response;
    });
};
