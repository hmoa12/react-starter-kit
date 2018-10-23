import React from 'react';

import { Layout, Input, Col, Row, Divider, Avatar } from 'antd';

const { Header } = Layout;
const Search = Input.Search;


import 'styles/components/header.scss';

const HeaderComp = () => ({

  render() {

    return(
        <Layout>
          <Header>
            <Row type="flex" justify="space-around">
              <Col span={3}>
                <h3>Website Name</h3>
              </Col>
              <Col span={4}>
                <div className='logo' />
              </Col>
              <Col span={10}>
                <Search
                  placeholder="Search Designs"
                  onSearch={value => console.log(value)}
                  style={{ width: 250 }}
                />
              </Col>
              <Col>
                <h3>Customer Name</h3>
              </Col>
              <Col>
                <Avatar size={44} icon='user' />
              </Col>
            </Row>
          </Header>
        </Layout>
    );

  }

})



export default HeaderComp;
