import React, { Component } from "react";
import axios from "axios";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import * as header from './constants/HeaderConstant';

export default class EditarEncomenda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            estafetas: [],
            administradores: [],
            cacifos: [],
            cacifos_livres: [],
            cacifos_ocupados: [],
            clientes: [],
            estado_encomenda: 0,
            data_de_entrada_no_sistema: "",
            data_de_entrega_pretendida: "",
            tempo_limite_de_levantamento: "",
            tamanho: "S",
            observacoes: "",
            temperatura: 20,
            cacifo_id: "",
            cliente_id: "",
            errors: {},
        };

        this.handleTamanhoChange = this.handleTamanhoChange.bind(this);
        this.handleDataDeEntregaChange = this.handleDataDeEntregaChange.bind(this);
        this.handleTemperaturaChange = this.handleTemperaturaChange.bind(this);
        this.handleClienteChange=this.handleClienteChange.bind(this);
    }

    componentDidMount = () => {

        axios.get('http://167.99.202.225/api/encomendas', { headers: header.HEADER })
            .then(response => {
                this.setState({ encomendas: response.data.data });
                this.splitArrayEncomendas(this.state.encomendas);

            })
            .catch(function (error) {
                console.log(error);
            });


        axios.get('http://167.99.202.225/api/users', { headers: header.HEADER })
            .then(response => {
                this.setState({ users: response.data.data });
                this.splitArrayEncomendas(this.state.users);

            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('http://167.99.202.225/api/cacifos', { headers: header.HEADER })
            .then(response => {
                this.setState({ cacifos: response.data.data });
                this.splitArrayCacifos(this.state.users);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('http://167.99.202.225/api/clientes', { headers: header.HEADER })
            .then(response => {
                this.setState({ clientes: response.data.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    splitArrayEncomendas = () => {

        this.state.users.map((user, index) => {
            if (user.tipo.tipo === 'Estafeta') {
                this.setState(prevState => ({
                    estafetas: [...prevState.estafetas, user]

                }))
            } else {
                this.setState(prevState => ({
                    administradores: [...prevState.administradores, user]
                }))
            }
        });
    };

    splitArrayCacifos() {

        this.state.cacifos.map((cacifo, index) => {
            if (cacifo.estado.id === 1) {
                this.setState(prevState => ({
                    cacifos_livres: [...prevState.cacifos_livres, cacifo]

                }))
            } else {
                this.setState(prevState => ({
                    cacifos_ocupados: [...prevState.cacifos_ocupados, cacifo]
                }))
            }
        });
    }

    getCurrentDate = () => {

        const fullDate = new Date();

        const year = fullDate.getFullYear();
        const month = ("0" + (fullDate.getMonth() + 1)).slice(-2);
        const day = ("0" + fullDate.getDate()).slice(-2);

        const hour = (fullDate.getHours() < 10 ? '0' : '') + fullDate.getHours();
        const min = (fullDate.getMinutes() < 10 ? '0' : '') + fullDate.getMinutes();
        const sec = (fullDate.getSeconds() < 10 ? '0' : '') + fullDate.getSeconds();

        return `${year}-${month}-${day} ${hour}:${min}:${sec}`;

    };

    data_final = (data_de_entrega_pretendida) => {

        const data_final = new Date(new Date(data_de_entrega_pretendida).getTime() + 60 * 60 * 24 * 1000);
        const year = data_final.getFullYear();
        const month = ("0" + (data_final.getMonth() + 1)).slice(-2);
        const day = ("0" + data_final.getDate()).slice(-2);

        const hour = (data_final.getHours() < 10 ? '0' : '') + data_final.getUTCHours();
        const min = (data_final.getMinutes() < 10 ? '0' : '') + data_final.getMinutes();
        const sec = (data_final.getSeconds() < 10 ? '0' : '') + data_final.getSeconds();

        return `${year}-${month}-${day} ${hour}:${min}:${sec}`;

    };

    onSubmit = (e) => {
        e.preventDefault();

        const {
            estado_encomenda,
            cacifo_id,
            cliente_id,
            temperatura,
            observacoes,
            tamanho
        } = this.state;


        const data_de_entrada_no_sistema = this.getCurrentDate();


        const data_de_entrega_pretendida = this.state.data_de_entrega_pretendida.replace("T", " ") + ":00";

        const tempo_limite_de_levantamento = this.data_final(data_de_entrega_pretendida);

        console.log(this.props.match.params.id);

        axios.put('http://167.99.202.225/api/encomendas', + this.props.match.params.id, { headers: header.HEADER })
            .then(res => console.log(res.statusText))
            .catch(error => console.log(error));

        const newEncomenda = {
            estado_encomenda,
            data_de_entrada_no_sistema,
            data_de_entrega_pretendida,
            tempo_limite_de_levantamento,
            tamanho,
            observacoes,
            temperatura,
            cacifo_id,
            cliente_id
        };



        this.setState({
            estado_encomenda: 0,
            data_de_entrada_no_sistema: "",
            data_de_entrega_pretendida: "",
            tempo_limite_de_levantamento: "",
            tamanho: "",
            observacoes: "",
            temperatura: 20,
            cacifo_id:1,
            cliente_id:1,

        });

        console.log(this.state.mensagem)

    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleTamanhoChange = (event) => {
        this.setState({ tamanho: event.target.value });
    };

    handleCacifoChange = (event) => {
        this.setState({ cacifo_id: event.target.value });
    };

    handleClienteChange = (event) => {
        this.setState({ cliente_id: event.target.value });
    };


    handleDataDeEntregaChange = (event) => {
        this.setState({ data_de_entrega_pretendida: event.target.value });
    };

    handleTemperaturaChange = (event) => {
        this.setState({ temperatura: event.target.value });
    };


    render() {
        const {
            observacoes, errors
        } = this.state;
        return (
            <main style={{ height: '100%' }} role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h2">Adicionar encomenda</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    </div>
                </div>

                <Form onSubmit={this.onSubmit}>

                    <Row style={{ marginBottom: '30px' }}>
                        <Col>

                            <Label for="tamanho">Temperatura</Label>
                            <Input style={{ width: '65px', display: 'inline', marginLeft: '20px' }} className='input-encomenda' type="number" name="temperatura"
                                   id="temperatura" min="0"
                                   max="20" value={this.state.temperatura} onChange={this.handleTemperaturaChange}>
                            </Input>

                            <Label style={{ marginLeft: '20px' }} for="tamanho">Tamanho</Label>
                            <Input style={{ width: '65px', display: 'inline', marginLeft: '20px' }} type="select" name="tamanho" id="tamanho"
                                   value={this.state.tamanho} onChange={this.handleTamanhoChange}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </Input>

                            <Label style={{ display: 'block', marginTop: '20px' }} for="data_de_entrega_pretendida">Data e hora de entrega</Label>
                            <Input
                                style={{ width: '250px', display: 'block' }}
                                type="datetime-local"
                                name="data_de_entrega_pretendida"
                                id="data_de_entrega_pretendida"
                                placeholder="Data de Entrega"
                                onChange={this.handleDataDeEntregaChange}
                            >
                            </Input>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="cacifo">Cacifo</Label>
                                <Input type="select" name="cacifo" id="cacifo"
                                       value={this.state.cacifo_id} onChange={this.handleCacifoChange}>
                                    {this.state.cacifos_livres.map(cacifo => {

                                        return (
                                            <option value={cacifo.id}>
                                                {cacifo.id}
                                            </option>
                                        )
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="cliente">Cliente</Label>
                                <Input type="select" name="cliente" id="cliente"
                                       value={this.state.cliente_id} onChange={this.handleClienteChange}>
                                    {this.state.clientes.map(cliente => {
                                        return (
                                            <option value={cliente.id}>
                                                {cliente.nome}
                                            </option>
                                        )
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>


                    </Row>

                    <Row>
                        <Col>
                            <Input
                                type="textarea"
                                label="Observações"
                                name="observacoes"
                                placeholder="Introduza uma observação..."
                                value={observacoes}
                                onChange={this.onChange}
                                error={errors.observacoes}
                            />
                        </Col>
                    </Row>

                    <Button
                        style={{
                            display: 'block',
                            float: 'center',
                            width: 'auto',
                            marginTop: '20px',
                            marginRight: 'auto',
                            backgroundColor: 'rgb(181, 160, 251)',
                            border: 'none'
                        }} size="sm">
                        Adicionar encomenda
                    </Button>



                </Form>
            </main>
        );
    }
}

