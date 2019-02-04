import React from 'react';
import FishForm from './FishForm';

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
        this.authenticate = this.authenticate.bind(this);
        this.authHandler = this.authHandler.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            uid: null,
            owner: null

        }
    }

    // componentDidMount() {        
    //     //stackoverflow.com/a/20279485/3979621
    //     base.initializedApp.firebase_.auth().onAuthStateChanged(user => {
    //         if(user){
    //             this.authHandler(user);
    //         }
    //     });
    // }

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

    authenticate(provider) {
        // firebase.auth().signInWithPopup(provider).then(authData => {
        //     this.authHandler(authData.user);
        // }).catch(error => {
        //     console.log(error);
        // });
    }

    //call this callback once user has signed in successfully
    authHandler(authData) {
        //get all information of current store
        // const storeRef = base.initializedApp.firebase_.database().ref(this.props.storeId);

        // //find the store in firebase
        // storeRef.once('value', (snapshot) => {
        //     const data = snapshot.val() || {};

        //     //clain it as your own if there is no owner
        //     if (!data.owner) {
        //         storeRef.set({
        //             owner: authData.uid
        //         });
        //     }

        //     this.setState({
        //         uid: authData.uid,
        //         owner: data.owner || authData.uid
        //     })
        // });

    }

    logout () {
        // base.initializedApp.firebase_.auth().signOut().then(() => {
        //     this.setState({
        //         uid: null
        //     })
        //   }, (error) => {
        //     // An error happened.
        //   });
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
                <textarea onChange={e => this.handleChange(e, key)} name="desc"  value={fish.desc} placeholder="Fish Desc"></textarea>
                <input onChange={e => this.handleChange(e, key)} name="image"  value={fish.image} type="text" placeholder="Fish Image" />
                <button className="warning" onClick={() => this.props.removeFish(key)}>Remove Item</button>
            </div>
        );
    }

    renderLogin() {
        // return (
        //     <nav className="login">
        //         <h2>Inventory</h2>
        //         <button className="github" onClick={() => this.authenticate(new firebase.auth.GithubAuthProvider())}>Log using Github</button>
        //         <button className="facebook" onClick={() => this.authenticate(new firebase.auth.FacebookAuthProvider())}>Log using Facebook</button>
        //     </nav>
        // )
    }


    render() {
        const logout = <button onClick = {this.logout}>Log Out</button>

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