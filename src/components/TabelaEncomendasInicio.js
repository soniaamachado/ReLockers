import React from 'react';
import '../css/Encomendas.css'
import { Alert, Table } from "reactstrap";
import axios from "axios/index";
import moment from "moment";
import { Link } from "react-router-dom";
import * as header from './constants/HeaderConstant';

export default class TabelaEncomendasInicio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            encomendas: [],
            encomendas_entregues: [],
            encomendas_nao_entregues: []
        };
    }

    componentDidMount() {
        axios.get('http://167.99.202.225/api/encomendas', { headers: header.HEADER })
            .then(response => {
                this.setState({ encomendas: response.data.data });
                this.stateOfOrder(this.state.encomendas);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    stateOfOrder() {

        this.state.encomendas.map((encomenda, index) => {
            if (encomenda.data_de_entrega == null) {
                this.setState(prevState => ({
                    encomendas_nao_entregues: [...prevState.encomendas_nao_entregues, encomenda]
                }))
            } else {
                this.setState(prevState => ({

                    encomendas_entregues: [...prevState.encomendas_entregues, encomenda]
                }))
            }
        });
    }


    render() {
        const encomendas = this.state.encomendas;


        const m = new Date();
        const new_timestamp =
            m.getUTCFullYear() + "-" +
            ("0" + (m.getUTCMonth() + 1)).slice(-2) + "-" +
            ("0" + m.getUTCDate()).slice(-2) + " " +
            ("0" + m.getUTCHours()).slice(-2) + ":" +
            ("0" + m.getUTCMinutes()).slice(-2) + ":" +
            ("0" + m.getUTCSeconds()).slice(-2);


        const prazo_levantamento = new_timestamp.split(" ");

        return (
            <Table className='table_in table-hover' responsive>
                <thead>
                    <tr>
                        <th>Número</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Local</th>
                        <th>Recolha</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.encomendas_nao_entregues.slice(0, 5).map(encomenda => {

                        let { id, tempo_limite_de_levantamento, data_de_entrega_pretendida, cacifo } = encomenda;

                        const data_entrega = data_de_entrega_pretendida.split(" ");

                        const tempoMaxLevantamento = tempo_limite_de_levantamento.split(" ").join(",");
                        const timeStamp = new_timestamp.split(" ").join(",");

                        const levantamento = moment(tempoMaxLevantamento); // Data máxima para levantamento do produto
                        const hoje = moment(timeStamp); // Data de hoje
                        const duration = moment.duration(levantamento.diff(hoje));

                        let hours = duration.asHours();
                        let minutes = duration.asMinutes();


                        if (hours <= 0 && minutes <= 0) {
                            tempo_limite_de_levantamento =
                                <td> </td>
                        }
                        else {
                            tempo_limite_de_levantamento =
                                <Alert color="warning">
                                    {parseInt(hours) < 10 ? '0' + parseInt(hours) : parseInt(hours)}h
                                    {parseInt(minutes) < 10 ? '0' + parseInt(minutes) : parseInt(minutes)}
                                </Alert>
                        }


                        return (
                            <tr key={id}>
                                <th scope="row">{id}</th>
                                <td>{data_entrega[0]}</td>
                                <td>{data_entrega[1]}</td>
                                {<td>{cacifo.localizacao.nome === null ? "" : cacifo.localizacao.nome} </td>}
                                <td>{tempo_limite_de_levantamento}</td>
                                <td>
                                    <span className="dropdown">
                                        <button id="btnSearchDrop2"
                                            style={{ backgroundColor: '#b5a0fb', border: 'none', width: '68px' }}
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
                                            <Link to={{ pathname: `detalheEncomenda/${id}`, query: { id: id } }}
                                                className="dropdown-item"> <i
                                                    className="material-icons md-18 icon">remove_red_eye</i> Abrir</Link>
                                            <Link to="#" className="dropdown-item"><i
                                                className="material-icons md-18 icon">create</i> Editar</Link>
                                            <Link to="#" className="dropdown-item"><i
                                                className="material-icons md-18 icon">delete</i> Remover</Link>
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