import { useState } from "react";
import { Card, Button, Table, Form } from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function Dashboard() {
  const [income, setIncome] = useState(5000);
  const [expenses, setExpenses] = useState(1200);
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2025-02-20", description: "Groceries", amount: -50 },
    { id: 2, date: "2025-02-19", description: "Transport", amount: -20 },
    { id: 3, date: "2025-02-18", description: "Salary", amount: 2000 },
  ]);

  const balance = income - expenses;
  const [newDesc, setNewDesc] = useState("");
  const [newAmount, setNewAmount] = useState("");

  const addTransaction = () => {
    if (!newDesc || !newAmount) return;
    const amount = parseFloat(newAmount);
    setTransactions([
      ...transactions,
      { id: transactions.length + 1, date: new Date().toISOString().split("T")[0], description: newDesc, amount },
    ]);

    if (amount > 0) setIncome(income + amount);
    else setExpenses(expenses + Math.abs(amount));

    setNewDesc("");
    setNewAmount("");
  };

  const deleteTransaction = (id, amount) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
    if (amount > 0) setIncome(income - amount);
    else setExpenses(expenses - Math.abs(amount));
  };

  const data = [
    { name: "Income", value: income, color: "#28a745" },
    { name: "Expenses", value: expenses, color: "#dc3545" },
  ];

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <Card className="p-3 text-center bg-light">
            <h4>Total Income</h4>
            <p>${income}</p>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="p-3 text-center bg-light">
            <h4>Total Expenses</h4>
            <p>${expenses}</p>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="p-3 text-center bg-light">
            <h4>Balance</h4>
            <p>${balance}</p>
          </Card>
        </div>
      </div>

      <div className="mt-4">
        <h4>Add Transaction</h4>
        <Form className="d-flex gap-2">
          <Form.Control
            type="text"
            placeholder="Description"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
          <Form.Control
            type="number"
            placeholder="Amount (+ for income, - for expense)"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
          />
          <Button variant="primary" onClick={addTransaction}>
            Add
          </Button>
        </Form>
      </div>

      <div className="mt-4">
        <h4>Recent Transactions</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td>{tx.date}</td>
                <td>{tx.description}</td>
                <td className={tx.amount < 0 ? "text-danger" : "text-success"}>
                  ${tx.amount}
                </td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => deleteTransaction(tx.id, tx.amount)}>
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="mt-4">
        <h4>Finance Overview</h4>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
