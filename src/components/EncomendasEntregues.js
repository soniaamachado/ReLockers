import React from 'react';
import '../css/Encomendas.css'
import {Table} from "reactstrap";
import axios from "axios/index";
import moment from "moment";
import {Link} from "react-router-dom";


export default class EncomendasEntregues extends React.Component {
    state = {
        encomendas: [],
        users: []
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/encomendas')
            .then(response => {
                this.setState({encomendas: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        const encomendas = this.state.encomendas;
        console.log(encomendas);

        return (
            <Table className='table_in table-hover' responsive>
                <thead>
                <tr>
                    <th>#</th>
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

                {encomendas.map(encomenda => {

                    const {id, data_de_entrega,data_de_levantamento, temperatura, tamanho, localizacao, tempolimite_de_levantamento, cliente, cacifo, users} = encomenda;
                    const data_split = data_de_entrega.split(" ");
                    const data_final= data_de_levantamento - data_de_entrega;
                    console.log(data_final);

                    const end = moment(data_split[0]); //todays date
                    const now = moment("1971-04-06"); // another date
                    const duration = moment.duration(now.diff(end));
                    const days = duration.asDays();
                    console.log(days);


                    return (
                        <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>{data_split[0]}</td>
                            <td>{data_split[1]}</td>
                            <td>{localizacao}</td>
                            <td>{temperatura}ºC</td>
                            <td>{tamanho}</td>
                            <td>{cliente.nome}</td>
                            {encomenda.users.map(user =>
                                <td>{user.nome}</td>
                            )}
                            <td>{cacifo.numero}</td>

                            <td>{days} dias</td>
                            <td>
                                <span className="dropdown">
				                        <button id="btnSearchDrop2" style={{backgroundColor: '#b5a0fb', border: 'none'}}
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
				                            <Link to={{pathname: `detail/${id}`, query: {id: id}}} className="dropdown-item">
                                                <i className="material-icons md-18 icon">remove_red_eye</i> Abrir</Link>
				                            <a href="#" className="dropdown-item"><i className="material-icons md-18 icon">create</i> Editar</a>
				                            <a href="#" className="dropdown-item"><i className="material-icons md-18 icon">delete</i> Remover</a>
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
