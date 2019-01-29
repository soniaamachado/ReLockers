import React, { Component } from 'react';
import "../css/Estafetas.css";
import EstafetaCards from './EstafetasCards';

class Estafetas extends Component {

    constructor () {
        super();
        this.state = {
            people:[
                {
                    name:"caio jacobina",
                    email:"cjacobina@uapt",
                    key:"1",
                },
                {
                    name:"caio jacobina2",
                    email:"cjacobina@uapt",
                    key:"2",

                },
                {
                    name:"caio jacobina3",
                    email:"cjacobina@uapt",
                    key:"3",

                },
                {
                    name:"caio jacobina2",
                    email:"cjacobina@uapt",
                    key:"s3",

                },
                {
                    name:"caio jacobina2",
                    email:"cjacobina@uapt",
                    key:"3ff",

                }
            ]
        }
    }
    render() {
        let estafetaCards = this.state.people.map(person => {
            return (

                    <EstafetaCards person ={person} />

            )
        });
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4"><div className="chartjs-size-monitor" style={{position: "absolute", left: "0px", top: "0px", right: "0px", bottom: "0px", overflow: "hidden",pointerEvents: "none",visibility: "hidden",zIndex: '-1'}}>
                <div className="chartjs-size-monitor-shrink" style={{position:'absolute',left:'0',top:'0',right:'0',bottom:'0',overflow:'hidden',pointerEvents:'none',visibility:'hidden',zIndex:'-1'}}>
                    <div style={{position:'absolute',width:'200%',height:'200%',left:'0',top:'0'}}> </div></div></div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h2">Estafetas</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Ativos</button>



                            <button  type="button" className="btn btn-sm btn-outline-secondary">Não ativos</button>

                        </div>

                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            This week
                        </button>

                    </div>
                </div>

                    {estafetaCards}

            </main>

        );
    }
}

export default Estafetas;
