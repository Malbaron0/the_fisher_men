import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    constructor(){
        super();
        
        //initial state
        this.state = {
            fishies: {},
            order: {}
        };

        this.addFish = this.addFish.bind(this);
    }

    addFish(fish){
        //clone state -- reason being for performance/avoiding accidently updating a couple of states causeing racing issues
        const fishies = {...this.state.fishies};
        //using current timestamp as key for new fish
        const timeStamp = Date.now(); 
        fishies[`fishes-${timeStamp}`] = fish;
        //set state
        this.setState({fishies});

    }


    render() {
        return (
            <div className="the-fisher-men">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Order />
                <Inventory addFish = {this.addFish}/>
            </div>
        )
    }
}

export default App;