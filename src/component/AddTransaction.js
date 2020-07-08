import React, {useState} from 'react'
import '../App.css';
export const AddTransaction = () => {
    // Using useState() hook 
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const Text = (props)=> {setText(props.target.value);};
    const Amount = (props)=> {setAmount(props.target.value);};

    return (
        <>
            <h3>Add New Transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label htmlfor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={Text} placeholder="Enter Text..."></input>
                </div>
                <div className="form-control">
                    <label htmlfor="amount">Amount(negative-expense, positive-amount)</label>
                    <input type="number" id="amount" value={amount}  onChange={Amount} placeholder="Enter Amount..."></input>
                </div>
                <button type="button" className="btn">Add Transaction</button>
            </form>
        </>
    )
}
