import { PlusSquareOutlined } from '@ant-design/icons/lib/icons'
import { Button, Collapse, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'

const { Panel } = Collapse

const PanelStyled = styled(Panel)`
    &&& {
        // .ant-collapse-header,
        // p {
        //   color: white;
        //   background-color: black;
        // }
    }
`

const RoomStyled = styled(Typography.Link)`
    display: block;
`


export default function RoomList() {
    return (
        <Collapse defaultActiveKey={['1']}>
            <PanelStyled header="Room List" key='1'>
                <RoomStyled>Room1</RoomStyled>
                <RoomStyled>Room2</RoomStyled>
                <RoomStyled>Room3</RoomStyled>
            </PanelStyled>
            <Button type="text" icon={<PlusSquareOutlined/>} className="add-room">Add new room</Button>
        </Collapse>
    )
}
