import React, {Component} from 'react';
import "../css/DetalheEncomenda.css";
import axios from 'axios';
import {Breadcrumb, BreadcrumbItem, Col, Row} from "reactstrap";

class Detalhes_Encomenda extends Component {

    state = {
        encomendas: []
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/encomendas/' + this.props.match.params.id)
            .then(response => {
                this.setState({encomendas: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const encomendas = this.state.encomendas;
        if (this.state.encomendas.length === 0) {
            return null;
        }
        else {
            return (
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

                    <Row style={{height:'100px', marginTop:'50px'}}>
                        <Col>
                            <i style={{verticalAlign: 'middle'}} className="material-icons md-18">back</i>
                            <p style={{color:'#5887F9', fontWeight:'bold'}}>Detalhes da encomenda</p>
                        </Col>
                    </Row>
                    {encomendas.map(encomenda => {
                        const {id, data_de_entrega, temperatura, tamanho, localizacao, tempolimite_de_levantamento, cliente, cacifo, users} = encomenda;

                        return (
                                <Row key={id}>
                                    <Col xs="6" sm="4" style={{backgroundColor:'white'}}>
                                        <div >
                                            <p style={{verticalAlign: 'middle'}}><i style={{verticalAlign: 'middle'}}
                                                                                    className="material-icons md-18">assignment</i>Encomenda
                                            </p>
                                            <h4>XFF45{id}</h4>
                                        </div>
                                        <div>
                                            <p style={{verticalAlign: 'middle'}}>
                                                <i style={{verticalAlign: 'middle'}}
                                                   className="material-icons md-18">
                                                    location_on
                                                </i>
                                                Localização</p>
                                            <p>{localizacao}</p>
                                        </div>
                                    </Col>
                                    <Col xs="6" sm="4" style={{backgroundColor:'white'}}>
                                        <div>
                                            <p style={{verticalAlign: 'middle'}}><i style={{verticalAlign: 'middle'}}
                                                                                    className="material-icons md-18">assignment</i>Encomenda
                                            </p>
                                            <h4>XFF45{id}</h4>
                                        </div>
                                        <div>
                                            <p style={{verticalAlign: 'middle'}}>
                                                <i style={{verticalAlign: 'middle'}}
                                                   className="material-icons md-18">
                                                    location_on
                                                </i>
                                                Localização</p>
                                            <p>{localizacao}</p>
                                        </div>
                                    </Col>
                                    <Col sm="4" style={{backgroundColor:'white'}}>
                                        <div>
                                            <p style={{verticalAlign: 'middle'}}><i style={{verticalAlign: 'middle'}}
                                                                                    className="material-icons md-18">assignment</i>Encomenda
                                            </p>
                                            <h4>XFF45{id}</h4>
                                        </div>
                                        <div>
                                            <p style={{verticalAlign: 'middle'}}>
                                                <i style={{verticalAlign: 'middle'}}
                                                   className="material-icons md-18">
                                                    location_on
                                                </i>
                                                Localização</p>
                                            <p>{localizacao}</p>
                                        </div>
                                    </Col>
                                </Row>

                                // <ListGroup>
                                //     <ListGroupItem>
                                //         <h5>Encomenda #{id}</h5>
                                //         <p>Localização: {localizacao}</p>
                                //         <p>Entregue em: {data_de_entrega}</p>
                                //         <p>Levantada em: {data_de_levantamento}</p>
                                //         <p>{temperatura}</p>
                                //     </ListGroupItem>
                                // </ListGroup>
                                // {id}
                                //
                                // {temperatura}
                                // {tamanho}
                                // {localizacao}
                                // {tempolimite_de_levantamento}
                                // {cliente.nome}
                        )

                    })}

                </main>
            );
        }
    }
}

export default Detalhes_Encomenda;

