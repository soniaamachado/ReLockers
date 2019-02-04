import React, {Component} from 'react';
import '../css/Encomendas.css';
import axios from 'axios';

const m = new Date();
const new_timestamp =
    m.getUTCFullYear() + "-" +
    ("0" + (m.getUTCMonth()+1)).slice(-2) + "-" +
    ("0" + m.getUTCDate()).slice(-2) + " " +
    ("0" + m.getUTCHours()).slice(-2) + ":" +
    ("0" + m.getUTCMinutes()).slice(-2) + ":" +
    ("0" + m.getUTCSeconds()).slice(-2);


export default class AdicionarEncomenda extends Component {

    state = {
        encomendas:[]
    };

    componentDidMount() {

        axios.post('http://167.99.202.225/api/encomendas', {
            numero_encomenda:125,
            data_estimada:new_timestamp,
            data_de_entrada_no_sistema:new_timestamp,
            data_de_entrega:new_timestamp,
            data_de_entrada:new_timestamp,
            data_de_levantamento:new_timestamp,
            data_de_entrega_pretendida:new_timestamp,
            tempo_limite_de_levantamento:new_timestamp,
            tamanho:'S',
            localizacao:'Rio Tinto',
            observacoes:'entrega muito boa',
            temperatura:'20',
            estado_encomenda:0
        })
            .then(response => {
                this.setState({encomendas: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
                console.log(new_timestamp);

            });
    }

    render() {
        return (
            <main style={{height:'100%'}} role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

                <form>
                <input type="number" id="numero_encomenda" name="numero_encomenda"
                       min="10" max="100"/>
                    <input type="datetime-local" id="data_estimada"
                           name="meeting-time" value="2018-06-12T19:30"
                           min="2018-06-07T00:00" max="2019-06-14T00:00"/>
                    <input type="datetime-local" id="data_de_entrada_no_sistema"
                           name="meeting-time" value="2018-06-12T19:30"
                           min="2018-06-07T00:00" max="2019-06-14T00:00"/>
                    <input type="datetime-local" id="data_de_entrega_pretendida"
                           name="meeting-time" value="2018-06-12T19:30"
                           min="2018-06-07T00:00" max="2019-06-14T00:00"/>
                    <input type="datetime-local" id="tempo_limite_de_levantamento"
                           name="meeting-time" value="2018-06-12T19:30"
                           min="2018-06-07T00:00" max="2019-06-14T00:00"/>
                    <input type='text' placeholder={'temperatura'}/>
                    <input type='text' placeholder={'localização'}/>
                    <input type="number" id="cliente" name="cliente"
                           min="1" max="10"/>
                    <input type="submit" value="Submit" />

                </form>
            </main>

        );
    }
}

