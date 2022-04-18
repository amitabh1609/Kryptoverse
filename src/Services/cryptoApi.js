import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'c6d8ce3033msh6d120f689acdd5dp1a0a14jsnd406e6673847',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url,headers: cryptoApiHeaders})

export const cryptoApi = createApi ({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
    })
});


export const {useGetCryptosQuery, useGetCryptoDetailsQuery} = cryptoApi;