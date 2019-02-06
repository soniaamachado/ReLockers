import React, { Component } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

import TextInputGroup from "./forms/TextInput";

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

            errors: {}
        };

        this.handleTamanhoChange = this.handleTamanhoChange.bind(this);

    }


    onSubmit = e => {
        e.preventDefault();

        const {
            estado_encomenda, cacifo_id, cliente_id,
            temperatura, observacoes, tamanho
        } = this.state;


        // if (cacifo_id === "") {
        //     this.setState({ errors: { temperatura: "URL is required" } });
        //     return;
        // }
        // if (cliente_id == "") {
        //     this.setState({ errors: { observacoes: "URL is required" } });
        //     return;
        // }

        const newEncomenda = {
            // cacifo_id,
            // cliente_id
        };

        console.log(newEncomenda);

        // axios.post('http://localhost:80/api/encomendas', newEncomenda)
        //     .then(res => console.log(res.statusText))
        //     .catch(error => console.log(error));

        this.setState({
            //     cacifo_id: "",
            //     cliente_id: ""

        });

        //this.props.history.push("/news");
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleTamanhoChange(event) {
        this.setState({ tamanho: event.target.value });
    }

    render() {
        const {
            nome, email, telefone, observacoes, errors
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
                            value={this.state.temperatura}
                            onChange={this.handleTemperaturaChange}
                            placeholder="Introduza um telefone..."
                            required
                        />
                    </FormGroup>

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