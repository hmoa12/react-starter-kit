import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Layout,  Button, Divider, Card, Carousel } from 'antd';

const { Content } = Layout;

import 'styles/components/home.scss';


const Home = () => ({

  render() {
    
    return (
        <Layout>
          <Content style={{ background: '#fff', minHeight: 480 }}>
            <div>
              <Row style={{ padding: 48 }}>
                <Col xl={10}>
                  <h2 className='heading'> Hey guys welcome aboard </h2>
                  <Carousel>
                    <div><h3>Featured Items 1</h3></div>
                    <div><h3>Featured Items 2</h3></div>
                    <div><h3>Featured Items 3</h3></div>
                    <div><h3>Featured Items 4</h3></div>
                  </Carousel>
                  {/* <Link to='about'>
                    <div>
                      <Button type='primary' size='large'>Learn more about us</Button>
                    </div>
                  </Link> */}
                </Col>
                <Col span={4}>

                </Col>
                <Col xl={10}>
                  <h2 className='heading'> Intro </h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <Button type='primary' size='large' style={{marginTop: 50}}>HAVE YOUR OWN DESIGN</Button>
                </Col>
              </Row>
              <Divider />
              <Row type="flex" justify="space-around" style={{ marginBottom: 50 }}>
                <Col span={4}>
                  <Card title='featured-items'>

                  </Card>
                </Col>
                <Col span={4}>
                  <Card title='featured-items'>

                  </Card>
                </Col>
                <Col span={4}>
                  <Card title='featured-items'>

                  </Card>
                </Col>
                <Col span={4}>
                  <Card title='featured-items'>

                  </Card>
                </Col>
              </Row>
              <Row type="flex" justify="space-around" style={{ marginBottom: 50 }}>
                <Col span={4}>
                  <Card title='featured-items'>

                  </Card>
                </Col>
                <Col span={4}>
                  <Card title='featured-items'>

                  </Card>
                </Col>
                <Col span={4}>
                  <Card title='featured-items'>

                  </Card>
                </Col>
                <Col span={4}>
                  <Card title='featured-items'>

                  </Card>
                </Col>
              </Row>
              <Row type="flex" justify="space-around" style={{ marginBottom: 50 }}>
                <Col span={4}>
                  <Card title='featured-items'>

                  </Card>
                </Col>
                <Col span={4}>
                  <Card title='featured-items'>

                  </Card>
                </Col>
                <Col span={4}>
                  <Card title='featured-items'>

                  </Card>
                </Col>
                <Col span={4}>
                  <Card title='featured-items'>

                  </Card>
                </Col>
              </Row>
              <Divider />
            </div>
          </Content>
        </Layout>
    );
  }
});

export default Home;
