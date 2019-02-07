import React, { Component } from 'react';
import "../css/DetalheCacifo.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button, Col } from "reactstrap";
import * as header from './constants/HeaderConstant';

class Detalhes_Estafeta extends Component {

    state = {
        cacifos: []


    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/cacifos/ ' + this.props.match.params.id, { headers: header.HEADER })
            .then(response => {
                this.setState({ cacifos: response.data.data });

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const cacifos = this.state.cacifos;


        if (cacifos.length === 0) {
            return (
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div style={{ verticalAlign: 'middle', height: '100%' }}>
                        <div className="card-header bg-transparent border-0">
                            <h2 className="error-code">404</h2>
                            <h3 className="text-uppercase text-center">A página que procurou não existe</h3>

                        </div>

                        <Col>
                            <Button style={{ backgroundColor: '#5887F9', border: 'none', display: 'block', margin: 'auto' }}>
                                <Link style={{ color: 'white' }} to="/" >
                                    <i style={{ verticalAlign: 'middle' }} className="material-icons m-18 ">home</i> Página Inicial</Link>
                            </Button>
                        </Col>
                    </div>
                </main>
            )
        }
        else {
            return (
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

                    <div className="card-content collapse show">
                        <div className="card-body">

                            <ol className="breadcrumb">
                                <li><Link to={'/cacifos'}><i style={{ width: '20%', fontStyle: 'none' }}
                                    className="material-icons md-24 nav_icon">arrow_back</i></Link>
                                </li>
                                <li className="breadcrumb-item"><Link to={'/cacifos'}>Cacifos</Link>
                                </li>
                                <li className="breadcrumb-item"><Link to={'#'}>Detalhes de Cacifo</Link>
                                </li>
                            </ol>

                            <div className="table-responsive table_estafeta">
                                <table className="table">

                                    <tbody>
                                        <tr>
                                            <th scope="row">Identificador</th>
                                            <td>{cacifos.id}</td>

                                        </tr>

                                        <tr>
                                            <th scope="row">Número</th>
                                            <td>{cacifos.numero}</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Código</th>
                                            <td>{cacifos.codigo}</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="table-responsive table_estafeta">
                                <table className='table'>

                                    <tr>
                                        <th scope="row">Temperatura</th>
                                        <td>{cacifos.temperatura}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Tamanho</th>
                                        <td>{cacifos.tamanho.tamanho}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Disponibilidade</th>
                                        <td>{cacifos.estado.estado}</td>


                                    </tr>
                                    <tr>
                                        <th scope="row">Localização</th>
                                    </tr>
                                    <tr style={{ textAlign: 'center' }}>
                                        <div style={{ margin: 'auto' }}>
                                            <div className="view view-cascade gradient-card-header peach-gradient">
                                            </div>
                                            <div className="card-body card-body-cascade text-center">
                                                <div id="map-container-google-9"
                                                    className="z-depth-1-half map-container-5"
                                                    style={{ height: '300px' }}>
                                                    <iframe title={cacifos.id}
                                                        src={"https://maps.google.com/maps?q=" + String(cacifos.localizacao.lat) + "," + String(cacifos.localizacao.lng) + "&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                                                        frameBorder="0" style={{ border: '0' }} allowFullScreen>
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>

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

