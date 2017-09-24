import React from 'react';


class FishForm extends React.Component {
    constructor(){
        super();
        this.createFish = this.createFish.bind(this);
    }
    
    createFish(event) {
        event.preventDefault();
        console.log('Making some fish');
        
        //this.name/price/status/desc/image are references to input elements
        const fish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value,
        }

        this.props.addFish(fish);
        this.fisForm.reset();
    }

    

    render() {
        return (
            <form ref = {input => this.fisForm = input} className="fish-edit" onSubmit = {this.createFish}>
                <input ref = {input => this.name = input} type="text" placeholder="Fish Name" />
                <input ref = {input => this.price = input} type="text" placeholder="Fish Price" />
                <select ref = {input => this.status = input}>
                    <option value="avaliable">Fresh!</option>
                    <option value="unavaliable">Sold Out!</option>
                </select>
                <textarea ref = {input => this.desc = input} placeholder="Fish Desc"></textarea>
                <input ref = {input => this.image = input} type="text" placeholder="Fish Image" />
                <button type="submit">+ Add Item</button>

            </form>
        )
    }

}

export default FishForm;