import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Miss, Switch } from 'react-router-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import './css/style.css';
import NotFound from './components/NotFound';



const Main = () => {
    
    //for github pages
    const repo = `/${window.location.pathname.split('/')[1]}`;
    
    return (
        <BrowserRouter basename = {repo}>
            <Switch>
                <Route exact path='/' component={StorePicker} />
                <Route path='/store/:storeId' component={App} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}





ReactDOM.render(<Main />, document.querySelector('#main'));

//import registerServiceWorker from './registerServiceWorker';

//registerServiceWorker();
