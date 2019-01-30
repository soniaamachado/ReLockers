import React, {Component} from 'react';
import "../css/Cacifos.css";
import axios from 'axios';
import {NavLink} from "react-router-dom";
import {Card, CardBody, CardTitle} from "reactstrap";

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
                {cacifos.map(cacifo => {
                    const {temperatura, id, numero} = cacifo;
                    return (
                        <div className='coluna_cacifo'>
                            <Card key={id} className='card_estafeta'>
                                <CardBody>
                                    <CardTitle>{numero}</CardTitle>
                                    <p style={{color: '#999'}}>{temperatura}</p>
                                    <p style={{color: '#999'}}>Tamanho</p>
                                    <NavLink to={'/cacifoDetalhe'}
                                             style={{
                                                 textAlign: 'center',
                                                 color: 'white',
                                                 backgroundColor: 'green',
                                                 margin: 'auto'
                                             }}>mais...</NavLink>
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
