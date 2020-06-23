import React from 'react';
import './App.css';
import Router from "./Router";
import {Layout, Menu} from "antd";


const {Content, Header} = Layout;

const App = () => {
    return (
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav</Menu.Item>
                    <Menu.Item key="2">nav</Menu.Item>
                    <Menu.Item key="3">nav</Menu.Item>
                </Menu>
            </Header>
            <Content>
                <div className="site-layout-content">
                    <Router/>
                </div>
            </Content>
        </Layout>
    )
};

export default App;
