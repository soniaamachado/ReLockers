import React, {Component} from 'react';
import "../css/Inicio.css";
import {Card, CardBody, CardText, CardTitle, Table} from "reactstrap";
import {NavLink} from "react-router-dom";

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
                        <div
                            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                            <h5>Encomendas por entregar</h5>
                            <div className="btn-toolbar mb-2 mb-md-0">
                            </div>
                        </div>

                        <Table className='table_in' borderless>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Data</th>
                                <th>Hora</th>
                                <th>Local</th>
                                <th>Cliente</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">200</th>
                                <td>01/11/2020</td>
                                <td>20:30h</td>
                                <td>Universidade de Aveiro</td>
                                <td>Sónia Machado</td>
                            </tr>
                            <tr>
                                <th scope="row">250</th>
                                <td>01/11/2020</td>
                                <td>20:30h</td>
                                <td>Universidade de Aveiro</td>
                                <td>Sónia Machado</td>
                            </tr>
                            <tr>
                                <th scope="row">255</th>
                                <td>01/11/2020</td>
                                <td>20:30h</td>
                                <td>Universidade de Aveiro</td>
                                <td>Sónia Machado</td>
                            </tr>
                            <tr>
                                <th scope="row">400</th>
                                <td>01/11/2020</td>
                                <td>20:30h</td>
                                <td>Universidade de Aveiro</td>
                                <td>Sónia Machado</td>
                            </tr>
                            <tr>
                                <th scope="row">820</th>
                                <td>01/11/2020</td>
                                <td>20:30h</td>
                                <td>Universidade de Aveiro</td>
                                <td>Sónia Machado</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>


                    {/*Tabela estafetas*/}
                    <div className='col-6' style={{display: 'inline-block', margin: 'auto'}}>
                        <div
                            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                            <h5>Estafetas disponiveis</h5>
                            <div className="btn-toolbar mb-2 mb-md-0">
                            </div>
                        </div>

                        <Table className='table_in' borderless>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Fotografia</th>
                                <th>Primeiro nome</th>
                                <th>Ultimo nome</th>
                                <th>Local de trabalho</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><img className='img_avatar' alt={'lol'}
                                         src={'https://www.comshalom.org/wp-content/uploads/2018/02/pexels-photo-683381.jpeg'}/>
                                </td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td><img style={{width: '40px', height: '40px', borderRadius: '50%'}} alt={'lol'}
                                         src={'https://www.comshalom.org/wp-content/uploads/2018/02/pexels-photo-683381.jpeg'}/>
                                </td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td><img style={{width: '40px', height: '40px', borderRadius: '50%'}} alt={'lol'}
                                         src={'https://www.comshalom.org/wp-content/uploads/2018/02/pexels-photo-683381.jpeg'}/>
                                </td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

            </main>
        );
    }
}

export default Inicio;
