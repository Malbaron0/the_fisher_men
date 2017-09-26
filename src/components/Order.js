import React from 'react';

class Order extends React.Component {
    render() {
        const {order, fishes} = this.props; 
        const orderIds = Object.keys(order);

        return (
            <div className="order-wrap">
                <h2>Your Order</h2>
            </div>
        )
    }
}

export default Order;