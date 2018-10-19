import React from 'react';
import ReactDOM from 'react-dom';


import 'index.scss';

const WelcomeMessage = () => (
  <div>
    <h1>React</h1>
    <h2>The SCSS worked :|</h2>
  </div>
)

ReactDOM.render(
  <WelcomeMessage/>,
  document.getElementById("root")
);

