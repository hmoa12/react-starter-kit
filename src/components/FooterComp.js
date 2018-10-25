import React from 'react';

import { Col, Row, Layout, Icon } from 'antd';

const { Footer } = Layout;

import 'styles/components/footer.scss';

const FooterComp = () => ({

  render() {

    return(
        <div>
          <Row className="footer">
            <Col span={8} className="__footer_section">
              <div className="footer_text">
                <h2>Get to know us</h2>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Our vision</a></li>
                  <li><a href="#">Our products</a></li>
                </ul>
              </div>
            </Col>
            <Col span={8} className="__footer_section">
            <div className="footer_text">
                <h2>Get in touch</h2>
                <ul>
                  <li><a href="#"><Icon type="facebook" theme="filled" className="icon"/> Like us on Facebook</a></li>
                  <li><a href="#"><Icon type="instagram" theme="filled" className="icon"/> Follow us on Instagram</a></li>
                  <li><a href="#"><Icon type="twitter" theme="outlined" className="icon"/> Follow us on Twitter</a></li>
                </ul>
              </div>
            </Col>
            <Col span={8} className="__footer_section">
            <div className="footer_text">
                <h2>Need help</h2>
                <ul>
                  <li><a href="#"><Icon type="phone" theme="filled" className="icon"/> Phone: 8883456664</a></li>
                  <li><a href="#"><Icon type="mobile" theme="outlined" className="icon"/> Mobile: 234293992</a></li>
                  <li><a href="#"><Icon type="mail" theme="outlined" className="icon"/> Email: support@email.com</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
    );
  }

})

export default FooterComp;
