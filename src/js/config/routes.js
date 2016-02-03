/**
 * Created by tedz on 2/2/2016.
 */
import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

module.exports = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
    </Route>
);