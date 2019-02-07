import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import * as header from './constants/HeaderConstant';

export default class definicoes extends React.Component {

    state = {
        user: []
    };

    componentDidMount() {
        axios.get('http://localhost:80/api/user', { headers: header.HEADER })
            .then(response => {
                this.setState({ user: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {

        const {
            nome, telefone, email,
        } = this.state.user;

        console.log(nome);

        return (
            <main style={{ height: '100%' }} role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h2">Definições</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    </div>
                </div>
                <Form>
                    <FormGroup>
                        <Label for="name">Nome Completo</Label>
                        <Input type="text" name="name" id="name" placeholder={nome} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="contact">Contacto telefónico</Label>
                        <Input type="text" name="contact" id="contact" placeholder={telefone}
                            disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder={email} disabled />
                    </FormGroup>
                </Form>
            </main>
        );
    }
}