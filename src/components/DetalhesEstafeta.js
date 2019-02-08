import React, { Component } from 'react';
import "../css/DetalheEstafeta.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import * as header from './constants/HeaderConstant';

class DetalhesEstafeta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        axios.get('http://167.99.202.225/api/users/ ' + this.props.match.params.id + '/encomendas', { headers: header.HEADER })
            .then(response => {
                this.setState({ users: response.data.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        if (this.state.users.length === 0) {
            return null;
        }
        else {
            const { id, nome, email, telefone, data_nascimento } = this.state.users[0].estafeta[0];
            console.log(this.state.users[0].estafeta[0])

            return (
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div className="card-content collapse show">
                        <div className="card-body">
                            <h1>Detalhes de Estafeta</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/estafetas">Estafetas</Link>
                                </li>
                                <li className="breadcrumb-item"> <Link to={'#'}>Detalhes de Estafeta</Link>
                                </li>

                            </ol>
                            <div className="table-responsive table_estafeta">
                                <table className="table">
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Identificador</th>
                                            <td style={{ textAlign: "center" }}>
                                                {id}
                                            </td>

                                        </tr>

                                        <tr>
                                            <th scope="row">Nome</th>
                                            <td style={{ textAlign: "center" }}>
                                                {nome}
                                            </td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td style={{ textAlign: "center" }}>
                                                {email}
                                            </td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Telefone</th>
                                            <td style={{ textAlign: "center" }}>
                                                {telefone}
                                            </td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Data de nascimento</th>
                                            <td style={{ textAlign: "center" }}>
                                                {data_nascimento}
                                            </td>

                                        </tr>
                                    </tbody>

                                </table>

                            </div>

                            <div>
                                <p>Atividade de estafeta</p>
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


                                        {this.state.users.map((user, key) => {

                                            return (

                                                <tr>
                                                    <th scope="row">{this.state.users[key].id}</th>

                                                    <td>{this.state.users[key].cacifo.localizacao.nome}</td>
                                                    <td>{this.state.users[key].data_de_entrega}</td>
                                                    <td>{this.state.users[key].cacifo.numero}</td>
                                                </tr>
                                            )
                                        })}

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

export default DetalhesEstafeta;

