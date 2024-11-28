import axios from 'axios';

export const getResult = async (url) => {
    return await axios
        .post(`http://127.0.0.1:5000/api/v1/phishingURL`, { url })
        .then(function (response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};
