import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
    render() {
        const { details, keyIndex, addToOrder } = this.props;
        const isAvaliable = details.status === 'available';
        const buttonText = isAvaliable ? 'Add To Cart' : 'Sold out! :(';
        
        return (
            <li className="menu-fish">
                <img src={details.image} alt={details.name} />
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>

                <button onClick={() => addToOrder(keyIndex)} disabled={!isAvaliable}>{buttonText}</button>
            </li>
        )
    }
}

export default Fish;