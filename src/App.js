import React, {useState} from 'react';
import {IncomeExpense} from './component/incomeExpense.js';
import {Header} from './component/header';
import {Balance} from './component/balance.js';
import {TransactionList} from './component/transactionList.js';
import {AddTransaction} from './component/AddTransaction.js';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
