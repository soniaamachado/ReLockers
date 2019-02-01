import React, {Component} from 'react';
import "../css/Cacifos.css";
import axios from 'axios';
import {Badge, Button, Card, CardBody} from "reactstrap";
import {Link, NavLink} from "react-router-dom";
import MaterialIcon from 'material-icons-react';


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

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <p className="h2">Cacifos</p>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    </div>
                </div>

                <div style={{textAlign: 'center', marginBottom: '50px'}}>
                    <MaterialIcon icon={'location_on'}> </MaterialIcon>
                    <h6 style={{display: 'inline'}}>Aveiro, Portugal</h6>
                    <NavLink to={'/definicoes'}
                             style={{marginLeft: '5px', fontSize: '10px', display: 'inline'}}>Alterar</NavLink>
                </div>

                {cacifos.map(cacifo => {
                    const {temperatura, id, numero, tamanho} = cacifo;
                    return (
                            <div className="coluna_cacifo">
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

                                    <Button className='btn_detalhes' size="sm"> <Link to={{pathname: `detalheCacifo/${id}`, query: {id: id}}} >Ver
                                        detalhes</Link>
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
