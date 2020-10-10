const axios = require('axios');
const FAUNA_SECRET_KEY = "fnAD3Vtw8vACB33OqEVsxc3o7IEbvA3eL1HvBARx";
const url = "https://graphql.fauna.com/graphql";

module.exports = async (query, variables) => {
    const config = {
        url,
        method: 'POST',
        headers: { Authorization: `Bearer ${FAUNA_SECRET_KEY}` },
        data: { query, variables }
    }
    
    const { data: { data, error } } = await axios(config);
    if (error) {
        console.log(error);
        throw new Error('Something went wrong');
    }
    return data;
}