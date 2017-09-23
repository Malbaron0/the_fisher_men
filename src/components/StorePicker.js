import React from 'react'
import {getFunName} from './../helpers';


class StorePicker extends React.Component {
    
    constructor(props) {
        super(props);
        this.gotToStore = this.gotToStore.bind(this);
    }

    gotToStore(event) {
        event.preventDefault();
        const storeId = this.storeInput.value;
        this.props.history.push(`/store/${storeId}`); //navigate to the passed in path
        
    }


    render() {
        return(
            <form className="store-selector" onSubmit={this.gotToStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder = "Store Name" defaultValue = {getFunName()} ref = {input => this.storeInput = input}/>
                <button type="submit">Visit Store →</button>
            </form>
        );
    }
}

export default StorePicker;