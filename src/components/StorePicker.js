import React from 'react';
import {getFunName} from './../helpers';

class StorePicker extends React.Component {

    gotToStore(event) {
        event.preventDefault();
        console.log('Url changed');
    }


    render() {
        return(
            <form className="store-selector" onSubmit={this.gotToStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder = "Store Name" defaultValue = {getFunName()} ref = {input}/>
                <button type="submit">Visit Store →</button>
            </form>
        );
    }
}

export default StorePicker;