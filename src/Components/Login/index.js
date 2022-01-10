import React from 'react'
import {Row, Col, Button, Typography} from 'antd'
import firebase, {auth, db} from '../../Firebase/config'
import {useNavigate} from 'react-router-dom'

const {Title} = Typography

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {

    const handleLogin = () => {
        auth.signInWithPopup(fbProvider);
    }   

    return (
        <div>
            <Row>
                <Col>
                    <Title>
                        Create Live chat
                    </Title>
                    <Button>
                        Login with google account
                    </Button>
                    <Button
                        onClick={handleLogin}
                    >
                        Login with facebook
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
