import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';

import 'bootstrap/dist/css/bootstrap.min.css';


class Root extends React.Component {
  render() {
    return(
      <App>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about/' component={About} />
          </Switch>
        </BrowserRouter>
      </App>
    );
  }
}


ReactDOM.render(
  <Root/>,
  document.getElementById("root")
);
