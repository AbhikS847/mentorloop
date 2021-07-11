import React from 'react';
import './style.css';
import AllUsers from './components/AllUsers';
import CreateUsers from './components/CreateUsers';
import UpdateUsers from './components/UpdateUsers';
import RemoveUsers from './components/RemoveUsers';
import {BrowserRouter,Route} from 'react-router-dom';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <BrowserRouter>
        <Navigation />
            <Route exact path="/" component={AllUsers}></Route>
            <Route path="/create" component={CreateUsers}></Route>
            <Route path="/update" component={UpdateUsers}></Route>
            <Route path="/remove" component={RemoveUsers}></Route>
        </BrowserRouter>
    )
}

export default App;
