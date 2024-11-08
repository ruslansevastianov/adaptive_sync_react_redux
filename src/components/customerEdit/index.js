import React, {useState, useEffect} from "react";
import './style.css';
import Dropdown from '../dropdown';
import RadioButton from '../radioButton';
import { connect } from "react-redux";
import {editCustomer} from '../actions';

const EditCustomer = ({ configForDropdown, configForRadioButton, setIsOpenEdit, openedClosedEdit, selectEditCustomer, editCustomer}) => {

    const [name, setName] = useState('');
    const [sername, setSername] = useState('');
    const [selected, setSelected] = useState({title: selectEditCustomer.type}); // просто уст. это значение, а не из selectEditCustomer
    const [value, setValue] = useState(configForRadioButton[0].title); // просто уст. это значение, а не из selectEditCustomer
    const [amount, setAmount] = useState('');


// нам нужно на основе обновления  пропса selectEditCustomer, менять стейт 
useEffect(()=>{
     setSelected({title: selectEditCustomer.type});
     setName(selectEditCustomer.firstName);
     setSername(selectEditCustomer.secondName)    
     setAmount(selectEditCustomer.amount);
},[selectEditCustomer])


    return (
        <div className={openedClosedEdit}>
                <div className="editBlockModal">
                    <div className="editCustomer-header">
                        <p>Edit Customer</p>
                        <div
                            className="x" 
                            onClick={()=>{
                            setIsOpenEdit(false);
                    }}>X</div>
            </div>

            <div className="field-block">
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="edit name" 
                        value={name}
                        onChange={(event)=>{
                            setName(event.target.value);                            
                        }}/> 
                </div>
                <div className="field">
                    <label>Sername</label>
                    <input
                        type="text"
                        placeholder="edit sername"
                        value={sername}
                        onChange={(event)=>{
                            setSername(event.target.value)
                        }}/>
                </div>
            </div>
        <Dropdown list = { configForDropdown} selected = {selected} setSelected = {setSelected}/>
        <RadioButton optionsList = { configForRadioButton } value={value} setValue={setValue}/>
        <div className="amount-block">
            <p>Amount</p>
            <input
                type="text"
                placeholder="edit amount"
                value={amount}
                onChange={(event)=>{
                    setAmount(event.target.value);
                }}/>
        </div>
        <button
            className="final-editBlock"
            onClick={()=>{
                setIsOpenEdit(false);
                editCustomer({ firstName: `${name}`, secondName: `${sername}`, type: `${selected.title}`, status: `${value}`, amount:  `${amount}`, id: `${selectEditCustomer.id}`});
            }}>Save</button>

                </div>

        </div>
    )          
}

const mapStateToProps = (state)=>({
        selectEditCustomer: state.selectEditCustomer
})

export default connect(mapStateToProps,{
    editCustomer
})(EditCustomer);