import React from "react";
import './style.css';
import { connect } from "react-redux";
import Del from './images/del.svg';
import Edit from './images/edit.svg';
import View from './images/view.svg'
import { selectCustomer, deleteCustomer, selectEditCustomer } from '../actions';



class TransactionsList extends React.Component{
    constructor(){
        super();
    }

    rendList(){
        const { list, selectCustomer , setIsOpenInfo, deleteCustomer, setIsOpenEdit, selectEditCustomer} = this.props;

        return list.map((item) => { 
            return(
                <div className="raw">
                    <div className="item tmp">{ item.firstName} {item.secondName}</div>
                    <div className="item no-item">{ item.type }</div>
                    <div className="item no-item">{ item.status }</div>
                    <div className="item no-item">{ item.amount }</div>
                    <div className="item">
                        <div className="icon-block">
                            <img 
                                src={ View } 
                                onClick={() => {
                                    selectCustomer(item);
                                    setIsOpenInfo(true);
                                    }}/>
                            <img
                                src={ Edit }
                                onClick={()=>{
                                    setIsOpenEdit(true);
                                    selectEditCustomer(item);
                                    
                                }}
                                />
                            <img 
                                src={ Del }
                                onClick={()=>{
                                    deleteCustomer(item);                                   
                                }}/>
                            </div>
                        </div>                
                </div>
            )
         })
    }


    render(){

        return (
            <div className=  {this.props.isOpen || this.props.isOpenEdit ? 'notShowTransaction-list' : 'transaction-list'} >
                    <div className="block-header-list">
                        <div className="headerNameList tmp">FullName</div>
                        <div className="headerNameList">Type</div>
                        <div className="headerNameList">Status</div>
                        <div className="headerNameList">Amount</div>
                        <div className="headerNameList">Action</div>
                    </div> 
                { this.rendList() }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.transactionsList
})

export default connect(mapStateToProps,{
    selectCustomer,
    deleteCustomer,
    selectEditCustomer
})(TransactionsList)