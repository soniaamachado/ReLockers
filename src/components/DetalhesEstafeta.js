import React, {Component} from 'react';
import "../css/DetalheEstafeta.css";
import axios from 'axios';
import {Link} from "react-router-dom";

class Detalhes_Estafeta extends Component {

    state = {
        users: []
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/users/ '+ this.props.match.params.id + '/encomendas')
            .then(response => {
                this.setState({users: response.data.data});
                console.log(this.state.users[0].estafeta[0].nome);
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

                                    <tr>
                                        <th scope="row">Identificador</th>
                                        <td>{this.state.users[0].estafeta[0].id}</td>

                                    </tr>

                                    <tr>
                                        <th scope="row">Nome</th>
                                        <td>{this.state.users[0].estafeta[0].nome}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Email</th>
                                        <td>{this.state.users[0].estafeta[0].email}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Telefone</th>
                                        <td>{this.state.users[0].estafeta[0].telefone}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Data de nascimento</th>
                                        <td>{this.state.users[0].estafeta[0].data_nascimento}</td>

                                    </tr>

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
                                            )})}

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

