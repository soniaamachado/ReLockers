import React, {Component} from 'react';
import "../css/Estafetas.css";
import axios from 'axios';
import {Link} from "react-router-dom";
import {Table} from "reactstrap";
class Estafetas extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/users')
            .then(response => {
                this.setState({users: response.data.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {

        let pesquisaEstafetas=this.state.users.filter(
            (user)=>{
                return user.nome.indexOf(this.state.search) !==-1;
            }
        );

        const users = this.state.users;

        return (

            <main style={{zIndex: '-15555px'}} role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h2">Estafetas</h1>
                </div>
                <div style={{textAlign: 'center', marginBottom: '50px'}}>
                    <i className="material-icons md-24" style={{verticalAlign:'middle'}}>location_on</i>
                    <h6 style={{display: 'inline', verticalAlign:'middle'}}>Aveiro, Portugal</h6>
                    <a href={'/definicoes'} style={{marginLeft: '5px', fontSize: '10px', display: 'inline',verticalAlign:'middle'}}>Alterar</a>
                </div>

                <Table className='table_in table-hover' responsive>
                    <thead>
                    <tr>
                        <th>Número</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Contacto</th>
                        <th>Local de trabalho</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>


                {users.map(user => {
                    const {id, nome,telefone, email,local_de_trabalho} = user;
                    return (
                        <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>{nome}</td>
                            <td>{email}</td>
                            <td>{telefone}</td>
                            <td>{local_de_trabalho}</td>
                            <td>
                                <span className="dropdown">
				                        <button id="btnSearchDrop2" style={{backgroundColor: '#b5a0fb', border: 'none', width:'68px'}}
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
				                            <Link to={{pathname: `detalheEstafeta/${id}`, query: {id: id}}} className="dropdown-item"> <i className="material-icons md-18 icon">remove_red_eye</i> Abrir</Link>
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

            </main>

        );
    }
}

export default Estafetas;

