import React, {Component} from 'react';
import "../css/DetalheEstafeta.css";
import axios from 'axios';
import {Link} from "react-router-dom";

class DetalhesEncomenda extends Component {

    state = {
        encomendas: []


    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/encomendas/ '+ this.props.match.params.id )
            .then(response => {
                this.setState({encomendas: response.data.data});

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {


            return (
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div className="card-content collapse show">
                        <div className="card-body">
                            <h1>Detalhes de Encomenda</h1>
                            <ol className="breadcrumb">
                                <li><Link to={'/encomendas'}><i style={{width: '20%'}}
                                                             className="material-icons md-24 nav_icon">arrow_back</i></Link>
                                </li>
                                <li className="breadcrumb-item"><Link to="/encomendas">Encomendas</Link>
                                </li>
                                <li className="breadcrumb-item"> <Link to={'#'}>Detalhes de Encomenda</Link>
                                </li>

                            </ol>
                            <div className="table-responsive table_estafeta">
                                <table className="table">

                                    <tr>
                                        <th scope="row">Número de encomenda</th>
                                        <td>{this.state.encomendas.numero_encomenda}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Localização</th>
                                        <td>{this.state.encomendas.localizacao}</td>

                                    </tr>

                                    <tr>
                                        <th scope="row">Tamanho</th>
                                        <td>{this.state.encomendas.tamanho}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Temperatura requirida</th>
                                        <td>{this.state.encomendas.temperatura}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Data de entrega</th>
                                        <td>{this.state.encomendas.data_estimada}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Data de entrega no cacifo</th>
                                        <td>{this.state.encomendas.data_de_entrega}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Data de levantamento da encomenda</th>
                                        <td>{this.state.encomendas.data_de_levantamento}</td>

                                    </tr>

                                    <tr>
                                        <th scope="row">Estado da encomenda</th>
                                        <td>{this.state.encomendas.estado_encomenda}</td>

                                    </tr>




                                </table>
                            </div>
                            <div>
                                <p>Estafeta associado</p>
                            </div>

                            <div className="table-responsive table_estafeta">
                                <table className="table">

                                    <tr>
                                        <th scope="row">Nome</th>
                                        <td>a</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Email</th>
                                        <td>a</td>

                                    </tr>

                                    <tr>
                                        <th scope="row">Telefone</th>
                                        <td>a</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Local de trabalho</th>
                                        <td>a</td>

                                    </tr>




                                </table>
                            </div>
                        </div>
                    </div>




                </main>
            );
        }
    }


export default DetalhesEncomenda;

