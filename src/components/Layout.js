import React from 'react'
import * as c from '../constants'
import { Row, Col, Layout, Avatar, Input, Button, Menu, Dropdown } from 'antd';
const { Header, Content } = Layout;
const Search = Input.Search;


export default ({ children, onSearch, onSort, sortKey }) => {
    const menu = (
        <Menu onClick={onSort} selectedKeys={[sortKey]}>
            <Menu.Item key={c.SCORE_ASC}>{c.SCORE_ASC.replace('_', ' ')}</Menu.Item>
            <Menu.Item key={c.SCORE_DESC}>{c.SCORE_DESC.replace('_', ' ')}</Menu.Item>
            <Menu.Item key={c.PLATFORM_ASC}>{c.PLATFORM_ASC.replace('_', ' ')}</Menu.Item>
            <Menu.Item key={c.PLATFORM_DESC}>{c.PLATFORM_DESC.replace('_', ' ')}</Menu.Item>
        </Menu >
    );

    return <Layout>
        <Header>
            <Row>
                <Col span={1}>
                    <Avatar style={{ backgroundColor: '#1890ff', verticalAlign: 'middle' }} size="large">
                        GA
                    </Avatar>
                </Col>
                <Col span={7}>
                    <span style={{ color: 'white', fontSize: 'x-large' }}>GAME ARENA</span>
                </Col>
                <Col span={10}>
                    <Search
                        enterButton
                        onSearch={onSearch}
                        placeholder="search game" size="large" />
                </Col>
                <Col span={5} offset={1}>
                    <Dropdown overlay={menu}>
                        <Button type="primary" shape="circle" icon="filter" />
                    </Dropdown>
                </Col>
            </Row>
        </Header>
        <Content style={{ padding: '0 100px' }}>
            <div style={{ padding: 24 }}>
                {children}
            </div>
        </Content>
    </Layout>
}