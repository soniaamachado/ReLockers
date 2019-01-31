import React, {Component} from 'react';
import "../css/DetalheEncomenda.css";
import axios from 'axios';
import {ListGroup, ListGroupItem} from "reactstrap";

class Detalhes_Encomenda extends Component {

    state = {
       encomendas: []
    };
    componentDidMount() {
        axios.get('http://167.99.202.225/api/encomendas/'+this.props.match.params.id)
            .then(response => {
                this.setState({encomendas: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const encomendas =this.state.encomendas;
        if(this.state.encomendas.length === 0){
            return null;
        }
        else{
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                {encomendas.map(encomenda => {
                    const {id, data_de_entrega,data_de_levantamento, temperatura, tamanho, localizacao, tempolimite_de_levantamento, cliente, cacifo, users} = encomenda;

                    return(
                        <div key={id}>

                            <ListGroup>
                                <ListGroupItem>
                                    <h5>Encomenda #{id}</h5>
                                    <p>Localização: {localizacao}</p>
                                    <p>Entregue em: {data_de_entrega}</p>
                                    <p>Levantada em: {data_de_levantamento}</p>
                                    <p>{temperatura}</p>
                                </ListGroupItem>
                            </ListGroup>
                            {id}

                            {temperatura}
                            {tamanho}
                            {localizacao}
                            {tempolimite_de_levantamento}
                            {cliente.nome}
                        </div>
                    )

                })}

            </main>
        );
        }
    }
}

export default Detalhes_Encomenda;

