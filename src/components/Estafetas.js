import React, {Component} from 'react';
import "../css/Estafetas.css";
import axios from 'axios';
import { Button, Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import {NavLink} from "react-router-dom";
import MaterialIcon from 'material-icons-react';

class Estafetas extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/users')
            .then(response => {
                this.setState({users: response.data.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {

        const users = this.state.users;

        return (

            <main style={{zIndex: '-15555px'}} role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h2">Estafetas</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Ativos</button>



                            <button  type="button" className="btn btn-sm btn-outline-secondary">Não ativos</button>

                        </div>
                    </div>
                </div>
                <div style={{textAlign: 'center', marginBottom: '50px'}}>
                    <MaterialIcon icon={'location_on'}> </MaterialIcon>
                    <h6 style={{display: 'inline'}}>Aveiro, Portugal</h6>
                    <NavLink to={'/definicoes'}
                             style={{marginLeft: '5px', fontSize: '10px', display: 'inline'}}>Alterar</NavLink>

                </div>


                {users.map(user => {
                    const {nome, email} = user;
                    return (<Card className='col-md-3'>
                            <Card className='card_estafeta'>
                                <CardBody>
                                    <img className='img_estafeta'  alt={'lol'}
                                         src={'https://www.comshalom.org/wp-content/uploads/2018/02/pexels-photo-683381.jpeg'}/>
                                    <CardTitle key={nome} style={{display:'block'}}> {nome}</CardTitle>
                                    <CardSubtitle  style={{color:'#999'}}>{email}</CardSubtitle>
                                    <Button className='btn_detalhes' size="sm"> <NavLink to={'/cacifosDetalhes'}>Ver
                                        detalhes</NavLink></Button>
                                </CardBody>
                            </Card>
                        </Card>
                    );

                })}

            </main>

        );
    }
}

export default Estafetas;

