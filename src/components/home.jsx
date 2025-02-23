import React from "react";
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

function Home() {
  const data = [
    { name: "Stocks", value: 5000 },
    { name: "Bonds", value: 3000 },
    { name: "Real Estate", value: 2500 },
  ];

  const transactions = [
    {
      id: 1,
      type: "Credit",
      amount: 2000,
      date: "2025-02-15",
      description: "Deposited for one month",
    },
    {
      id: 2,
      type: "Debit",
      amount: 500,
      date: "2025-02-17",
      description: "Deposited for one month",
    },
    {
      id: 3,
      type: "Credit",
      amount: 3000,
      date: "2025-02-18",
      description: "Deposited for one month",
    },
  ];

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
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Investment Summary</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
            {/* <Bar dataKey="value" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>

        <div className="card-transaction">
          <h2> Recent transactions </h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Descritpion</th>
                <th>Amounts</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="">
                  <td>{tx.date}</td>
                  <td>{tx.description}</td>

                  <td
                    className={
                      tx.type === "Withdrawal"
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
          </table>
        </div>
      </div>
    </main>
  );
}

export default Home;
