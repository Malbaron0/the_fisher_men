import React from 'react';
import FishForm from './FishForm';
import base from '../fireBase';
import * as firebase from "firebase";

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
        this.authenticate = this.authenticate.bind(this);
        this.state = {
            uid: null,
            owner: null

        }
    }

    //need to update state with this method
    handleChange(e, key) {
        const fish = this.props.fishies[key];

        const updateFish = {
            ...fish,
            //change whatever changed
            [e.target.name]: e.target.value
        }

        this.props.updateFish(key, updateFish);

    }

    authenticate(provider){
        var provider = new firebase.auth.FacebookAuthProvider();
        
        
        firebase.auth().signInWithPopup(provider).then(function(authData) {
            console.log(authData);
        }).catch(function(error) {
            console.log(error);
        });
    }

    //call this callback once user has signed in successfully
    authHandler(err, authData){
        if (err) throw err;

        console.log(authData);
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
                <button className="warning" onClick={() => this.props.removeFish(key)}>Remove Item</button>
            </div>
        );
    }

    renderLogin() {
        return (
            <nav className="login">
                <h2>Inventory</h2>
                <button className="github" onClick={() => this.authenticate("github")}>Log using Github</button>
                <button className="facebook" onClick={() => this.authenticate("facebook")}>Log using Facebook</button>
            </nav>
        )
    }


    render() {
        const logout = <button>Log Out</button>

        if (!this.state.uid) {
            return <div>{this.renderLogin()}</div>
        }

        //check if login user is the same as the store owner. 
        if (this.state.uid !== this.state.owner) {
            return (
                <div>
                    <p>Sorry you are not the owner of this store</p>
                    {logout}
                </div>
            )
        }

        return (
            <div>
                <h2>Inventory</h2>
                {logout}
                {Object.keys(this.props.fishies).map(this.renderInventory)}
                <FishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSamples}>Load Smaple Fishes</button>
            </div>
        );
    }
}

export default Inventory;