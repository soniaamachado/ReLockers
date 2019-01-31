import React from 'react';

import {Table} from "reactstrap";
import axios from "axios/index";


export default class EncomendasEntregues extends React.Component {
    state = {
        encomendas: [

        ],
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/encomendas')
            .then(response => {
                this.setState({encomendas: response.data.data})
            })
            .catch(function (error) {
                console.log(error);
            });
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
                    <th>Temperatura</th>
                    <th>Tamanho</th>
                    <th>Cliente</th>
                    <th>Estafeta</th>
                    <th>Cacifo</th>
                    <th>Recolha até</th>
                    <th>Editar</th>
                </tr>
                </thead>
                <tbody>

                {encomendas.map(encomenda => {

                    const {id, data_de_entrega, temperatura, tamanho, localizacao, tempolimite_de_levantamento, cliente, cacifo} = encomenda;
                    const data_split = data_de_entrega.split(" ");

                    return (

                        <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>{data_split[0]}</td>
                            <td>{data_split[1]}</td>
                            <td>{localizacao}</td>
                            <td>{temperatura}ºC</td>
                            <td>{tamanho}</td>
                            <td>{cliente.nome}</td>
                            <td> </td>
                            <td>{cacifo.numero}</td>
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
