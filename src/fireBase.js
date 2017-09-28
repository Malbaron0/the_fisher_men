import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDd7iXb-4dBu3vwRrOZIcDXVudU7TpU178",
    authDomain: "the-fisher-men-malyar-baron.firebaseapp.com",
    databaseURL: "https://the-fisher-men-malyar-baron.firebaseio.com",
});

const base = Rebase.createClass(app.database());

export default base;