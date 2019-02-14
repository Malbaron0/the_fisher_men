import React from 'react';
import { formatPrice } from '../helpers';
class Fish extends React.Component {
    render() {
        const { details, keyIndex, addToOrder } = this.props;
        const isAvaliable = details.status === 'available';
        const buttonText = isAvaliable ? 'Add To Cart' : 'Sold out! :(';
        const image = require(`../css/images/${details.image}`);
        console.log(image);
        return (
            <div className="menu-fish">
                <div>
                    <img src={image} alt={details.name} />
                </div>
                <div className="fish-name">                    
                        {details.name}
                        <span className="price"><span>$</span>{formatPrice(details.price)}</span>
                </div>
                <div className = "fish-desc">
                    <p>{details.desc}</p>
                </div>
                <button onClick={() => addToOrder(keyIndex)} disabled={!isAvaliable}>{buttonText}</button>
            </div>
        )
    }
}

export default Fish;