import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../fireBase';

class App extends React.Component {
    constructor() {
        super();

        //initial state
        this.state = {
            fishies: {},
            order: {}
        };

        this.addFish = this.addFish.bind(this);
        this.updateFish = this.updateFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
    }

    //Lifecycle method
    componentWillMount() {
        //using firebase to store and sync the data (fish states) for this store
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishies`, { context: this, state: 'fishies' });

        //check local storage contains orders
        const localOrderStorage = localStorage.getItem(`order-${this.props.match.params.storeId}`);

        if (localOrderStorage) {
            //update order state
            this.setState({ order: JSON.parse(localOrderStorage) });
        }
    }

    //stop sync with database when switching to another store
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    //Hooking into this method to set our local storage to maintain orders
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem(`order-${this.props.match.params.storeId}`, JSON.stringify(nextState.order));
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

    updateFish(key, fish){
        const fishies = {...this.state.fishies};
        fishies[key] = fish;
        this.setState({fishies});
    }

    loadSamples() {
        this.setState({
            fishies: sampleFishes
        });
    }

    addToOrder(key) {
        //copy of state
        const order = { ...this.state.order };

        //update oe add new number of orderes
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }

    render() {
        let fishList = Object.keys(this.state.fishies)
            .map(key => <Fish key={key}
                details={this.state.fishies[key]}
                addToOrder={this.addToOrder}
                keyIndex={key} />)

        return (
            <div className="the-fisher-men">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="list-of-fish">{fishList}</ul>
                </div>
                <Order fishies={this.state.fishies} order={this.state.order} />
                <Inventory fishies={this.state.fishies} loadSamples={this.loadSamples} addFish={this.addFish} updateFish={this.updateFish}/>
            </div>
        )
    }
}

export default App;