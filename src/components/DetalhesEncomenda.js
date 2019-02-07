import React, { Component } from 'react';
import "../css/DetalheEstafeta.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import * as header from './constants/HeaderConstant';

class DetalhesEncomenda extends Component {

    state = {
        encomendas: [],
        estafetas: [],
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/encomendas/ ' + this.props.match.params.id, { headers: header.HEADER })
            .then(response => {
                this.setState({ encomendas: response.data.data });

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {

        const encomendas = this.state.encomendas;

        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className="card-content collapse show">
                    <div className="card-body">
                        <h1>Detalhes de Encomenda</h1>
                        <ol className="breadcrumb">
                            <li>
                                <Link to={'/encomendas'}>
                                    <i style={{ width: '20%' }} className="material-icons md-24 nav_icon">arrow_back</i></Link>
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
                                    <td>{encomendas.numero_encomenda}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Localização</th>
                                    <td>{encomendas.localizacao}</td>

                                </tr>

                                <tr>
                                    <th scope="row">Tamanho</th>
                                    <td>{encomendas.tamanho}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Temperatura requirida</th>
                                    <td>{encomendas.temperatura}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Data de entrega</th>
                                    <td>{encomendas.data_estimada}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Data de entrega no cacifo</th>
                                    <td>{encomendas.data_de_entrega}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Data de levantamento da encomenda</th>
                                    <td>{encomendas.data_de_levantamento}</td>

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

