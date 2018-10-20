import React from 'react';
import { Container } from 'reactstrap';

import 'styles/components/about.scss';

const About = () => ({
  render() {
    return(
      <Container>
        <h2> About us </h2>

        <ul>
            <li>Energetic</li>
            <li>Workaholic</li>
            <li>Geniuses</li>
            <li>Programmers</li>
        </ul>

        <p> thats not all wait for more </p>
      </Container>
    );
  }
});

export default About;
