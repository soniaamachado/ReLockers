import React, { Component } from 'react';
import { Card, CardBody, CardTitle, NavLink} from "reactstrap";
import axios from "axios/index";


class LockersCard extends Component {
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
        return (
            <Card className='coluna_cacifo'>
                <Card className='card_estafeta'>
                    <CardBody style={{borderColor:'green'}}>
                        <CardTitle><h5 style={{display:'block'}}></h5></CardTitle>
                        <p style={{color:'#999'}}>{this.state.cacifos.temperatura}</p>
                        <p style={{color:'#999'}}>{this.state.cacifos.tamanho_id}</p>
                        <NavLink  style={{textAlign: 'center' ,color:'white', backgroundColor: 'green' , margin:'auto'}} >mais...</NavLink>
                    </CardBody>
                </Card>
            </Card>

        );
    }
}

export default LockersCard;

