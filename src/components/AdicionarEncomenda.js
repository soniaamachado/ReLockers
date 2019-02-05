import React, { Component } from "react";
import axios from "axios";
import TextInputGroup from "./forms/TextInput";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

export default class AdicionarEncomenda extends Component {

    state = {
        estado_encomenda: 0,
        numero_encomenda: 0,
        data_de_entrada_no_sistema: "",
        data_de_entrega_pretendida: "",
        tempo_limite_de_levantamento: "",
        tamanho: "",
        observacoes: "",
        temperatura: "",
        cacifo_id: "",
        cliente_id: "",
        errors: {}
    };


    onSubmit = e => {
        e.preventDefault();

        let {
            estado_encomenda, cacifo_id, cliente_id, numero_encomenda,
            data_de_entrada_no_sistema, data_de_entrega_pretendida,
            tempo_limite_de_levantamento, tamanho, temperatura, observacoes
        } = this.state;


        // if (observacoes === "") {
        //     this.setState({ errors: { observacoes: "URL is required" } });
        //     return;
        // }
        // if (data_de_entrega_pretendida === "") {
        //     this.setState({ errors: { data_de_entrega_pretendida: "URL is required" } });
        //     return;
        // }
        // if (tempo_limite_de_levantamento === "") {
        //     this.setState({ errors: { tempo_limite_de_levantamento: "URL is required" } });
        //     return;
        // }
        // if (tamanho === "") {
        //     this.setState({ errors: { tamanho: "URL is required" } });
        //     return;
        // }
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
            numero_encomenda,
            // data_de_entrada_no_sistema,
            // data_de_entrega_pretendida,
            // tempo_limite_de_levantamento,
            // tamanho,
            // observacoes,
            // temperatura,
            // cacifo_id,
            // cliente_id
        };
        console.log(newEncomenda);
        // axios.post('http://167.99.202.225/api/encomendas', newEncomenda)
        //     .then(res => console.log(res.statusText));

        this.setState({
            estado_encomenda: 0,
            numero_encomenda: "",
            //     data_de_entrada_no_sistema: "",
            //     data_de_entrega_pretendida: "",
            //     tempo_limite_de_levantamento: "",
            //     tamanho: "",
            observacoes: "",
            temperatura: "",
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

    selectTamanho() {
        console.log(this.refs.selectTamanho.value);
    }

    render() {
        const {
            numero_encomenda, data_de_entrada_no_sistema, data_de_entrega_pretendida,
            tempo_limite_de_levantamento, tamanho, observacoes, temperatura, errors
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

                    <TextInputGroup
                        label="Número da encomenda *"
                        name="numero_encomenda"
                        placeholder="0"
                        value={numero_encomenda}
                        onChange={this.onChange}
                        type={"number"}
                        error={errors.numero_encomenda}
                    />

                    <TextInputGroup
                        label="Temperatura da encomenda [0°C - 20°C]"
                        name="temperatura"
                        placeholder="20°"
                        value={temperatura}
                        onChange={this.onChange}
                        type={"number"}
                        error={errors.temperatura}
                    />

                    <TextInputGroup
                        label="Observações"
                        name="observacoes"
                        placeholder="Introduza uma observação..."
                        value={observacoes}
                        onChange={this.onChange}
                        error={errors.observacoes}
                    />

                    <FormGroup>
                        <Label for="tamanho">Tamanho</Label>
                        <Input type="select" name="tamanho" id="tamanho" value={this.option} ref="tamanhoSelect">
                            {/* onChange={(e) => { this.selectTamanho(); }} */}
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </Input>
                    </FormGroup>

                    {/* <TextInputGroup
                        label="Tamanho da encomenda"
                        name="tamanho"
                        placeholder="Tamanho da encomenda... PASSAR PARA SELECT"
                        value={tamanho}
                        type={"select"}
                        onChange={this.onChange}
                        error={errors.tamanho}
                    /> */}

                    <TextInputGroup
                        label="Tamanho da encomenda"
                        name="tamanho"
                        placeholder="Tamanho da encomenda... PASSAR PARA SELECT"
                        value={tamanho}
                        type={"datetime-local"}
                        onChange={this.onChange}
                        error={errors.tamanho}
                    />

                    <FormGroup>
                        <Label for="data_de_entrega_pretendida">Entrega</Label>
                        <Input
                            type="datetime-local"
                            name="data_de_entrega_pretendida"
                            id="data_de_entrega_pretendida"
                            placeholder="Data de Entrega"
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
                        {/* <i style={{ verticalAlign: 'middle' }} className="material-icons md-24">add</i> */}
                        Adicionar encomenda
                        </Button>

                </form>
            </main >
            // <main>
            //     <Form onSubmit={this.onSubmit}>
            //         <FormGroup>
            //             <Label for="numero_encomenda">Tamanho</Label>
            //             <Input type="number" name="numero_encomenda" id="numero_encomenda" />
            //         </FormGroup>

            //         <FormGroup row>
            //             <Label for="observacoes" sm={2}>Observações</Label>
            //             <Col sm={10}>
            //                 <Input type="textarea" name="observacoes" id="observacoes" />
            //             </Col>
            //         </FormGroup>


            //         <FormGroup check row>
            //             <Col sm={{ size: 10, offset: 2 }}>
            //                 <Button>Submit</Button>
            //             </Col>
            //         </FormGroup>

            //     </Form>
            // </main>
        );
    }
}

