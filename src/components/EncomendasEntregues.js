import React from 'react';

import {Table} from "reactstrap";
import axios from "axios/index";


export default class EncomendasEntregues extends React.Component {
    state = {
        encomendas: []
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/encomendas')
            .then(response => {
                this.setState({encomendas: response.data.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const encomendas = this.state.encomendas;

        return (
                <Table className='table_in' responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Local</th>
                        <th>Cliente</th>
                        <th>dfffdfdfdfdfdfdfd</th>
                        <th>Tamanho</th>
                        <th>Estafeta</th>
                        <th>Cacifo</th>
                        <th>Recolha em</th>
                        <th>Editar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {encomendas.map(encomenda => {
                        const {id, data_de_entrega,temperatura,tamanho,localizacao,tempolimite_de_levantamento} = encomenda;
                        return (
                            <tr>
                                <th scope="row">{id}</th>
                                <td>{data_de_entrega}</td>
                                <td>{temperatura}</td>
                                <td>{localizacao}</td>
                                <td>Sónia Machado</td>
                                <td>20ºC</td>
                                <td>{tamanho}</td>
                                <td>Universidade de Aveiro</td>
                                <td>Sónia Machado</td>
                                <td>{tempolimite_de_levantamento}</td>
                                <td>Editar</td>
                            </tr>
                        );

                    })}

                    </tbody>
                </Table>
        );
    }
}
