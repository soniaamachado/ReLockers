import React, {Component} from 'react';
import "../css/Cacifos.css";
import axios from 'axios';
import {Badge, Button, Card, CardBody} from "reactstrap";
import {NavLink} from "react-router-dom";

class Cacifos extends Component {
    state = {
        cacifos: []
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/cacifos')
            .then(response => {
                this.setState({cacifos: response.data.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {

        const cacifos = this.state.cacifos;

        return (

            <main style={{zIndex: '-15555px'}} role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <p className="h2">Cacifos</p>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    </div>
                </div>
                <div style={{textAlign: 'center', marginBottom: '50px'}}>

                    <svg width="15" height="15" viewBox="0 0 54.757 54.757" fill="none"
                         xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1"
                         strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
                        <path
                            d="M27.557,12c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S31.416,12,27.557,12z M27.557,24c-2.757,0-5-2.243-5-5
		s2.243-5,5-5s5,2.243,5,5S30.314,24,27.557,24z"/>
                        <path
                            d="M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952
		L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M41.099,31.431L27.38,51.243L13.639,31.4
		C8.44,24.468,9.185,13.08,15.235,7.031C18.479,3.787,22.792,2,27.38,2s8.901,1.787,12.146,5.031
		C45.576,13.08,46.321,24.468,41.099,31.431z"/>
                    </svg>
                    <h6 style={{display: 'inline'}}>Aveiro, Portugal</h6>
                    <NavLink to={'/definicoes'}
                             style={{marginLeft: '5px', fontSize: '10px', display: 'inline'}}>Alterar</NavLink>

                </div>


                {cacifos.map(cacifo => {
                    const {temperatura, id, numero, tamanho} = cacifo;
                    return (
                        <div className='coluna_cacifo'>
                            <Card key={id} className='card_cacifo'>
                                <CardBody>
                                    <h4>{numero}</h4>
                                    <div style={{display: 'inline', marginBottom: '10px'}}>
                                        <h6>
                                            Temperatura
                                            <Badge className='badge'>{temperatura}ºC</Badge>
                                        </h6>
                                    </div>
                                    <div style={{display: 'inline'}}>
                                        <h6>
                                            Tamanho
                                            <Badge className='badge'>{tamanho.tamanho}</Badge>
                                        </h6>
                                    </div>

                                    <Button className='btn_detalhes' size="sm"> <NavLink to={'/cacifosDetalhes'}>Ver
                                        detalhes</NavLink>
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    );

                })}

            </main>

        );
    }
}

export default Cacifos;
