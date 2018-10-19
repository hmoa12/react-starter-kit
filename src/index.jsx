import React from 'react';
import ReactDOM from 'react-dom';


import 'index.scss';

let WelcomeMessage = () => {
  return <h1>Welcome to React starter-kit</h1>
}

ReactDOM.render(
  <WelcomeMessage/>,
  document.getElementById("root")
);