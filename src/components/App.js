import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const App = props => ({

  render() {

    return(
      <div>
        <Header />
          <main>{props.children}</main>
        <Footer />
      </div>
    );

  }

});

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
