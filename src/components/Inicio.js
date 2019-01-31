import React, {Component} from 'react';
import "../css/Inicio.css";
import {Card, CardBody, CardText, CardTitle, Table} from "reactstrap";
import {NavLink} from "react-router-dom";
import MaterialIcon from 'material-icons-react';
import EncomendasPorEntregar from "./EncomendasPorEntregar";

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
                        <MaterialIcon icon={'location_on'}> </MaterialIcon>
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
                        <EncomendasPorEntregar/>
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
