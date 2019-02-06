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
import DetalhesEstafeta from "./components/DetalhesEstafeta";
import DetalhesCacifo from "./components/DetalhesCacifo";
import AdicionarEncomenda from "./components/AdicionarEncomenda";
import ApagarEncomenda from "./components/ApagarEncomenda";

import {Provider} from "react-redux";
import store from './store';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <div>
                            <Navbar/>
                            <Route exact path='/encomendas' component={Encomendas}/>
                            <Route exact path='/encomendas/entregues' component={EncomendasEntregues}/>
                            <Route exact path='/estafetas' component={Estafetas}/>
                            <Route exact path='/cacifos' component={Cacifos}/>
                            <Route exact path='/definicoes' component={Definicoes}/>
                            <Route exact path='/detail/:id' component={DetalhesEncomenda}/>
                            <Route exact path='/detalheEstafeta/:id' component={DetalhesEstafeta}/>
                            <Route exact path='/detalheCacifo/:id' component={DetalhesCacifo}/>
                            <Route exact path='/detalheEncomenda/:id' component={DetalhesEncomenda}/>
                            <Route exact path='/' component={Inicio}/>
                            <Route exact path='/adicionar_encomenda' component={AdicionarEncomenda}/>
                            <Route exact path='/apagarEncomenda/:id' component={ApagarEncomenda}/>
                        </div>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
