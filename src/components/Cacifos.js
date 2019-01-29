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
                this.setState({cacifos: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        for (let [key, value] of Object.entries(this.state.cacifos)) {
            console.log(key, value);
        }

        return (

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

                    <Card className='coluna_cacifo'>
                        <Card className='card_estafeta'>
                            <CardBody style={{borderColor: 'green'}}>
                                <CardTitle>FFRF</CardTitle>
                                <p style={{color: '#999'}}>dcdc</p>
                                <p style={{color: '#999'}}>jjjo</p>
                                <NavLink to={'/cacifoDetalhe'} style={{
                                    textAlign: 'center',
                                    color: 'white',
                                    backgroundColor: 'green',
                                    margin: 'auto'
                                }}>mais...</NavLink>
                            </CardBody>
                        </Card>
                    </Card>

            </main>

        );
    }
}

export default Cacifos;
