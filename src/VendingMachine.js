import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Message from './Message';
import './VendingMachine.css';
import vendingMachineImg from "./VendingMachine.png";

class VendingMachine extends Component{
    render() {
        return (
            <div
            className='VendingMachine'
            style={{ backgroundImage: `url(${vendingMachineImg})` }}
          >
           <Message>
           <h1>Hi, I am a Vending Machine. What would you like to have?</h1>
           </Message>  
           <Message>
           <h1>
           <Link to="/cocacola">CocaCola</Link>
           </h1>
           <h1>
           <Link to="/freshfish">Fresh Fish</Link>
           </h1>
           <h1>
           <Link to="/lays">Lays</Link>
           </h1>
           </Message>

            </div>
        )
    }
}

export default VendingMachine;