import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'isomorphic-fetch';
import es6Promise from 'es6-promise';
es6Promise.polyfill();


import Home from './Home/home';
import GoodbyeWorld from './goodbye';
import BlogDetails from './BlogDetails/BlogDetails';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route path="/blog/:id" component={BlogDetails} />
                        <Route exact path="/" component={Home} />
                        <Route path="/goodbye" component={GoodbyeWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;