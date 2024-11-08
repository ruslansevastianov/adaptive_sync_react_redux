import React from "react";
import './style.css';


const RadioButton = ({ optionsList, setValue, value }) => {


    let listRadioButton = optionsList.map((item)=> {
        return (
            <label>
                <input type="radio" name={item.name} value={item.value} defaultChecked = {item.selected}/>
                {item.title}
                <div className="checkmark"></div>
            </label>
        )
    })


    return(
        
        <div className="radio">
            <p>Status</p>
            <div 
                className="block-radio"
                onChange={(event)=>{setValue(event.target.value)}}>
            {listRadioButton}
            </div>
        </div>
     
    )
}

export default RadioButton;