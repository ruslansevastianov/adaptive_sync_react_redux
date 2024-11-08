import React, { useState, useEffect, useRef } from "react";
import './style.css';


const Dropdown = ({list, selected, setSelected }) => {

    let myRef = useRef();

    useEffect(()=>{
        
        document.addEventListener('click', (event)=>{

            if(myRef.current?.contains(event.target)){
                return;
            }
            setIsOpen(false);
        },{capture:true})
    },[])


    const [isOpen, setIsOpen] = useState(false); // открытый или закрытый блок dropdown-content

    let openedClosed = `dropdown-content ${ isOpen  ? ' show' :  ''}`; // переменная, которая содержит класс блока dropdown-content

   
    let listType = list.map((item)=>{
        // if(item.title === selected.title){  return null } // если нужно убрать дублирование и убрал  value = {item.value}
            return <div onClick={()=>{setSelected(item)}} className= 'itemBlock'><div className= {`arrowSelectedValue ${selected.title === item.title ? ' showArrowSelectedValue' : ''}`} ></div>  {item.title}</div>
    })

    return(
        <div className="dropdown-block-main">
                <p>Select Type</p>                    
            <div 
                ref={myRef}
                className="dropdown-block"
                onClick={()=>{ setIsOpen(!isOpen)}}
            >
                <div className="dropdown-header" >{ selected.title} <div className="arrowSelectType"></div></div>
                <div className={openedClosed}>
                    {listType}
                </div>
            </div>
        </div>
    )
}

export default Dropdown;