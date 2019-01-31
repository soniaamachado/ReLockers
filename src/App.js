import React, {Component} from 'react';

import Navbar from "./components/Navbar";
import Encomendas from "./components/Encomendas";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Estafetas from "./components/Estafetas";
import Inicio from "./components/Inicio";
import Cacifos from "./components/Cacifos";
import Definicoes from "./components/Definicoes";
import DetalhesEncomenda from "./components/DetalhesEncomenda";
import EncomendasEntregues from "./components/EncomendasEntregues";



class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <div>
                        <Navbar/>
                        <Route exact path='/encomendas' component={Encomendas}/>
                        <Route exact path='/encomendas/entregues' component={EncomendasEntregues}/>
                        <Route exact path='/estafetas' component={Estafetas}/>
                        <Route exact path='/cacifos' component={Cacifos}/>
                        <Route exact path='/definicoes' component={Definicoes}/>
                        <Route exact path='/detalhes_encomenda' component={DetalhesEncomenda}/>
                        <Route exact path='/' component={Inicio}/>
                    </div>
                </Switch>
            </Router>
        );
    }
}

export default App;
