import React, { Component } from 'react';
// import Card from './Card.js'
import 'tachyons';
import './style.css';
import './App.css';
// import robots from './robots';
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll'

class App extends Component {
  constructor(){
    super()
    this.state={
      robots:[],
      searchfield:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users}))
  }
  onSearchChange=(event)=>{
    // console.log(this.state.searchfield)
    this.setState({ searchfield: event.target.value })
    const filteredRobots=this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    // console.log(filteredRobots)
  }
  render() {
    const filteredRobots=this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="App">
      <h1 className="title washed-blue">RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
      <CardList robots={filteredRobots}/>
      </Scroll>
      </div>
      )
    
  }
}

export default App;
