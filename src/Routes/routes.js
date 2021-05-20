import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    );
}