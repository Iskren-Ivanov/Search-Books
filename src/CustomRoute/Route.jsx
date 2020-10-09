import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Books from '../Components/Books/Books';
import Book from '../Components/Book/Book';

const MyRoute = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={Books} />
            <Route path="/book" component={Book} />
            <Redirect to="/" />
        </Switch>
    )
}

export default MyRoute;