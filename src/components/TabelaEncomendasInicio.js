import React from 'react';
import '../css/Encomendas.css'
import { Alert, Table } from "reactstrap";
import axios from "axios/index";
import moment from "moment";
import { Link } from "react-router-dom";

const HEADER = {
    "Accept": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("access_token")}`
}

//adicionar 
//axios.get('http://localhost:80/api/encomendas', { headers: HEADER })

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
        axios.get('http://167.99.202.225/api/encomendas')
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
        console.log(this.state.encomendas_nao_entregues);
        const encomendas = this.state.encomendas;
        console.log(encomendas);

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

                        let { id, numero_encomenda, tempo_limite_de_levantamento, data_de_entrega_pretendida, cacifo } = encomenda;


                        const data_entrega = data_de_entrega_pretendida.split(" ");

                        const m = new Date();
                        const new_timestamp =
                            m.getUTCFullYear() + "-" +
                            ("0" + (m.getUTCMonth() + 1)).slice(-2) + "-" +
                            ("0" + m.getUTCDate()).slice(-2) + " " +
                            ("0" + m.getUTCHours()).slice(-2) + ":" +
                            ("0" + m.getUTCMinutes()).slice(-2) + ":" +
                            ("0" + m.getUTCSeconds()).slice(-2);
                        const prazo_levantamento = new_timestamp.split(" ");


                        const data_split = tempo_limite_de_levantamento.split(" ");
                        const now = moment(data_split[0]); //todays date
                        const end = moment(prazo_levantamento[0]); // another date
                        const duration = moment.duration(now.diff(end));
                        let days = duration.asDays();

                        if (days <= 0) {
                            days =
                                <Alert color="danger" style={{ height: '35px', verticalAlign: 'middle' }}>
                                    <i style={{ verticalAlign: 'middle', fontSize: '18px', marginBottom: '12px' }}
                                        className='material-icons m-16'>warning</i>
                                </Alert>
                        }
                        else if (days > 0) {
                            days =
                                <Alert color="warning">
                                    Levantamento em {parseInt(days)} dias
                    </Alert>
                        }

                        return (
                            <tr key={id}>
                                <th scope="row">{id}</th>
                                <td>{data_entrega[0]}</td>
                                <td>{data_entrega[1]}</td>
                                {<td>{cacifo.localizacao.nome === null ? "" : cacifo.localizacao.nome} </td>}
                                <td>{days}</td>
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
                                            <Link to={{ pathname: `detail/${id}`, query: { id: id } }}
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
