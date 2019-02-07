import React, {Component} from 'react';
import '../css/Encomendas.css';
import {Nav, NavItem, Row, TabContent, TabPane, NavLink, Col, Button, Alert, Table} from "reactstrap";
import classnames from 'classnames';
import {Link} from "react-router-dom";
import axios from "axios/index";
import moment from "moment/moment";


class Encomendas extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            encomendas: [],
            encomendas_entregues: [],
            encomendas_por_entregar: []
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    componentDidMount() {
        axios.get('http://167.99.202.225/api/encomendas')
            .then(response => {
                this.setState({encomendas: response.data.data});
                this.stateOfOrder(this.state.encomendas);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    stateOfOrder() {

        this.state.encomendas.map((encomenda, index) => {
            if (encomenda.data_de_entrega == null) {
                this.setState(prevState => ({
                    encomendas_por_entregar: [...prevState.encomendas_por_entregar, encomenda]

                }))
            } else {
                this.setState(prevState => ({
                    encomendas_entregues: [...prevState.encomendas_entregues, encomenda]
                }))
            }
        });
    }


    render() {

        const encomendas_entregues = this.state.encomendas_entregues;
        const encomendas_por_entregar = this.state.encomendas_por_entregar;


        const m = new Date();
        const new_timestamp =
            m.getUTCFullYear() + "-" +
            ("0" + (m.getUTCMonth() + 1)).slice(-2) + "-" +
            ("0" + m.getUTCDate()).slice(-2) + " " +
            ("0" + m.getUTCHours()).slice(-2) + ":" +
            ("0" + m.getUTCMinutes()).slice(-2) + ":" +
            ("0" + m.getUTCSeconds()).slice(-2);


        const prazo_levantamento = new_timestamp.split(" ");


        return (
            <main style={{height: '100%'}} role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h2">Encomendas</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    </div>
                </div>
                <div style={{textAlign: 'center', marginBottom: '50px'}}>
                    <i className="material-icons md-24" style={{verticalAlign: 'middle'}}>location_on</i>
                    <h6 style={{display: 'inline', verticalAlign: 'middle'}}>Aveiro, Portugal</h6>
                    <a href={'/definicoes'} style={{
                        marginLeft: '5px',
                        fontSize: '10px',
                        display: 'inline',
                        verticalAlign: 'middle'
                    }}>Alterar</a>
                </div>

                <Col>

                    <Link to={'/adicionar_encomenda'}>
                        <Button style={{
                            float: 'right',
                            width: 'auto',
                            margin: 'auto',
                            backgroundColor: '#967ADC',
                            border: 'none'
                        }} size="sm">
                            <i style={{verticalAlign: 'middle'}} className="material-icons md-24">add</i>
                            Adicionar encomenda
                        </Button> </Link>

                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '1'})}
                                id={'tab_encomendas'}
                                onClick={() => {
                                    this.toggle('1');
                                }}
                            >
                                Por entregar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '2'})}
                                id={'tab_encomendas'}
                                onClick={() => {
                                    this.toggle('2');
                                }}
                            >
                                Entregues
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Table className='table_in table-hover' responsive>
                                    <thead>
                                    <tr>
                                        <th>Número</th>
                                        <th>Data</th>
                                        <th>Hora</th>
                                        <th>Local</th>
                                        <th>Temperatura</th>
                                        <th>Tamanho</th>
                                        <th>Cliente</th>
                                        <th>Estafeta</th>
                                        <th>Cacifo</th>
                                        <th>Recolha</th>
                                        <th>Ações</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {encomendas_por_entregar.map(encomenda => {

                                        let {id, temperatura, tamanho, tempo_limite_de_levantamento, data_de_entrega_pretendida, cliente, cacifo} = encomenda;

                                        const data_entrega = data_de_entrega_pretendida.split(" ");

                                        const tempoMaxLevantamento = tempo_limite_de_levantamento.split(" ").join(",");
                                        const timeStamp = new_timestamp.split(" ").join(",");

                                        const levantamento = moment(tempoMaxLevantamento); // Data máxima para levantamento do produto
                                        const hoje = moment(timeStamp); // Data de hoje
                                        const duration = moment.duration(levantamento.diff(hoje));

                                        let hours = duration.asHours();
                                        let minutes = duration.asMinutes();


                                        if (hours <= 0 && minutes<=0) {
                                            tempo_limite_de_levantamento =
                                                <td> </td>
                                        }
                                        else {
                                            tempo_limite_de_levantamento =
                                                <Alert color="warning">
                                                    {parseInt(hours) < 10 ? '0'+parseInt(hours) : parseInt(hours) }h
                                                    {parseInt(minutes) < 10 ? '0'+parseInt(minutes) : parseInt(minutes)}
                                                </Alert>
                                        }


                                        return (
                                            <tr key={id}>
                                                <th scope="row">{id}</th>
                                                <td>{data_entrega[0]}</td>
                                                <td>{data_entrega[1]}</td>
                                                <td>{cacifo.localizacao.nome} </td>
                                                <td>{temperatura}ºC</td>
                                                <td>{tamanho}</td>
                                                <td>{cliente.nome}</td>
                                                {encomenda.estafeta.map(estafeta =>
                                                    <td key={id}>
                                                        <Link
                                                            to={{
                                                                pathname: `detalheEstafeta/${id}`,
                                                                query: {id: id}
                                                            }}>
                                                            {estafeta.nome}
                                                        </Link>
                                                    </td>
                                                )}
                                                <td>
                                                    <Link to={{
                                                    pathname: `detalheCacifo/${cacifo.id}`,
                                                    query: {id: id}
                                                }}>{cacifo.numero} </Link>
                                                </td>

                                                <td>{tempo_limite_de_levantamento}</td>
                                                <td>
                                <span className="dropdown">
				                        <button
                                            id="btnSearchDrop2"
                                            style={{
                                                backgroundColor: '#b5a0fb',
                                                border: 'none',
                                                width: '68px'
                                            }}
                                            type="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            className="btn btn-dark dropdown-toggle dropdown-menu-right">

                                            <i className="material-icons md-18"
                                               style={{
                                                   color: 'white',
                                                   verticalAlign: 'middle',
                                                   marginRight: '5px'
                                               }}>settings</i>

                                        </button>
				                        <span aria-labelledby="btnSearchDrop2"
                                              className="btn_acoes dropdown-menu mt-1 dropdown-menu-right">
				                            <Link to={{pathname: `detalheEncomenda/${id}`, query: {id: id}}}
                                                  className="dropdown-item"> <i
                                                className="material-icons md-18 icon">remove_red_eye</i> Abrir</Link>
				                            <Link to="#" className="dropdown-item"><i
                                                className="material-icons md-18 icon">create</i> Editar</Link>
				                            <Link to={{pathname: `apagarEncomenda/${id}`, query: {id: id}}}
                                                  className="dropdown-item"><i
                                                className="material-icons md-18 icon">delete</i> Remover</Link>
				                        </span>
				                    </span>
                                                </td>

                                            </tr>

                                        );
                                    })}

                                    </tbody>
                                </Table>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Table className='table_in table-hover' responsive>
                                    <thead>
                                    <tr>
                                        <th>Número</th>
                                        <th>Data</th>
                                        <th>Hora</th>
                                        <th>Local</th>
                                        <th>Temperatura</th>
                                        <th>Tamanho</th>
                                        <th>Cliente</th>
                                        <th>Estafeta</th>
                                        <th>Cacifo</th>
                                        <th>Recolha</th>
                                        <th>Ações</th>
                                    </tr>
                                    </thead>
                                    <tbody>


                                    {encomendas_entregues.map(encomenda => {


                                        let {id, temperatura,data_de_levantamento, tamanho, tempo_limite_de_levantamento, data_de_entrega_pretendida, cliente, cacifo} = encomenda;

                                        const data_entrega = data_de_entrega_pretendida.split(" ");

                                        const tempoMaxLevantamento = tempo_limite_de_levantamento.split(" ").join(",");
                                        const timeStamp = new_timestamp.split(" ").join(",");

                                        const levantamento = moment(tempoMaxLevantamento); // Data máxima para levantamento do produto
                                        const hoje = moment(timeStamp); // Data de hoje
                                        const duration = moment.duration(levantamento.diff(hoje));

                                        let hours = duration.asHours();
                                        let minutes = duration.asMinutes();


                                        if (hours <= 0 && minutes<=0) {
                                            tempo_limite_de_levantamento =
                                                <Alert color="danger">
                                                    Prazo excedido
                                                </Alert>
                                        }
                                        else if (data_de_levantamento !=null){

                                            const data_levantamento = data_de_levantamento.split(" ");
                                            tempo_limite_de_levantamento =
                                                <Alert color="success">
                                                    Levantada em {data_levantamento[0]}
                                                </Alert>;
                                        }
                                        else {
                                            tempo_limite_de_levantamento =
                                                <Alert color="warning">
                                                    {parseInt(hours) < 10 ? '0'+parseInt(hours) : parseInt(hours) }h
                                                    {parseInt(minutes) < 10 ? '0'+parseInt(minutes) : parseInt(minutes)}
                                                </Alert>
                                        }



                                        return (
                                            <tr key={id}>
                                                <th scope="row">{id}</th>
                                                <td>{data_entrega[0]}</td>
                                                <td>{data_entrega[1]}</td>
                                                <td>{cacifo.localizacao.nome}</td>
                                                <td>{temperatura}ºC</td>
                                                <td>{tamanho}</td>
                                                <td>{cliente.nome}</td>
                                                {encomenda.estafeta.map(estafeta =>
                                                    <td key={id}><Link to={{
                                                        pathname: `detalheEstafeta/${id}`,
                                                        query: {id: id}
                                                    }}> {estafeta.nome}</Link></td>
                                                )}
                                                <td><Link to={{
                                                    pathname: `detalheCacifo/${cacifo.id}`,
                                                    query: {id: id}
                                                }}>{cacifo.numero} </Link></td>

                                                <td>{tempo_limite_de_levantamento}</td>
                                                <td>
                                <span className="dropdown">
				                        <button id="btnSearchDrop2"
                                                style={{backgroundColor: '#b5a0fb', border: 'none', width: '68px'}}
                                                type="button" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false"
                                                className="btn btn-dark dropdown-toggle dropdown-menu-right">
                                            <i className="material-icons md-18" style={{
                                                color: 'white',
                                                verticalAlign: 'middle',
                                                marginRight: '5px'
                                            }}>settings</i>
                                        </button>
				                        <span aria-labelledby="btnSearchDrop2"
                                              className="btn_acoes dropdown-menu mt-1 dropdown-menu-right">
				                            <Link to={{pathname: `detalheEncomenda/${id}`, query: {id: id}}}
                                                  className="dropdown-item"> <i
                                                className="material-icons md-18 icon">remove_red_eye</i> Abrir</Link>
				                            <Link to="#" className="dropdown-item"><i
                                                className="material-icons md-18 icon">create</i> Editar</Link>

                                            <Link to={{pathname: `apagarEncomenda/${id}`, query: {id: id}}}
                                                  className="dropdown-item"><i
                                                className="material-icons md-18 icon">delete</i> Remover</Link>

				                        </span>
				                    </span>
                                                </td>
                                            </tr>
                                        );

                                    })}

                                    </tbody>
                                </Table>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Col>

            </main>

        );
    }
}

export default Encomendas;