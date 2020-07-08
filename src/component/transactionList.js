import React from 'react'
import '../App.css';
export const TransactionList = () => {
    return (
        <>
          <h3>History</h3>  
          <ul className="list" id="list">
              <li className="minus">
                  Cash <span>$400</span><button className="delete-btn">X</button>
              </li>
              <li className="minus">
                  Book <span>$100</span><button className="delete-btn">X</button>
              </li>
              <li className="minus">
                  Lays <span>$50</span><button className="delete-btn">X</button>
              </li>
          </ul>
        </>
    );
}
