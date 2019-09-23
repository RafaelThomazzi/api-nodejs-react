import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from "./pages/product"
import PostForm from './components/PostForm/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
            <Route path="/products/" component={PostForm} />
        </Switch>
    </BrowserRouter>
);

export default Routes;