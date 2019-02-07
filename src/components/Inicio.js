import React, { Component } from 'react';
import "../css/Inicio.css";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import TabelaEncomendasInicio from "./TabelaEncomendasInicio";
import TabelaEstafetasInicio from "./TabelaEstafetasInicio";
import axios from "axios/index";
import CountUp from 'react-countup';
import * as header from './constants/HeaderConstant';


class Inicio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            encomendas: [],
            encomendas_entregues: [],
            encomendas_por_entregar: [],
            encomendas_para_recolher: [],
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
                    encomendas_por_entregar: [...prevState.encomendas_por_entregar, encomenda]

                }))
            } else if (encomenda.data_de_entrega != null) {
                this.setState(prevState => ({
                    encomendas_entregues: [...prevState.encomendas_entregues, encomenda]
                }))
            }
        });
    }


    render() {

        const encomendas_por_entregar = this.state.encomendas_por_entregar;
        const encomendas_entregues = this.state.encomendas_entregues;


        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div style={{ margin: 'auto' }}>

                    <div style={{ textAlign: 'center', marginBottom: '50px', marginTop: '50px' }}>
                        <i className="material-icons md-24" style={{ verticalAlign: 'middle' }}>location_on</i>
                        <h6 style={{ display: 'inline', verticalAlign: 'middle' }}>Aveiro, Portugal</h6>
                        <a href={'/definicoes'} style={{
                            marginLeft: '5px',
                            fontSize: '10px',
                            display: 'inline',
                            verticalAlign: 'middle'
                        }}>Alterar</a>
                    </div>

                    <div className="row mbr-justify-content-center">
                        <Card className="wrap col">
                            <CardBody className='text-wrap'>
                                <CardTitle><h1 className="mbr-fonts-style mbr-bold mbr-section-title3"><CountUp
                                    start={0} end={encomendas_por_entregar.length} duration={5} /></h1>
                                </CardTitle>
                                <CardText className="mbr-fonts-style text1 mbr-text display-6 texto_cards">Encomendas
                                    por entregar</CardText>
                            </CardBody>
                        </Card>
                        <Card className="wrap col">
                            <CardBody className='text-wrap'>
                                <CardTitle><h1 className="mbr-fonts-style mbr-bold mbr-section-title3"><CountUp
                                    start={0} end={encomendas_entregues.length} duration={5} /></h1>
                                </CardTitle>
                                <CardText className="mbr-fonts-style text1 mbr-text display-6 texto_cards">Encomendas
                                    entregues</CardText>
                            </CardBody>
                        </Card>
                        <Card className="wrap col">
                            <CardBody className='text-wrap'>
                                <CardTitle><h1 className="mbr-fonts-style mbr-bold mbr-section-title3">
                                    {encomendas_entregues.map((encomenda, index) => {
                                        let tempo_limite_de_levantamento = encomenda;
                                        const m = new Date();
                                        const new_timestamp =
                                            m.getUTCFullYear() + "-" +
                                            ("0" + (m.getUTCMonth() + 1)).slice(-2) + "-" +
                                            ("0" + m.getUTCDate()).slice(-2) + " " +
                                            ("0" + m.getUTCHours()).slice(-2) + ":" +
                                            ("0" + m.getUTCMinutes()).slice(-2) + ":" +
                                            ("0" + m.getUTCSeconds()).slice(-2);

                                        if (new_timestamp <= tempo_limite_de_levantamento) {
                                            tempo_limite_de_levantamento =
                                                encomendas_entregues.length
                                        }

                                        else {
                                            tempo_limite_de_levantamento =
                                                0
                                        }
                                        if (index < 1) {
                                            return (
                                                <CountUp start={0} end={tempo_limite_de_levantamento} duration={5} />
                                            )
                                        }
                                    })}

                                </h1>
                                </CardTitle>
                                <CardText className="mbr-fonts-style text1 mbr-text display-6 texto_cards">Encomendas
                                    para recolher</CardText>
                            </CardBody>
                        </Card>
                    </div>

                    {/*Tabela encomendas por entregar*/}
                    <div className='col-6' style={{ display: 'inline-block', margin: 'auto' }}>
                        <TabelaEncomendasInicio />
                    </div>


                    {/*Tabela estafetas*/}
                    <div className='col-6' style={{ display: 'inline-block', margin: 'auto' }}>
                        <TabelaEstafetasInicio />
                    </div>
                </div>

            </main>
        );
    }
}

export default Inicio;
