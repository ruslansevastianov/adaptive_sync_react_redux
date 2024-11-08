import React from "react";
import './style.css';
import { connect } from "react-redux";


const CustomerInfo = ({setIsOpenInfo, openedClosedInfo, customer}) => {

    return (
        <div className={openedClosedInfo}>
            <div className="infoBlockModal">
                <div className="info-header">
                    <p>Customer</p>
                    <div  className="closeInfoBlock" onClick={()=>{setIsOpenInfo(false)}}>X</div>
                </div>
                <div className="info-block">
                    <div>First Name: {  customer ? customer.firstName : ''  } </div>
                    <div>Last Name: {customer ? customer.secondName : ''}</div>
                    <div>Type: {customer ? customer.type : ''}</div>
                    <div>Status: {customer ? customer.status : ''}</div>
                    <div>Amount: {customer ? customer.amount : ''}</div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps =  (state) => {
    return{
        customer: state.selectedCustomer
    }
}

export default connect(mapStateToProps, null)(CustomerInfo);