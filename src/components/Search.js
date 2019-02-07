import React, { Component } from 'react'

class Search extends Component {
    state = {
        initialItem:[
            "Bruno",
            "Sónia"
        ],
        items:[]
    };


    searchEstafetas = (event) => {

        let  updatedList = this.state.initialItem;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(
                event.target.value.toLowerCase()
            ) !== -1;
        });
        this.setState({items:updatedList})
    };

    componentWillMount= () => {
      this.setState({items:this.state.initialItem})
    };


    render() {
        const items= this.state.items;
        return (
            <main>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.searchEstafetas}
                />

            </main>
        )
    }
}

export default Search