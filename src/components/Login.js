import React, { Component } from 'react';
import '../css/Login.css';
import {
    Button, Card, CardBody, CardGroup, Col, Container, Form, Input,
    InputGroup,
    Row
} from 'reactstrap';
import { connect } from 'react-redux';
import { login } from './Redux/reducer';

import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        {
            this.state = {
                grant_type: "password",
                client_id: "1",
                client_secret: "t7NW65czhUV1Up2kOqGgMG21T3h58fMu9LVjTHCS",
                username: '',
                password: ''
            }
        }
    }

    signIn() {
        console.log('this.state', this.state);
        {
            axios.post('http://localhost:80/oauth/token', this.state)
                .then(res => {
                    console.log(res);
                    console.log(res.data.access_token);
                    console.log(res.data.refresh_token);

                    localStorage.setItem("access_token", res.data.access_token);
                    localStorage.setItem("refresh_token", res.data.refresh_token);
                })
                .catch(error => console.log(error))
        }
    }

    render() {
        let { username, password } = this.state;
        let { isLoginPending, isLoginSuccess, loginError } = this.props;
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
                                                <Button color="primary" className="px-4"
                                                    onClick={() => this.signIn()}>Login</Button>
                                            </Col>
                                        </Row>
                                        <div className="message">
                                            {isLoginPending && <div>Please wait...</div>}
                                            {isLoginSuccess && <div>Success.</div>}
                                            {loginError && <div>{loginError.message}</div>}
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
            </Container>
        );
    }
}


export default Login;
