import React, { Component } from "react";
import axios from "axios";
import TextInputGroup from "./forms/TextInput";
import { Button, FormGroup, Input, Label } from "reactstrap";

export default class AdicionarEncomenda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            estafetas: [],
            administradores: [],
            estado_encomenda: 0,
            data_de_entrada_no_sistema: "",
            data_de_entrega_pretendida: "",
            tempo_limite_de_levantamento: "",
            tamanho: "S",
            observacoes: "",
            temperatura: 20,
            cacifo_id: "",
            cliente_id: "",
            errors: {}
        };

        this.handleTamanhoChange = this.handleTamanhoChange.bind(this);
        this.handleDataDeEntregaChange = this.handleDataDeEntregaChange.bind(this);
        this.handletempoLimiteDeLevantamento = this.handletempoLimiteDeLevantamento.bind(this);
        this.handleTemperaturaChange = this.handleTemperaturaChange.bind(this);
    }

    componentDidMount() {
        axios.get('http://167.99.202.225/api/users')
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
    }

    getCurrentDate() {

        const fullDate = new Date();

        const year = fullDate.getFullYear();
        const mouth = ("0" + (fullDate.getMonth() + 1)).slice(-2);
        const day = ("0" + fullDate.getDate()).slice(-2);

        const hour = fullDate.getHours();
        const min = (fullDate.getMinutes() < 10 ? '0' : '') + fullDate.getMinutes();
        const sec = (fullDate.getSeconds() < 10 ? '0' : '') + fullDate.getSeconds();

        return `${year}-${mouth}-${day} ${hour}:${min}:${sec}`;

    }

    onSubmit = e => {
        e.preventDefault();

        const {
            estado_encomenda, cacifo_id, cliente_id,
            temperatura, observacoes, tamanho
        } = this.state;

        if (this.state.data_de_entrega_pretendida == "") {
            this.setState({ errors: { data_de_entrega_pretendida: "URL is required" } });
            return;
        }

        if (this.state.tempo_limite_de_levantamento == "") {
            this.setState({ errors: { tempo_limite_de_levantamento: "URL is required" } });
            return;
        }

        const data_de_entrega_pretendida = this.state.data_de_entrega_pretendida.replace("T", " ") + ":00";
        const tempo_limite_de_levantamento = this.state.tempo_limite_de_levantamento.replace("T", " ") + ":00";
        const data_de_entrada_no_sistema = this.getCurrentDate();

        // if (cacifo_id === "") {
        //     this.setState({ errors: { temperatura: "URL is required" } });
        //     return;
        // }
        // if (cliente_id == "") {
        //     this.setState({ errors: { observacoes: "URL is required" } });
        //     return;
        // }

        const newEncomenda = {
            estado_encomenda,
            data_de_entrada_no_sistema,
            data_de_entrega_pretendida,
            tempo_limite_de_levantamento,
            tamanho,
            observacoes,
            temperatura,
            // cacifo_id,
            //cliente_id
        };

        console.log(newEncomenda);


        axios.post('http://167.99.202.225/api/encomendas', newEncomenda)
            .then(res => console.log(res.statusText))
            .catch(error => console.log(error));

        this.setState({
            estado_encomenda: 0,
            data_de_entrada_no_sistema: "",
            data_de_entrega_pretendida: "",
            tempo_limite_de_levantamento: "",
            tamanho: "",
            observacoes: "",
            temperatura: 20,
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

    handleTamanhoChange = (event) =>{
        this.setState({ tamanho: event.target.value });
    };


    handleDataDeEntregaChange = (event) => {
        this.setState({ data_de_entrega_pretendida: event.target.value });
        console.log(this.state.data_de_entrega_pretendida);

    };

    handletempoLimiteDeLevantamento = (event) => {
        console.log(this.state.tempo_limite_de_levantamento);
        this.setState({ tempo_limite_de_levantamento: event.target.value });
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
                    <h1 className="h2">Encomendas</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <i className="material-icons md-24" style={{ verticalAlign: 'middle' }}>location_on</i>
                    <h6 style={{ display: 'inline', verticalAlign: 'middle' }}>Aveiro, Portugal</h6>
                    <a href={'/definicoes'} style={{ marginLeft: '5px', fontSize: '10px', display: 'inline', verticalAlign: 'middle' }}>Alterar</a>
                </div>
                <form onSubmit={this.onSubmit}>

                    <FormGroup>
                        <Label for="tamanho">Temperatura da encomenda</Label>
                        <Input type="number" name="temperatura" id="temperatura" min="0" max="20" value={this.state.temperatura} onChange={this.handleTemperaturaChange}>
                        </Input>
                    </FormGroup>

                    <TextInputGroup
                        label="Observações"
                        name="observacoes"
                        placeholder="Introduza uma observação..."
                        value={observacoes}
                        onChange={this.onChange}
                        error={errors.observacoes}
                    />

                    <FormGroup>
                        <Label for="tamanho">Tamanho da encomenda</Label>
                        <Input type="select" name="tamanho" id="tamanho" value={this.state.tamanho} onChange={this.handleTamanhoChange}>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="estafeta">Atribuir estafeta</Label>

                        <Input type="select" name="estafeta" id="estafeta" value={this.state.estafetas}>
                            {this.state.estafetas.map(user => {
                                return (
                                    <option value={user.id}>{user.nome}</option>
                                )
                            })}
                        </Input>

                    </FormGroup>

                    <FormGroup>
                        <Label for="data_de_entrega_pretendida">Data de entrega pretendida</Label>
                        <Input
                            type="datetime-local"
                            name="data_de_entrega_pretendida"
                            id="data_de_entrega_pretendida"
                            placeholder="Data de Entrega"
                            onChange={this.handleDataDeEntregaChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="tempo_limite_de_levantamento">Data limite para levantamento</Label>
                        <Input
                            type="datetime-local"
                            name="tempo_limite_de_levantamento"
                            id="tempo_limite_de_levantamento"
                            placeholder="Data limite"
                            onChange={this.handletempoLimiteDeLevantamento}
                        />
                    </FormGroup>

                    <Button style={{
                        display: 'block',
                        float: 'center',
                        width: 'auto',
                        margin: 'auto',
                        backgroundColor: 'rgb(181, 160, 251)',
                        border: 'none'
                    }} size="sm">
                        Adicionar encomenda
                        </Button>

                </form>
            </main >
        );
    }
}

