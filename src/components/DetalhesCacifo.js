import React, {Component} from 'react';
import "../css/DetalheEstafeta.css";
import axios from 'axios';
import {Card, Col, Row} from "reactstrap";

class Detalhes_Estafeta extends Component {

    state = {
        cacifos: []


    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/cacifos/ '+ this.props.match.params.id )
            .then(response => {
                this.setState({cacifos: response.data.data});
                console.log(this.state.cacifos[0].estafeta[0].nome);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        console.log('efef', (this.state.cacifos))
        if (this.state.cacifos.length === 0) {
            return null;
        }
        else {
            return (
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div className="card-content collapse show">
                        <div className="card-body">
                            <h1>Detalhes de Cacifo</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Cacifos</a>
                                </li>
                                <li className="breadcrumb-item"><a href="#">Detalhes de Cacifo</a>
                                </li>

                            </ol>
                            <div className="table-responsive table_estafeta">
                                <table className="table">

                                    <tr>
                                        <th scope="row">Identificador</th>
                                        <td>{this.state.cacifos.id}</td>

                                    </tr>

                                    <tr>
                                        <th scope="row">Número</th>
                                        <td>{this.state.cacifos.numero}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Temperatura</th>
                                        <td>{this.state.cacifos.temperatura}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Código</th>
                                        <td>{this.state.cacifos.codigo}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Tamanho</th>
                                        <td>{this.state.cacifos.tamanho.tamanho}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Disponibilidade</th>
                                        <td>{this.state.cacifos.estado.estado}</td>

                                    </tr>

                                </table>
                            </div>

                            <div>
                                <p>Encomenda</p>
                            </div>

                            <div className="table-responsive table estafeta">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Número de Encomenda</th>
                                        <th>Localização de entrega</th>
                                        <th>Data de entrega</th>
                                        <th>Número de Cacifo</th>

                                    </tr>
                                    </thead>



                                    <tbody>




                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>




                </main>
            );
        }
    }
}

export default Detalhes_Estafeta;

