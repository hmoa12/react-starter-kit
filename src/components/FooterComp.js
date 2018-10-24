import React from 'react';

import { Col, Row, Layout } from 'antd';

const { Footer } = Layout;

import 'styles/components/footer.scss';

const FooterComp = () => ({

  render() {

    return(
        <div>
          <Row className="footer">
            <Col span={12} className="__footer_section">
              <div className="footer_text">
                <h2>Get to know us</h2>
                <ul>
                  <li><a href="#">Our vision</a></li>
                  <li><a href="#">Our products</a></li>
                </ul>
              </div>
            </Col>
            <Col span={12} className="__footer_section">
            <div className="footer_text">
                <h2>Get in touch</h2>
                <ul>
                  <li><a href="#">Like us on Facebook</a></li>
                  <li><a href="#">Follow us on Instagram</a></li>
                  <li><a href="#">Follow us on Twitter</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
    );
  }

})

export default FooterComp;
