import React, { Component } from 'react';
import axios from "axios/index";
import {Redirect} from "react-router-dom";


export default class ApagarEncomenda extends Component {

    state={
        encomendas:[]
    };

    componentDidMount() {
        axios.delete('http://167.99.202.225/api/encomendas/' + this.props.match.params.id)
            .then(response => {
                this.setState({encomendas: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <Redirect to='/encomendas'/>
        )
    }
}




