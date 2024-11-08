import React, {useState} from "react";
import './style.css';
import TransactionsList from '../transactionsList';
import AddCustomer from '../addCustomer'
import CustomerInfo from '../customerInfo';
import EditCustomer from "../customerEdit";



const TransactionBlock = () => {

// создаем здесь конфиги, чтобы они были доступны в Компонентах AddCustomer и EditCustomer
let configForDropdown = [
    {title: 'A'},
    {title: 'B'},
    {title: 'C'},
    {title: 'D'},
  ]

  let configForRadioButton = [
    {title: 'Active', value: 'active', name: 'status', selected: true},
    {title: 'Seldom', value: 'seldom', name: 'status', selected: false},
    {title: 'Remove', value: 'remove', name: 'status', selected: false},
  ]


    const [isOpen, setIsOpen] = useState(false); // подъем состояния из компонента AddCustomer, чтобы была возможность управлять откр. закр. этого Компонента
    let openedClosed = ` ${isOpen ? 'addCustomer-block' : 'notShow'}`;

    const [isOpenInfo, setIsOpenInfo] = useState(false); // подъем состояния из компонента CustomerInfo, чтобы была возможность управлять откр. закр. этого Компонента
    let openedClosedInfo = `${isOpenInfo ? 'customerInfo-block': 'notShow'}`;

    const [isOpenEdit, setIsOpenEdit] = useState(false);  //подъем состояния из компонента EditCustomer, чтобы была возможность управлять откр. закр. этого Компонента
    let openedClosedEdit = `${isOpenEdit ? 'editCustomer-block' : 'notShow'}`

    const [selected, setSelected] = useState(configForDropdown[0]);// поднятие состояние для выбранного элемента из Компонента Dropdown




    return(
        <div className="transactionBlock">
          <div className="title-add-block-header">Customers</div>
                <div 
                    className="add-block-header"
                    onClick={()=>{
                        setIsOpen(true);
                    }}
                    >Add Customer</div>
                    <div className="line-add-block-header"></div>
                <TransactionsList  setIsOpenInfo = {setIsOpenInfo} setIsOpenEdit={setIsOpenEdit} isOpen = {isOpen} isOpenEdit={isOpenEdit}/> 
                <AddCustomer setIsOpen = {setIsOpen} openedClosed = {openedClosed} configForDropdown = {configForDropdown} configForRadioButton = {configForRadioButton} selected = {selected} setSelected = {setSelected}/> 
                <CustomerInfo setIsOpenInfo = {setIsOpenInfo} openedClosedInfo = {openedClosedInfo} />
                <EditCustomer configForDropdown = {configForDropdown} configForRadioButton = {configForRadioButton} setIsOpenEdit = {setIsOpenEdit} openedClosedEdit = {openedClosedEdit}/>
        </div>
    )
}

export default TransactionBlock;