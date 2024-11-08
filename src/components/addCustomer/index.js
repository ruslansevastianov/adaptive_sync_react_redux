import React, {useState} from "react";
import './style.css';
import Dropdown from '../dropdown';
import RadioButton from '../radioButton';
import { connect } from "react-redux";
import {addCustomer} from '../actions';
import { v4 } from 'uuid';


const AddCustomer = ({setIsOpen, openedClosed, addCustomer, configForDropdown, configForRadioButton, selected, setSelected}) => {

    const [name, setName] = useState('');
    const [sername, setSername] = useState('');
    
    const [value, setValue] = useState(configForRadioButton[0].title); // поднятие состояния выбранного значения из Компонента RadioButton, невозможно состояние radibutton, нужно как-то onChange 
    const [amount, setAmount] = useState('');

    return(
        <div className={ openedClosed }>
            <div className="addBlockModal">
                <div className="addCustomer-header">
                    <p>Add Customer</p>
                    <div onClick={ ()=>{ 
                        setIsOpen(false);
                        setName('');
                        setSername('');
                        setSelected({title: 'A'})
               
                        setAmount('');
                    } } className="x" >X</div>
            </div>

            <div className="field-block">
                <div className="field">
                    <label>Name</label>
                    <input type="text"onChange={(event) => {setName(event.target.value)}} value={name} placeholder="name"/> 
                </div>
                <div className="field">
                    <label>Sername</label>
                    <input type="text" onChange={(event) => {setSername(event.target.value)}} value={sername} placeholder="sername"/>
                </div>
            </div>
        <Dropdown list = {configForDropdown} selected = {selected} setSelected={setSelected}/>
        <RadioButton optionsList = {configForRadioButton} setValue = {setValue} value={value}/>
        <div className="amount-block">
            <p>Amount</p>
            <input type="text" onChange={(event) => {setAmount(event.target.value)}} value={amount} placeholder="amount"/>
        </div>
        <button
            className="final-addBlock"
            disabled = { (!(name.length && sername.length  && amount.length) )}
            onClick={()=>{
                addCustomer(
                    { firstName: `${name}`, secondName: `${sername}`, type: `${selected.title}`, status: `${value}`, amount:  `${amount}`, id: `${v4()}`},
                );
                setIsOpen(false);
                setName('');
                setSername('');
                setSelected({title: 'A'});
               //radioButton состояние визуально не меняется, остается на старом onChange
                setAmount('');
            }}>Add Customer</button>
            </div>

        </div>
    )
}

export default connect(null, {
    addCustomer
})(AddCustomer);
