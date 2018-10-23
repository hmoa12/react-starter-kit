import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';

const { Content } = Layout;

import Header from './HeaderComp';
import Footer from './FooterComp';

const App = props => ({

  render() {

    return(
      <Layout>
        <Header />
          <Content>
            {props.children}
          </Content>
        <Footer />
      </Layout>
    );

  }

});

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
