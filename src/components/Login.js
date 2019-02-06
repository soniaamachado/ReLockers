import React, {Component} from 'react';
import '../css/Login.css';
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
import {connect} from 'react-redux';
import {login} from './Redux/reducer';

import axios from 'axios';

class Login extends Component {


    constructor(props) {
        super(props);
        {/* this.state = {
            grant_type: "password",
            client_id: "4",
            client_secret: "DA57SbxNGJvH1oQB95v9lB9A8hE8KnA0Q8cYQOLf",
            username: '',
            password: ''

        } */
        }
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }

    /* signIn() {
            console.log('this.state', this.state);
            {/* axios.post('localhost/Oauth/token', this.state)
                .then(res => {
                    console.log(this.state);
                })
                .catch(error => console.log(error))*/

    render() {
        let {username, password} = this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md="8">
                        <CardGroup className='login_form'>
                            <Card className="p-4">
                                <CardBody>
                                    <Form onSubmit={this.onSubmit}>
                                        <h1>Login</h1>
                                        <p className="text-muted">Insere as tuas credenciais</p>
                                        <InputGroup className="mb-3">
                                            <Input type="text" placeholder="Username" autoComplete="username"
                                                   onChange={e => this.setState({username: e.target.value})}
                                                   value={username}
                                                /*onChange={event => this.setState({username: event.target.value})}*/
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <Input type="password" placeholder="Password"
                                                   autoComplete="current-password"
                                                   onChange={e => this.setState({password: e.target.value})}
                                                   value={password}
                                                /*onChange={event => this.setState({password: event.target.value})}*/
                                            />
                                        </InputGroup>
                                        <Row>
                                            <Col xs="6">
                                                <Button color="primary" className="px-4"
                                                    /*onClick={() => this.signIn()}*/>Login</Button>
                                            </Col>
                                        </Row>
                                        <div className="message">
                                            { isLoginPending && <div>Please wait...</div> }
                                            { isLoginSuccess && <div>Success.</div> }
                                            { loginError && <div>{loginError.message}</div> }
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

    onSubmit(e) {
        e.preventDefault();
        let { username, password } = this.state;
        this.props.login(username, password);
        this.setState({
            username: '',
            password: ''
        });
        console.log('this.state', this.state);
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(login(username, password))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
