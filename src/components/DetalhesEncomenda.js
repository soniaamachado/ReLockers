import React, {Component} from 'react';
import "../css/DetalheEncomenda.css";

import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

class Detalhes_Encomenda extends Component {

    render() {
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className="chartjs-size-monitor" style={{
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    right: "0px",
                    bottom: "0px",
                    overflow: "hidden",
                    pointerEvents: "none",
                    visibility: "hidden",
                    zIndex: '-1'
                }}>
                    <div className="chartjs-size-monitor-shrink" style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        right: '0',
                        bottom: '0',
                        overflow: 'hidden',
                        pointerEvents: 'none',
                        visibility: 'hidden',
                        zIndex: '-1'
                    }}>
                        <div style={{position: 'absolute', width: '200%', height: '200%', left: '0', top: '0'}}></div>
                    </div>
                </div>
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h2">Detalhes de encomenda</h1>

                </div>


                <div>
                    <Breadcrumb tag="nav" listTag="div">

                        <BreadcrumbItem tag="a" href="#">Encomendas</BreadcrumbItem>
                        <BreadcrumbItem active tag="span">Encomenda x</BreadcrumbItem>
                    </Breadcrumb>
                </div>


                    <table className="table table_encomenda table-sm">

                        <tbody>
                        <tr>
                            <td>Identificador de encomenda</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Data estimada de entrega</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Data de entrega</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Data de levantamento</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Localização de encomenda</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Tamanho de encomenda</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Observações</td>
                            <td>1</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="table_encomenda table table-sm">

                        <tbody>

                        <tr>
                        <th className='detalhe_titulo'>Cliente</th>
                        </tr>

                        <tr>
                            <td className='detalhe_text'>Nome</td>
                            <td>1</td>

                        </tr>
                        <tr>
                            <td className='detalhe_text'>Apelido</td>
                            <td>1</td>

                        </tr>
                        <tr>
                            <td className='detalhe_text'>Email de cliente</td>
                            <td>1</td>

                        </tr>
                        <tr>
                            <td className='detalhe_text'>Telefone de cliente</td>
                            <td>1</td>

                        </tr>

                        </tbody>
                    </table>

                    <table className="table table-sm table_encomenda">

                        <tbody>

                        <tr>
                            <th className='detalhe_titulo'>Cacifo</th>
                        </tr>

                        <tr>
                            <td className='detalhe_text'>Número do cacifo</td>
                            <td>1</td>

                        </tr>
                        <tr>
                            <td className='detalhe_text'>Localização do cacifo</td>
                            <td>1</td>

                        </tr>
                        <tr>
                            <td className='detalhe_text'>Temperatura do cacifo</td>
                            <td>1</td>

                        </tr>

                        </tbody>
                    </table>
            </main>
        );
    }
}

export default Detalhes_Encomenda;

