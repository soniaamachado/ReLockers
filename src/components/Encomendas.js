import React, {Component} from 'react';
import '../css/Encomendas.css';
import {Nav, NavItem, Row, TabContent, TabPane, NavLink, Col} from "reactstrap";
import classnames from 'classnames';
import EncomendasPorEntregar from "./EncomendasPorEntregar";
import EncomendasEntregues from "./EncomendasEntregues";



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
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h2">Encomendas</h1>
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
                    <a href={'/definicoes'} style={{marginLeft: '5px', fontSize: '10px', display: 'inline'}}>Alterar</a>

                </div>
                <Col>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                id={'tab_encomendas'}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Encomendas por entregar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                id={'tab_encomendas'}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Encomendas entregues
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