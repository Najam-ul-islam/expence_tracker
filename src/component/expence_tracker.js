import React from 'react';
import '../App.css';

function Title(props){

    return(
        <div className="container">
            <h1>Expense Tracker</h1>
            <hr></hr>
                <div className="balance">
                    <h3>Total Balance</h3>
                    <h2>${props.balance}</h2>
                </div>
                
        </div>
    );
}

export default Title;
