import React from 'react';
import '../css/Encomendas.css'
import {Alert, Table} from "reactstrap";
import axios from "axios/index";
import moment from "moment";
import {Link} from "react-router-dom";


export default class EncomendasEntregues extends React.Component {
    state = {
        encomendas: [],
        estafetas: []
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/encomendas')
            .then(response => {
                this.setState({encomendas: response.data.data});
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
                    <th>Número</th>
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


                    const {id, numero_encomenda, temperatura, tamanho, tempo_limite_de_levantamento, data_de_levantamento, data_de_entrega_pretendida, data_de_entrega, cliente, cacifo} = encomenda;

                    const data_entrega = data_de_entrega_pretendida.split(" ");

                    console.log(id);
                    console.log(temperatura);

                    const m = new Date();
                    const new_timestamp =
                        m.getUTCFullYear() + "-" +
                        ("0" + (m.getUTCMonth() + 1)).slice(-2) + "-" +
                        ("0" + m.getUTCDate()).slice(-2) + " " +
                        ("0" + m.getUTCHours()).slice(-2) + ":" +
                        ("0" + m.getUTCMinutes()).slice(-2) + ":" +
                        ("0" + m.getUTCSeconds()).slice(-2);
                    const prazo_levantamento = new_timestamp.split(" ");
                    const data_levantamento= data_de_levantamento.split(" ");

                    const data_split = tempo_limite_de_levantamento.split(" ");
                    const now = moment(data_split[0]); //todays date
                    const end = moment(prazo_levantamento[0]); // another date
                    const duration = moment.duration(now.diff(end));
                    let days = duration.asDays();

                    if (days <= 0) {
                        days =
                            <Alert color="danger">
                                Prazo excedido
                            </Alert>
                    }
                    else if (days > 0) {
                        days =
                            <Alert color="warning">
                                Levantamento em {parseInt(days)} dias
                            </Alert>;

                            if (data_de_levantamento !=null){
                                days=
                                <Alert color="success">
                                    Levantada em {data_levantamento[0]}
                                </Alert>;
                            }
                    }


                    if (data_de_entrega == null) {
                        return (
                            null
                        );
                    }


                    return (
                        <tr key={id}>
                            <th scope="row">{numero_encomenda}</th>
                            <td>{data_entrega[0]}</td>
                            <td>{data_entrega[1]}</td>
                            <td>{cacifo.localizacao.nome}</td>
                            <td>{temperatura}ºC</td>
                            <td>{tamanho}</td>
                            <td>{cliente.nome}</td>
                            {encomenda.estafeta.map(estafeta =>
                                <td key={id}><Link to={{pathname: `detalheEstafeta/${id}`, query: {id: id}}}> {estafeta.nome}</Link></td>
                            )}
                            <td><Link to={{pathname: `detalheCacifo/${cacifo.id}`, query: {id: id}}}>{cacifo.numero} </Link></td>

                            <td>{days}</td>
                            <td>
                                <span className="dropdown">
				                        <button id="btnSearchDrop2"
                                                style={{backgroundColor: '#b5a0fb', border: 'none', width: '68px'}}
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
				                            <Link to={{pathname: `detalheEncomenda/${id}`, query: {id: id}}}
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
