import React, { useContext, useEffect, useState } from "react";
import { BsFillArchiveFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { GlobalContext } from "../context/datacontext";

function Home() {
  const [balance, setBalance] = useState(12500);
  const [filter, setFilter] = useState("All"); 
  const { transactions, invest, fetchTransactions, fetchInvestments } =
    useContext(GlobalContext);

  useEffect(() => {
    fetchTransactions();
    fetchInvestments();
  }, []);
  
  const filteredTransactions = transactions.filter(
    (transaction) => filter === "All" || transaction.type === filter
  );

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Account Balance</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>#{balance.toLocaleString()}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Investment Summary</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>#1200</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={invest}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <div className="card-transaction">
          <label>Filter by Type: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
          <h2> Recent transactions </h2>
          <table>
            {filteredTransactions.length > 0 ? (
              <>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Descritpion</th>
                    <th>Amounts</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((tx) => (
                    <tr key={tx.id} className="">
                      <td>{tx.date}</td>
                      <td>{tx.description}</td>

                      <td
                        className={
                          tx.type === "credit"
                            ? "text-red-500"
                            : "text-green-500"
                        }
                      >
                        ${tx.amount.toLocaleString()}
                      </td>
                      <td>{tx.type}</td>
                    </tr>
                  ))}
                </tbody>
              </>
            ) : (
              <p>No transactions found</p>
            )}
          </table>
        </div>
      </div>
    </main>
  );
}

export default Home;
