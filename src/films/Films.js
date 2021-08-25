import React, { Component } from "react";

class Films extends Component {
    // State and Props
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = { 
            loaded: false,
            results: [],
            people: [],
            fname: this.props.fname
        }
        console.log(this.state)
    }
    
    async componentDidMount(){
        let res = await fetch("https:ghibliapi.herokuapp.com/films")
        let json = await res.json()

        this.setState({ 
            loaded: true,
            results: json
        })
    }

// After the results are set if the people [] is empty, get all the people from each film
    async componentDidUpdate() {
        let { people, results } = this.state
        let peopleUrls = []
        if (results && people.length === 0) {
            for (let i = 0; i < results.length; i++){
                for (let j = 0; j < results[i].people.length; j++){
                    console.log(results[i].people[j])
                    peopleUrls.push(results[i].people[j])
                }
            }
            console.log(peopleUrls)
            console.log(results)
        }
    }

    render() {
        console.log(this.state)
        let { favNumber } = this.props
        return (
            <div>
                {favNumber}
                {!this.state.loaded 
                ? "Loading"
                : this.state.results.map((film) => <li>{film.title}</li>)}
            </div>
        )
    }
}

export default Films;

