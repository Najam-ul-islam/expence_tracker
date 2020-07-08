import React from 'react';
import '../App.css';

export const IncomeExpense = () => {
    return (
        <div style={{display: "inline-flex"}}>
            <div className="income-pluse" id="incomepluse">
                <h4>Income</h4>
                <p id="money-plus" className="money-plus" style={{color:"green"}}>+$0.00</p>
            </div>
            <div className="expense-minus" id="incomeminus">
                <h4>Expense</h4>
                <p id="money-minus" className="money-minus" style={{color:"red"}}>-$0.00</p>
            </div>
        </div>
    )
}
