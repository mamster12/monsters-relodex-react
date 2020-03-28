import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    const myMonsters = async () => {
      try {
        const resUsers = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await resUsers.json();
        this.setState({ monsters: users });
      } catch (error) {
        console.log('there was an error!');
      }
    }
    myMonsters();
  };


  render() {

    return (
      <div className="App" >
        <input type="search" placeholder="search monsters.." onChange={e =>
          this.setState({ searchField: e.target.value })} />
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
};

// function App() {

// }

export default App;
