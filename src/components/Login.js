import React, {Component} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Container,
    Form,
    Input,
    InputGroup,
    Row
} from 'reactstrap';

import axios from 'axios';

class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            grant_type: "password",
            client_id: "4",
            client_secret: "DA57SbxNGJvH1oQB95v9lB9A8hE8KnA0Q8cYQOLf",
            username: '',
            password: ''

        }
    }

    signIn() {
        console.log('this.state', this.state);
        axios.post('localhost/Oauth/token', this.state)
            .then(res => {
                console.log(this.state);
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <Form>
                                            <h1>Login</h1>
                                            <p className="text-muted">Insere as tuas credenciais</p>
                                            <InputGroup className="mb-3">
                                                <Input type="text" placeholder="Username" autoComplete="username"
                                                       onChange={event => this.setState({username: event.target.value})}
                                                       errorText={this.state.usernameError}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <Input type="password" placeholder="Password"
                                                       autoComplete="current-password"
                                                       onChange={event => this.setState({password: event.target.value})}
                                                       errorText={this.state.passwordError}/>
                                            </InputGroup>
                                            <Row>
                                                <Col xs="6">
                                                    <Button color="primary" className="px-4"
                                                            onClick={() => this.signIn()}>Login</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                                <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
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
            </div>
        );
    }
}

export default Login;
