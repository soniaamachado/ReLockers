import React, { Component } from 'react';
import {
    Button, Card, CardBody, CardGroup, Col, Container,
    Form, Input, InputGroup, Row, Alert
} from 'reactstrap';

import '../css/Login.css';
import * as loginConstant from "./constants/LoginConstants";


import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        {
            this.state = {
                username: '',
                password: '',
                loginError: ""
            }
        }
    }

    signIn = () => {
        const { username, password } = this.state;

        const login = {
            grant_type: loginConstant.GRANT_TYPE,
            client_id: loginConstant.CLIENT_ID,
            client_secret: loginConstant.CLIENT_SECRET,
            username,
            password
        };

        // axios.post('http://167.99.202.225/oauth/token', login).then(res => {
        //     localStorage.setItem("access_token", res.data.access_token);
        //     localStorage.setItem("refresh_token", res.data.refresh_token);
        //     this.props.history.push("/inicio");
        // }).catch(error => {
        //     this.setState({ loginError: "Login inválido" })
        // })
        this.props.history.push("/inicio");
    }

    render() {
        let { username, password, loginError } = this.state;
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md="8">
                        <CardGroup className='login_form'>
                            <Card className="p-4">
                                <CardBody>
                                    <Form>
                                        <h1>Login</h1>
                                        <p className="text-muted">Insere as tuas credenciais</p>
                                        <InputGroup className="mb-3">
                                            <Input type="text" placeholder="Username" autoComplete="username"
                                                onChange={e => this.setState({ username: e.target.value })}
                                                value={username}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <Input type="password" placeholder="Password"
                                                autoComplete="current-password"
                                                onChange={e => this.setState({ password: e.target.value })}
                                                value={password}
                                            />
                                        </InputGroup>
                                        <Row>
                                            <Col xs="6">
                                                <Button color="primary" className="px-4" onClick={() => this.signIn()}>
                                                    Login
                                                </Button>
                                            </Col>
                                        </Row>
                                        <div className="message" style={{ marginTop: "10px" }} >
                                            {
                                                loginError.length == 0 ? "" :
                                                    <Alert color="danger">Login inválido</Alert>
                                            }
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                            <Card className="text-white bg-primary py-5 d-md-down-none">
                                <CardBody className="text-center">
                                    <div>
                                        <h2>ReLockers</h2>
                                        <p>Gestão de encomendas com entregas em cacifos. Encomendas entregues por
                                            estafetas nos diversos Pickup Points. A recolha é feita pelos
                                            clientes.</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container >
        );
    }
}


export default Login;
