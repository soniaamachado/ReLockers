import React, {Component} from 'react';
import '../css/Encomendas.css';
import {Nav, NavItem, Row, TabContent, TabPane, NavLink, Col, Button} from "reactstrap";
import classnames from 'classnames';
import EncomendasPorEntregar from "./EncomendasPorEntregar";
import EncomendasEntregues from "./EncomendasEntregues";
import {Link} from "react-router-dom";


class Encomendas extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <main style={{height: '100%'}} role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h2">Encomendas</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    </div>
                </div>
                <div style={{textAlign: 'center', marginBottom: '50px'}}>
                    <i className="material-icons md-24" style={{verticalAlign:'middle'}}>location_on</i>
                <h6 style={{display: 'inline', verticalAlign:'middle'}}>Aveiro, Portugal</h6>
                <a href={'/definicoes'} style={{marginLeft: '5px', fontSize: '10px', display: 'inline',verticalAlign:'middle'}}>Alterar</a>
                </div>

                <Col>

                    <Link to={'/adicionar_encomenda'}>
                        <Button style={{
                            float: 'right',
                            width: 'auto',
                            margin: 'auto',
                            backgroundColor: 'rgb(181, 160, 251)',
                            border: 'none'
                        }} size="sm">
                            <i style={{verticalAlign: 'middle'}} className="material-icons md-24">add</i>
                            Adicionar encomenda
                        </Button> </Link>

                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '1'})}
                                id={'tab_encomendas'}
                                onClick={() => {
                                    this.toggle('1');
                                }}
                            >
                                Por entregar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '2'})}
                                id={'tab_encomendas'}
                                onClick={() => {
                                    this.toggle('2');
                                }}
                            >
                                Entregues
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <EncomendasPorEntregar/>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <EncomendasEntregues/>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Col>

            </main>

        );
    }
}

export default Encomendas;