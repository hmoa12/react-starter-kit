import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const App = props => ({

  render() {

    return(
      <div>
        <header><Header /></header>
          <main>{props.children}</main>
        <footer><Footer /></footer>
      </div>
    );

  }

});

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
