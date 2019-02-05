import React, { Component } from "react";
import axios from "axios";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

export default class AdicionarEncomenda extends Component {

    state = {
        estado_encomenda:0,
        numero_encomenda:1,
        data_de_entrada_no_sistema:"",
        data_de_entrega_pretendida:"",
        tempo_limite_de_levantamento:"",
        tamanho:"",
        observacoes:"",
        temperatura:"",
        cacifo_id:1,
        cliente_id:1,
        errors:{}
    };


    onSubmit = e => {
        e.preventDefault();

        const { estado_encomenda, cacifo_id, cliente_id, numero_encomenda, data_de_entrada_no_sistema, data_de_entrega_pretendida, tempo_limite_de_levantamento, tamanho, temperatura, observacoes } = this.state;

        if (estado_encomenda === "") {
            this.setState({ errors: { estado_encomenda: "O estado da encomenda é requirido" } });
            return;
        }

        if (numero_encomenda=== "") {
            this.setState({ errors: { numero_encomenda: "Número da encomenda requirido" } });
            return;
        }

        if (data_de_entrada_no_sistema === "") {
            this.setState({ errors: { data_de_entrada_no_sistema: "Data de entrada requirida" } });
            return;
        }

        if (data_de_entrega_pretendida === "") {
            this.setState({ errors: { data_de_entrega_pretendida: "URL is required" } });
            return;
        }
        if (tempo_limite_de_levantamento === "") {
            this.setState({ errors: { tempo_limite_de_levantamento: "URL is required" } });
            return;
        }
        if (tamanho === "") {
            this.setState({ errors: { tamanho: "URL is required" } });
            return;
        }
        if (temperatura === "") {
            this.setState({ errors: { temperatura: "URL is required" } });
            return;
        }
        if (observacoes=== "") {
            this.setState({ errors: { observacoes: "URL is required" } });
            return;
        }
        if (cacifo_id === "") {
            this.setState({ errors: { temperatura: "URL is required" } });
            return;
        }
        if (cliente_id=== "") {
            this.setState({ errors: { observacoes: "URL is required" } });
            return;
        }

        const newEncomenda = {
            estado_encomenda,
            numero_encomenda,
            data_de_entrada_no_sistema,
            data_de_entrega_pretendida,
            tempo_limite_de_levantamento,
            tamanho,
            observacoes,
            temperatura,
            cacifo_id,
            cliente_id
        };

        axios.post('http://167.99.202.225/api/encomendas', newEncomenda)
            .then(res => console.log(res.statusText));

        this.setState({
            estado_encomenda: "",
            numero_encomenda: "",
            data_de_entrada_no_sistema: "",
            data_de_entrega_pretendida: "",
            tempo_limite_de_levantamento: "",
            tamanho: "",
            observacoes: "",
            temperatura: "",
            cacifo_id: "",
            cliente_id: ""

        });

        this.props.history.push("/news");
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { estado_encomenda, numero_encomenda, data_de_entrada_no_sistema, data_de_entrega_pretendida, tempo_limite_de_levantamento,tamanho, observacoes, temperatura } = this.state;
        return (
            <main>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="numero_encomenda">Tamanho</Label>
                        <Input type="number" name="numero_encomenda" id="numero_encomenda"/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="tamanho">Tamanho</Label>
                        <Input type="select" name="tamanho" id="tamanho">
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </Input>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="observacoes" sm={2}>Observações</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="observacoes" id="observacoes" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Label for="data_de_entrega_pretendida">Entrega</Label>
                        <Input
                            type="datetime-local"
                            name="data_de_entrega_pretendida"
                            id="data_de_entrega_pretendida"
                            placeholder="Data de Entrega"
                        />
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>

                </Form>
            </main>
        );
    }
}

