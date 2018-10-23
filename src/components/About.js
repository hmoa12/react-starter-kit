import React from 'react';


import { Layout } from 'antd';

const { Content } = Layout;

import 'styles/components/about.scss';

const About = () => ({
  render() {
    return(
      <div>
        <Layout>

          <Content style={{ background: '#fff', padding: 48, minHeight: 480 }}>
            <h2 className='heading'> About us </h2>

            <ul>
                <li>Energetic</li>
                <li>Workaholic</li>
                <li>Geniuses</li>
                <li>Programmers</li>
            </ul>

            <p> thats not all wait for more </p>
          </Content>

        </Layout>
      </div>
    );
  }
});

export default About;
