import axios from "axios";
import { createContext, useState } from "react";
import { TRANSACTIONS } from "../components/transactionData";
import { INVESTMENTDATA } from "../components/investmentData";

export const GlobalContext = createContext({});

const ComponentProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [invest, setInvest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const fetchTransactions = async () => {
    try {
      setLoading(true)
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
      setLoading(true)
      const response = await axios.get(INVESTMENTDATA);
      setInvest(response.config.url);
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
        transactions,
        invest,
        loading,
        error,
        setTransactions,
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
