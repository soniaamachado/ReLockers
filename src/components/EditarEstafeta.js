import React, { Component } from 'react';
import "../css/DetalheEstafeta.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import * as header from './constants/HeaderConstant';

class EditarEstafeta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            email: "",
            telefone: ""
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleTelefoneChange = this.handleTelefoneChange.bind(this);
        this.updateEstafeta = this.updateEstafeta.bind(this);
    }

    componentDidMount() {
        axios.get('http://167.99.202.225/api/users/ ' + this.props.match.params.id, { headers: header.HEADER })
            .then(response => {
                this.setState({ users: response.data.data });
                this.setState({ email: response.data.data.email });
                this.setState({ telefone: response.data.data.telefone });
                console.log(this.state.users);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handleTelefoneChange = (event) => {
        this.setState({ telefone: event.target.value });
    }

    updateEstafeta = () => {
        const { email, telefone } = this.state;

        const updateEstafeta = { email, telefone };
        console.log(updateEstafeta);

        axios.put('http://167.99.202.225/api/users/ ' + this.props.match.params.id, updateEstafeta, { headers: header.HEADER })
            .then(response => {
                console.log(response);
                this.props.history.push("/estafetas");
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    render() {

        if (this.state.users.length === 0) {
            return null;
        }
        else {
            return (
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div className="card-content collapse show">
                        <div className="card-body">
                            <h1>Detalhes de Estafeta</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/estafetas">Estafetas</Link>
                                </li>
                                <li className="breadcrumb-item"> <Link to={'#'}>Detalhes de Estafeta</Link>
                                </li>

                            </ol>
                            <div className="table-responsive table_estafeta">
                                <table className="table">
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Identificador</th>
                                            <td>
                                                {this.state.users.id}
                                            </td>

                                        </tr>

                                        <tr>
                                            <th scope="row">Nome</th>
                                            <td>
                                                {this.state.users.nome}
                                            </td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>
                                                <FormGroup>
                                                    <Input type="text" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange} />
                                                </FormGroup>
                                            </td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Telefone</th>
                                            <td><FormGroup>
                                                <Input type="tel" name="telefone" id="telefone" value={this.state.telefone} onChange={this.handleTelefoneChange} />
                                            </FormGroup></td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Data de nascimento</th>
                                            <td>
                                                {this.state.users.data_nascimento}
                                            </td>

                                        </tr>
                                    </tbody>

                                </table>

                            </div>
                            <Button
                                style={{
                                    display: 'block',
                                    float: 'right',
                                    width: 'auto',
                                    margin: 'auto',
                                    backgroundColor: 'rgb(181, 160, 251)',
                                    border: 'none'
                                }} size="m" onClick={this.updateEstafeta}>
                                Editar estafetas
                            </Button>
                        </div>
                    </div>

                </main>
            );
        }
    }
}


export default EditarEstafeta;

