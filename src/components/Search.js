import React, { Component } from 'react'
import axios from "axios/index";

class Search extends Component {
    state = {
        query: '',
        results:[]
    };

    getInfo = () => {
        axios.get('http://167.99.202.225/api/users')
            .then(response => {
                this.setState({ results: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });

        const results= this.state.results;
    };

    handleInputChange = () => {
        this.setState({
            query:this.search.valueOf()}, () =>{
            if(this.state.query && this.state.query.length>1){

                if(this.state.query.lenght % 2 ===0){
                    this.getInfo()
                }
            }
        })
    };

    render() {
        return (
            <main>
            <form style={{marginTop:'30%',marginLeft:'30%'}}>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.results}</p>
            </form>
            </main>
        )
    }
}

export default Search