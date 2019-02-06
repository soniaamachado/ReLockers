import React, { Component } from 'react';
import axios from "axios/index";
import {Redirect} from "react-router-dom";


export default class ApagarEstafeta extends Component {

    state={
        users:[]
    };

    componentDidMount() {
        axios.delete('http://167.99.202.225/api/users/' + this.props.match.params.id)
            .then(response => {
                this.setState({users: response.data.data});

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <Redirect to='/estafetas'/>
        )
    }
}
