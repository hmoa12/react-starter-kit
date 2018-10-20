import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

import 'styles/components/footer.scss';

const Footer = () => ({

  render() {

    return(
      <Jumbotron>
        <Container>
          <Row>
            <Col sm={{size: 'auto', offset: 1}}>

              <h4>Get to know us</h4>
              <ul>
                <li>About us</li>
                <li>Our vision</li>
                <li>Our product</li>
              </ul>

            </Col>

            <Col sm={{size: 'auto', offset: 1}}>
              <h4>Connect with us</h4>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </Col>

          </Row>
        </Container>
      </Jumbotron>
    );

  }

})

export default Footer;
