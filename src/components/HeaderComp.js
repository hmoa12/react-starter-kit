import React from 'react';
import { Layout, Input, Col, Row, Divider, Avatar, Menu, Dropdown } from 'antd';

import '../styles/components/header.scss';

const { Header } = Layout;
const Search = Input.Search;


import 'styles/components/header.scss';
const avatarDropDown = (
  <Menu className="dropDown">
    <Menu.Item key={0}>
      <a href="#">Your profile</a>
    </Menu.Item>
    <Menu.Item key={1}>
      <a href="#">Orders</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key={2}>
      <a href="#">Logout</a>
    </Menu.Item>
  </Menu>
)
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
              <Col span={4}>
                <Search
                  placeholder="Search Designs"
                  onSearch={value => console.log(value)}
                  style={{ width: 250 }}
                />
              </Col>
              <Col offset={6}>
                <h3>Customer Name</h3>
              </Col>
              <Col>
                <Dropdown overlay={avatarDropDown} placement={"bottomCenter"} trigger={['click']}>
                  <Avatar size={44} icon='user' />
                </Dropdown>
              </Col>
            </Row>
          </Header>
        </Layout>
    );

  }

})



export default HeaderComp;
