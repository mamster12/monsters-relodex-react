import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
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

  // storig input value from search bar to searchField
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App" >
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters.." handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
};

// function App() {

// }

export default App;
