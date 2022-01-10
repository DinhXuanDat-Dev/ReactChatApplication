import React from 'react'
import styled from 'styled-components'
import { UserAddOutlined } from '@ant-design/icons';
import { Button, Avatar, Tooltip } from 'antd'

const HeaderStyled = styled.div`

`

const RoomStyled = styled.div`
`

export default function ChatWindow() {
    return (
        <>
            <HeaderStyled>
                <div>
                    <p>Room1</p>
                    <span>This is room 1</span>
                </div>
            </HeaderStyled>
            <div>
                <Button 
                    type="text"
                    icon={<UserAddOutlined />} 
                >
                    Invite
                </Button>
                <Avatar.Group>
                    <Tooltip title="AAA">
                        <Avatar>A</Avatar>
                    </Tooltip>
                    <Tooltip title="BBB">
                        <Avatar>B</Avatar>
                    </Tooltip>
                    <Tooltip title="CCC">
                        <Avatar>C</Avatar>
                    </Tooltip>
                </Avatar.Group>
            </div>
        </>
    )
}
