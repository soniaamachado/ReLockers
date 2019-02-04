import React, {Component} from 'react';
import "../css/Cacifos.css";
import axios from 'axios';
import {Badge, Button, Card, CardBody, Col} from "reactstrap";
import {Link} from "react-router-dom";


export default class CacifosLivres extends Component {
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

            <div style={{margin:'auto', display:'block'}}>
                {cacifos.map(cacifo => {
                    const {temperatura, id, numero, tamanho, estado} = cacifo;


                    if (estado.id === 2) {
                        return (
                            null
                        );
                    }
                    else

                    return (
                        <div className="coluna_cacifo" >
                            <Card key={id} style={{display:'inline-block'}} className='card_cacifo'>
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

            </div>
        );
    }
}

