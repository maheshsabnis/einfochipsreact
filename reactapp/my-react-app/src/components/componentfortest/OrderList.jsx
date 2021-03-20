import React from 'react'
import PropTypes from 'prop-types';
import OrderListOptionsComponent from './OrderListOptions';
function OrderListComponent(props){
    // store props locally
    const {options} = props;
    if(!options.length){
        return (
            <span className="empty">No Options are generated</span>
        );
    } else {
        return (
             <ol className="options">
               {
                   options.map((opt,idx)=>(
                       <OrderListOptionsComponent key={idx} value={opt}></OrderListOptionsComponent>
                   ))
               }
             </ol>
        );
    }
};

// create prop types

OrderListComponent.propTypes = {
    options: PropTypes.array
};

// default values for Props
OrderListComponent.defaultProps = {
    options:['James Bond', 'Jaso Bourn', 'Ethan Hunt', 'Indiana Jones', 'Jack Reacher', 'Jack Rayan']
};

export default OrderListComponent;