import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';


import App from './components/App';
import About from './components/About/About';
import Home from './components/Home/Home';


const Root = () => (

    <App>

        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about/' component={About} />
            </Switch>
        </BrowserRouter>

    </App>

);

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);
