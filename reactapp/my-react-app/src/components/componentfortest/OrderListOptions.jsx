import React from 'react';

function OrderListOptionsComponent(props){
    const {value} = props;

    return (
        <li className={value}>{value}</li>
    );
};

export default OrderListOptionsComponent;