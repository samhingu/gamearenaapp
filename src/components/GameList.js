import React from 'react'
import { Card, List } from 'antd';

export default ({ list }) => (
    <List
        grid={{ gutter: 24, column: 3 }}
        dataSource={list}
        renderItem={game => (
            <List.Item>
                <Card style={{ minHeight: '250px' }}>
                    <p className="label" style={{ fontWeight: 'bold' }}>{game.title}</p>
                    <p><span className="label"> Platform : </span> {game.platform}</p>
                    <p><span className="label"> Score : </span> {game.score}</p>
                    <p><span className="label"> Genre : </span> {game.genre}</p>
                    <p><span className="label"> Editor's Choise : </span>{game.editors_choice}</p>
                </Card>
            </List.Item>
        )} />
)