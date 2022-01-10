import {Typography, Avatar, Button} from 'antd'
import React from 'react'
import styled from 'styled-components'

const WrapperAvatar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid black;

    .username{
        margin-left: 5px;
        color: white;
    }
`

export default function UserInfo() {
    return (
        <WrapperAvatar>
            <div>
                <Avatar>A</Avatar>
                <Typography.Text className="username">User</Typography.Text>
            </div>
            <Button ghost>Logout</Button>
        </WrapperAvatar>
    )
}
