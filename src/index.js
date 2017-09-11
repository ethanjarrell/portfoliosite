import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import Portfolio from './Components/Portfolio/Portfolio.js';
import Resume from './Components/Resume/Resume.js';
import Blog from './Components/Blog/Blog.js';
import GuestBook from './Components/GuestBook/GuestBook.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>
            <Switch>
              <Route exact path="/GuestBook" component={GuestBook} />
              <Route exact path="/" component={Home} />
              <Route exact path="/Portfolio" component={Portfolio} />
              <Route exact path="/Resume" component={Resume} />
              <Route exact path="/Blog" component={Blog} />
            </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
