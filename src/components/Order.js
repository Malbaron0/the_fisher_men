import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
    constructor(){
        super();
        this.renderOrder = this.renderOrder.bind(this);
    }


    renderOrder(key) {
        const fish = this.props.fishies[key];
        const count = this.props.order[key];

        if (!fish || fish.status === 'unavailable') {
            return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available</li>
        }

        return (

            <li key={key}>
                <span>{count}lbs {fish.name}</span>
                <span className="price">{ formatPrice((count * fish.price))}</span>
            </li>
        )
    }

    render() {
        const { order, fishies } = this.props;
        const orderIds = Object.keys(order);

        const total = orderIds.reduce((prev, key) => {
            const fish = fishies[key];
            const count = order[key];
            const isAvailable = fish && fish.status === 'available';

            if (isAvailable) {
                return prev + (count * fish.price || 0);
            }

            return prev;

        }, 0);

        return (
            <div className="order-wrap">
                <h2>Your Order</h2>
                <ul className="order">
                    {orderIds.map(key => this.renderOrder(key))}
                    <li className="total">
                        <strong>Total: {formatPrice(total)}</strong>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Order;