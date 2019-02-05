import React, {Component} from 'react';
import "../css/Inicio.css";
import {Card, CardBody, CardText, CardTitle, Table} from "reactstrap";
import TabelaEncomendasInicio from "./TabelaEncomendasInicio";
import TabelaEstafetasInicio from "./TabelaEstafetasInicio";

class Inicio extends Component {

    render() {
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div style={{margin: 'auto'}}>
                    <div
                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                        <p className="h2">Início</p>
                        <div className="btn-toolbar mb-2 mb-md-0">
                        </div>
                    </div>

                    <div style={{textAlign: 'center', marginBottom: '50px'}}>
                        <i className="material-icons md-24" style={{verticalAlign:'middle'}}>location_on</i>
                        <h6 style={{display: 'inline', verticalAlign:'middle'}}>Aveiro, Portugal</h6>
                        <a href={'/definicoes'} style={{marginLeft: '5px', fontSize: '10px', display: 'inline',verticalAlign:'middle'}}>Alterar</a>
                    </div>

                    <div className="row mbr-justify-content-center">
                        <Card className="wrap col">
                            <CardBody className='text-wrap'>
                                <CardTitle><h1 className="mbr-fonts-style mbr-bold mbr-section-title3">20</h1>
                                </CardTitle>
                                <CardText className="mbr-fonts-style text1 mbr-text display-6">Encomendas por entregar</CardText>
                            </CardBody>
                        </Card>
                        <Card className="wrap col">
                            <CardBody className='text-wrap'>
                                <CardTitle><h1 className="mbr-fonts-style mbr-bold mbr-section-title3">170</h1>
                                </CardTitle>
                                <CardText className="mbr-fonts-style text1 mbr-text display-6">Encomendas
                                    entregues</CardText>
                            </CardBody>
                        </Card>
                        <Card className="wrap col">
                            <CardBody className='text-wrap'>
                                <CardTitle><h1 className="mbr-fonts-style mbr-bold mbr-section-title3">20</h1>
                                </CardTitle>
                                <CardText className="mbr-fonts-style text1 mbr-text display-6">Encomendas a entregar</CardText>
                            </CardBody>
                        </Card>
                        <Card className="wrap col">
                            <CardBody className='text-wrap'>
                                <CardTitle><h1 className="mbr-fonts-style mbr-bold mbr-section-title3">15</h1>
                                </CardTitle>
                                <CardText className="mbr-fonts-style text1 mbr-text display-6">Encomendas para recolher</CardText>
                            </CardBody>
                        </Card>
                    </div>

                    {/*Tabela encomendas por entregar*/}
                    <div className='col-6' style={{display: 'inline-block', margin: 'auto'}}>
                        <TabelaEncomendasInicio/>
                    </div>


                    {/*Tabela estafetas*/}
                    <div className='col-6' style={{display: 'inline-block', margin: 'auto'}}>
                    <TabelaEstafetasInicio/>
                    </div>
                </div>

            </main>
        );
    }
}

export default Inicio;
