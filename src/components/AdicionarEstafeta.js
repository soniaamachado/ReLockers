import React, { Component } from "react";
import axios from 'axios';
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

import TextInputGroup from "./forms/TextInput";
import * as header from './constants/HeaderConstant';

export default class AdicionarEstafeta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            password: "",
            password_confirmation: "",
            telefone: "",
            data_nascimento: "",
            local_de_trabalho: "TDIStore",
            tipo_id: 2,
            supervisor_id: 1,
            img_url: "",

            users: [],
            utilizadores: [],
            errors: {}
        };

        this.handleTipoChange = this.handleTipoChange.bind(this);
        this.handleTelefoneChange = this.handleTelefoneChange.bind(this);
        this.handleNascimento = this.handleNascimento.bind(this);
        this.handleSupervisorChange = this.handleSupervisorChange.bind(this);

    }

    componentDidMount() {
        axios.get('http://localhost:80/api/users', { headers: header.HEADER })
            .then(response => {
                this.setState({ users: response.data.data });
                this.stateOfOrder(this.state.users);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    stateOfOrder() {

        this.state.users.map((user, index) => {
            if (user.tipo.tipo !== 'Estafeta') {
                this.setState(prevState => ({
                    utilizadores: [...prevState.utilizadores, user]
                }))
            }
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const {
            nome, email, password, password_confirmation, telefone, data_nascimento,
            local_de_trabalho, tipo_id, supervisor_id
        } = this.state;

        if (nome == "") {
            this.setState({ errors: { nome: "Insira o nome do utilizador" } });
            return;
        }
        if (email == "") {
            this.setState({ errors: { email: "Insira um e-mail válido" } });
            return;
        }
        if (!(email.includes("@") && email.includes("."))) {
            this.setState({ errors: { email: "Insira um e-mail válido!" } });
            return;
        }
        if (password.length < 5) {
            this.setState({ errors: { password: "A password deve conter no mínimo 6 caracteres" } });
            return;
        }
        if (password_confirmation != password) {
            this.setState({ errors: { password_confirmation: "As passwords não são iguais" } });
            return;
        }

        const newUtilizador = {
            nome, email, password, password_confirmation, telefone, data_nascimento,
            local_de_trabalho, tipo_id, supervisor_id
        };

        console.log(newUtilizador);

        const header = {
            'Authorization': `Bearer " + ${localStorage.getItem("access_token")}`
        }

        axios.post('http://localhost:80/api/users', newUtilizador, { headers: header })
            .then(res => console.log(res.statusText))
            .catch(error => console.log(error));

        this.setState({
            nome: "",
            email: "",
            password: "",
            password_confirmation: "",
            telefone: "",
            data_nascimento: "",
            local_de_trabalho: "TDIStore",
            tipo_id: 2,
            supervisor_id: 1,
            img_url: "",

            users: [],
            errors: {}
        });

        //this.props.history.push("/news");
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleTipoChange = (event) => {
        this.setState({ tipo: event.target.value });
    };

    handleTelefoneChange = (event) => {
        this.setState({ telefone: event.target.value });
    };

    handleNascimento = (event) => {
        this.setState({ data_nascimento: event.target.value });
    };

    handleSupervisorChange = (event) => {
        this.setState({ supervisor_id: event.target.value });
    };

    render() {
        const {
            nome, email, password, password_confirmation, errors
        } = this.state;
        return (
            <main style={{ height: '100%' }} role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h2">Estafetas</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <i className="material-icons md-24" style={{ verticalAlign: 'middle' }}>location_on</i>
                    <h6 style={{ display: 'inline', verticalAlign: 'middle' }}>Aveiro, Portugal</h6>
                    <a href={'/definicoes'} style={{ marginLeft: '5px', fontSize: '10px', display: 'inline', verticalAlign: 'middle' }}>Alterar</a>
                </div>
                <form onSubmit={this.onSubmit}>

                    <TextInputGroup
                        label="Nome"
                        name="nome"
                        placeholder="Introduza um nome..."
                        value={nome}
                        onChange={this.onChange}
                        error={errors.nome}
                    />

                    <TextInputGroup
                        label="E-mail"
                        name="email"
                        placeholder="Introduza um email..."
                        value={email}
                        onChange={this.onChange}
                        error={errors.email}
                    />

                    <FormGroup>
                        <Label for="telefone">Telefone</Label>
                        <Input
                            type="tel"
                            name="telefone"
                            id="telefone"
                            pattern="[0-9]{9}"
                            value={this.state.telefone}
                            onChange={this.handleTelefoneChange}
                            placeholder="Introduza um telefone..."
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="data_nascimento">Data de nascimento</Label>
                        <Input
                            type="date"
                            name="data_nascimento"
                            id="data_nascimento"
                            placeholder="Data de nascimento"
                            onChange={this.handleNascimento}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="estafeta">Supervisor</Label>

                        <Input type="select" name="supervisor_id" id="supervisor_id" onChange={this.handleSupervisorChange}>
                            {
                                this.state.utilizadores.map(
                                    user => {
                                        return (
                                            <option value={user.id}>{user.nome}</option>
                                        )
                                    }
                                )
                            }
                        </Input>

                    </FormGroup>

                    <TextInputGroup
                        label="Password"
                        name="password"
                        placeholder="6 caracteres no mínimo..."
                        type={"password"}
                        value={password}
                        onChange={this.onChange}
                        error={errors.password}
                    />

                    <TextInputGroup
                        label="Confirmar password"
                        name="password_confirmation"
                        placeholder="Confirmar password..."
                        type={"password"}
                        value={password_confirmation}
                        onChange={this.onChange}
                        error={errors.password_confirmation}
                    />

                    <Button
                        style={{
                            display: 'block',
                            float: 'center',
                            width: 'auto',
                            margin: 'auto',
                            backgroundColor: 'rgb(181, 160, 251)',
                            border: 'none'
                        }} size="sm">
                        Adicionar estafetas
                    </Button>

                </form>
            </main >
        );
    }
}