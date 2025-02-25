// import axios from 'axios';
// import { fetchTransactions } from './yourModule'; // Replace with the actual file path

// import { useContext } from 'react';
// import { GlobalContext } from '../context/datacontext';
// import { parse } from 'node-html-parser';
// const useContext = require('react');
// const axios = require('axios');
// const GlobalContext = require('../context/datacontext');

// jest.mock('axios');

// describe('fetchTransactions', () => {
//   let setTransactions, setError, setLoading;
//   const {fetchTransactions} = useContext(GlobalContext)
//   beforeEach(() => {
//     setTransactions = jest.fn();
//     setError = jest.fn();
//     setLoading = jest.fn();
//   });

//   it('should fetch transactions successfully', async () => {
//     const mockResponse = { config: { url: 'mocked_url' } };
//     axios.get.mockResolvedValue(mockResponse);

//     await fetchTransactions();

//     expect(axios.get).toHaveBeenCalledWith(TRANSACTIONS);
//     expect(setTransactions).toHaveBeenCalledWith('mocked_url');
//     expect(setLoading).toHaveBeenCalledWith(false);
//   });

//   it('should handle errors correctly', async () => {
//     const mockError = new Error('Network Error');
//     axios.get.mockRejectedValue(mockError);

//     await fetchTransactions();

//     expect(setError).toHaveBeenCalledWith(mockError);
//     expect(setLoading).toHaveBeenCalledWith(false);
//   });
// });
