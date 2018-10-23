import React from 'react';

import { Col, Row, Layout } from 'antd';

const { Footer } = Layout;

import 'styles/components/footer.scss';

const FooterComp = () => ({

  render() {

    return(
        <Layout>
          <Footer>
            <Row type="flex" justify="start">
              <Col span={6} offset={1}>

                <h3>Get to know us</h3>
                <ul>
                  <li>About us</li>
                  <li>Our vision</li>
                  <li>Our product</li>
                </ul>

              </Col>

              <Col span={6} offset={1}>
                <h3>Connect with us</h3>
                <ul>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                </ul>
              </Col>
            </Row>
          </Footer>
        </Layout>
    );
  }

})

export default FooterComp;
