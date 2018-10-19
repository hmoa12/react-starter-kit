import React from 'react';
import ReactDOM from 'react-dom';


import 'index.scss';

const WelcomeMessage = () => (
  <div>
    <h1>React</h1>
  </div>
)

ReactDOM.render(
  <WelcomeMessage/>,
  document.getElementById("root")
);
