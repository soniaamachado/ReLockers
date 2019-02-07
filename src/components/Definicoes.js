import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from "axios";

export default class definicoes extends React.Component {

    state = {
        userinfo: []
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/users/1')
            .then(response => {
                this.setState({userinfo: response.data.data});
                console.log(this.state.userinfo.tipo.tipo);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        return (
            <main style={{height: '100%'}} role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h2">Definições</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    </div>
                </div>
                <Form>
                    <FormGroup>
                        <Label for="name">Nome Completo</Label>
                        <Input type="text" name="name" id="name" placeholder={this.state.userinfo.nome} disabled/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="contact">Contacto telefónico</Label>
                        <Input type="text" name="contact" id="contact" placeholder={this.state.userinfo.telefone}
                               disabled/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder={this.state.userinfo.email} disabled/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="function">Função</Label>
                        <Input type="text" name="function" id="function" placeholder={this.state.userinfo.tipo}
                               disabled/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Alterar password</Label>
                        <Input type="password" name="password" id="password" placeholder="Insira uma nova password!"/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="password" placeholder="Confirme a nova password!"/>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </main>
        );
    }
}