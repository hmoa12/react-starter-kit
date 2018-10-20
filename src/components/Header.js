import React from 'react';
import { Jumbotron } from 'reactstrap';

import 'styles/components/header.scss';



const Header = () => ({

  render() {

    return(
      <Jumbotron>
        <h3> Header goes here </h3>
      </Jumbotron>
    );

  }

})



export default Header;
