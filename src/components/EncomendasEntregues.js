import React from 'react';

import {Table} from "reactstrap";


export default class EncomendasEntregues extends React.Component {
    render() {
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
                    <tr>
                        <th scope="row">200</th>
                        <td>01/11/2020</td>
                        <td>temperatura}</td>
                        <td>Universidade de Aveiro</td>
                        <td>Sónia Machado</td>
                        <td>20ºC</td>
                        <td>Sónia Machado</td>
                        <td>Universidade de Aveiro</td>
                        <td>Sónia Machado</td>
                        <td>Sónia Machado</td>
                        <td>Editar</td>
                    </tr>
                    </tbody>
                </Table>
        );
    }
}
