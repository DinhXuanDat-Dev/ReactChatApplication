import { Col, Row } from 'antd'
import React from 'react'
import RoomList from './RoomList'
import UserInfo from './UserInfo'
import styled from 'styled-components'

const SideBarStyle = styled.div `
    background : #3f0e40;
    height: 100vh;
    color: #fff;
`

export default function Sidebar() {
    return (
        <SideBarStyle>
            <Row>
                <Col span="24">
                    <UserInfo />
                </Col>
                <Col span="24">
                    <RoomList />
                </Col>
            </Row>
        </SideBarStyle>
    )
}
