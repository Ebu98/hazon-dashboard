import axios from "axios";
import { baseURL } from "../baseurl/api";
import { createContext, useEffect, useState } from "react";
import { TRANSACTIONS } from "../components/transactionData";
import { INVESTMENTDATA } from "../components/investmentData";

export const GlobalContext = createContext({});

const ComponentProvider = ({ children }) => {
  const [account, setCount] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [invest, setInvest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const fetchAccountBalance = async () => {
    try {
      const response = await axios.get(`${baseURL}/posts`);
      setCount(response.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAccountBalance();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(TRANSACTIONS);
      setTransactions(response.config.url);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
 
  const fetchInvestments = async () => {
    try {
      const response = await axios.get(INVESTMENTDATA);
      setInvest(response.config.url);
    //   console.log(response)
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        account,
        transactions,
        invest,
        loading,
        error,
        openSidebarToggle,
        OpenSidebar,
        fetchTransactions,
        fetchInvestments,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ComponentProvider;
