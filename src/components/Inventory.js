import React from 'react';
import FishForm from './FishForm';


class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
    }

    //need to update state with this method
    handleChange(e, key){
        const fish = this.props.fishies[key];

        const updateFish = {
            ...fish,
            //change whatever changed
            [e.target.name]: e.target.value
        }

        this.props.updateFish(key, updateFish);

    }

    renderInventory(key) {
        const fish = this.props.fishies[key];
        return (
            <div className="fish-edit" key={key}>
                <input onChange={e => this.handleChange(e, key)} name="name" value={fish.name} type="text" placeholder="Fish Name" />
                <input onChange={e => this.handleChange(e, key)} name="price" value={fish.price} type="text" placeholder="Fish Price" />
                <select onChange={e => this.handleChange(e, key)} type="text" name="status" value={fish.status} placeholder="Fish Status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea onChange={e => this.handleChange(e, key)} name="desc" ref={input => this.desc = input} placeholder="Fish Desc"></textarea>
                <input onChange={e => this.handleChange(e, key)} name="image" ref={input => this.image = input} type="text" placeholder="Fish Image" />
                <button className = "warning" onClick = {() => this.props.removeFish(key)}>Remove Item</button>
            </div>
        );
    }


    render() {
        return (
            <div>
                <h2>Inventory</h2>
                {Object.keys(this.props.fishies).map(this.renderInventory)}
                <FishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSamples}>Load Smaple Fishes</button>
            </div>
        );
    }
}

export default Inventory;