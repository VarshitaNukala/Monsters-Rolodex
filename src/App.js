import React, { Component } from 'react';
import './style.css';
import { CardList } from './components/card-list/card-list.component.jsx';

import { SearchBox } from './components/search-box/search-box.components.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  //Both our carList and the search-box needed the state. So we put it in app component.
  render() {
    const { monsters, searchField } = this.state; //const monsters=this.state.monsters. We are destructuring.
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
