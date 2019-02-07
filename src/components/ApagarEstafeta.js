import React, { Component } from 'react';
import axios from "axios/index";
import { Redirect } from "react-router-dom";
import * as header from './constants/HeaderConstant';

export default class ApagarEstafeta extends Component {

    state = {
        users: []
    };

    componentDidMount() {
        axios.delete('http://167.99.202.225/api/encomendas/' + this.props.match.params.id, { headers: header.HEADER })
            .then(response => {
                this.setState({ users: response.data.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <Redirect to='/encomendas' />
        )
    }
}
