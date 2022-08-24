// import third-party modules
import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Base() {
  return (
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout>
        <Layout.Sider>Sider</Layout.Sider>
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
}

export default Base;
