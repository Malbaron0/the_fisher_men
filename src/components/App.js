import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    constructor() {
        super();

        //initial state
        this.state = {
            fishies: {},
            order: {}
        };

        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
    }

    addFish(fish) {
        //clone state -- reason being for performance/avoiding accidently updating a couple of states causeing racing issues
        const fishies = { ...this.state.fishies };
        //using current timestamp as key for new fish
        const timeStamp = Date.now();
        fishies[`fishes-${timeStamp}`] = fish;
        //set state
        this.setState({ fishies });

    }

    loadSamples() {
        this.setState({
            fishies: sampleFishes
        });
    }

    render() {
        let fishList = Object.keys(this.state.fishies)
                             .map(key => <Fish key = {key} details = {this.state.fishies[key]}/>)

        return (
            <div className="the-fisher-men">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="list-of-fish">{fishList}</ul>
                </div>
                <Order />
                <Inventory loadSamples={this.loadSamples} addFish={this.addFish} />
            </div>
        )
    }
}

export default App;