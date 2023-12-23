
/* 
    RTK Query:  Redux Toolkit Query
        Advanced data fetching and caching tool
*/

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseURI = "http://localhost:3001";


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseURI}),
    endpoints: builder => ({
        // get categories
        getCategories: builder.query({
            // GET Request: 'http://localhost:3001/api/categories'
            query: () => '/api/categories',
            providesTags: ['categories']
        }),

        // get labels
        getLabels: builder.query({
            // GET Request: 'http://localhost:3001/api/labels'
            query: () => '/api/labels',
            providesTags: ['transaction']
        }),

        // add new Transaction
        addTransaction: builder.mutation({
            // POST Request: 'http://localhost:3001/api/transaction'
            query: (initialTransaction) => ({
                url: '/api/transaction',
                method: "POST",
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),

        // delete record
        deleteTransaction: builder.mutation({
            // DELETE Request: 'http://localhost:3001/api/transaction'
            query: (recordid) => ({
                url: '/api/transaction',
                method: "DELETE",
                body: recordid
            }),
            invalidatesTags: ['transaction']
        })
    })
});



export default apiSlice;

