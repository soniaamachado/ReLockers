import React, { Component } from 'react';
import "../css/Estafetas.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import * as header from './constants/HeaderConstant';


export default class TabelaEstafetasInicio extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/users', { headers: header.HEADER })
            .then(response => {
                this.setState({ users: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {

        const users = this.state.users;

        return (

            <Table className='table_in table-hover' responsive>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Trabalho</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>


                    {users.slice(0, 5).map(user => {
                        let { id, nome, email, local_de_trabalho } = user;
                        return (
                            <tr key={id}>
                                <td>{nome}</td>
                                <td>{email}</td>
                                <td>{local_de_trabalho}</td>
                                <td>
                                    <span className="dropdown">
                                        <button id="btnSearchDrop2" style={{ backgroundColor: '#b5a0fb', border: 'none', width: '68px' }}
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
                                            <Link to={{ pathname: `detalheEstafeta/${id}`, query: { id: id } }} className="dropdown-item"> <i className="material-icons md-18 icon">remove_red_eye</i> Abrir</Link>
                                            <Link to="#" className="dropdown-item"><i className="material-icons md-18 icon">create</i> Editar</Link>
                                            <Link to="#" className="dropdown-item"><i className="material-icons md-18 icon">delete</i> Remover</Link>
                                        </span>
                                    </span>
                                </td>

                            </tr>

                        );

                    })}
                </tbody>
            </Table>
        );
    }
}
