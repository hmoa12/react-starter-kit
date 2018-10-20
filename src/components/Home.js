import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => ({
  render() {
    return (
      <div className='innerWrapper'>
        <h2> Hey guys welcome aboard </h2>
        <Link to='about' >Learn more about us </Link>
      </div>
    );
  }

});

export default Home
