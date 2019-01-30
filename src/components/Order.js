import React from 'react';
import { formatPrice } from '../helpers';
import CSSTransitionGroup from 'react-addons-css-transition-group'; //easy way to perform CSS transitions and animations when a React component enters or leaves the DOM
import { throws } from 'assert';

class Order extends React.Component {
    constructor() {
        super();
        this.renderOrder = this.renderOrder.bind(this);
    }


    componentDidMount () {

    }
    renderOrder(key) {
        const fish = this.props.fishies[key];
        const count = this.props.order[key];
        const removeButton = <button className="warning" onClick={() => this.props.removeOrder(key)}>&times;</button>

        if (!fish || fish.status === 'unavailable') {
            return <li key={key}>{removeButton}Sorry, {fish ? fish.name : 'fish'} is no longer available</li>
        }

        return (

            <li key={key}>
                <span>{removeButton} {count}lbs {fish.name}</span>
                <span className="price">{formatPrice((count * fish.price))}</span>
            </li>
        )
    }

    render() {
        const { order, fishies } = this.props;
        const orderIds = Object.keys(order);
        let fullCount = 0;
        
        const total = orderIds.reduce((prev, key) => {
            const fish = fishies[key];
            const count = order[key];
            fullCount = fullCount + count;
            const isAvailable = fish && fish.status === 'available';

            if (isAvailable) {
                return prev + (count * fish.price || 0);
            }

            return prev;

        }, 0);

        return (
            <div className="order-wrap">
                <h3>Your Order</h3>

                <CSSTransitionGroup className="order"
                    component="ul"
                    transitionName="order"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>

                    {orderIds.map(key => this.renderOrder(key))}
                    <li className="total">
                        <strong>Total: {formatPrice(total)}</strong>
                    </li>
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default Order;