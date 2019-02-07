import React, { Component } from 'react';
import "../css/Cacifos.css";
import axios from 'axios';
import { Badge, Button, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import * as header from './constants/HeaderConstant';


export default class CacifosOcupados extends Component {
    state = {
        encomendas_cacifos: []
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/encomendas', { headers: header.HEADER })
            .then(response => {
                this.setState({ encomendas_cacifos: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {

        const encomendas_cacifos = this.state.encomendas_cacifos;

        return (
            <div style={{ margin: 'auto' }}>

                {encomendas_cacifos.map(cacifos => {
                    const { id, cacifo } = cacifos;

                    if (cacifo.estado.id === 2) {
                        return (
                            null
                        );
                    }



                    else
                        return (
                            <div className="coluna_cacifo" >
                                <Card key={id} style={{ display: 'inline-block' }} className='card_cacifo'>
                                    <CardBody>
                                        <h4>{cacifo.numero}</h4>
                                        <div style={{ display: 'inline', marginBottom: '10px' }}>
                                            <p>
                                                Temperatura
                                                <Badge className='badge'>{cacifo.temperatura}ºC</Badge>
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                Tamanho
                                                <Badge className='badge'>{cacifo.tamanho.tamanho}</Badge>
                                            </p>
                                        </div>

                                        <Button className='btn_detalhes' size="sm"> <Link to={{ pathname: `detalheCacifo/${id}`, query: { id: id } }} >Ver
                                            detalhes</Link>
                                        </Button>
                                    </CardBody>
                                </Card>
                            </div>
                        );

                })}

            </div>
        );
    }
}
