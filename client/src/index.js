import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import User from './user/user';
import Book from './book/book';
import Category from './category/category';
import registerServiceWorker from './registerServiceWorker';

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>,
      <Route exact path="/users" component={User}/>
      <Route exact path="/books" component={Book}/>
      <Route exact path="/categories" component={Category}/>
    </Switch>
  </BrowserRouter>,
   document.getElementById('root')
);

registerServiceWorker();
