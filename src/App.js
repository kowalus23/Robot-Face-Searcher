import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  };

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className={"tc"}>
        <h1 className={"mb0 header"}>RoboFriends</h1>
        <small className={"header"}>by <a className={"header"} href="https://robohash.org/">https://robohash.org/</a></small>
        <SearchBox searchChange={this.onSearchChange}/>
        {
          filteredRobots.length > 0 ?
          <CardList robots={filteredRobots}/>
          :
          <h2 className={"warning"}>Nothing here matches your search ;(</h2>
        }
      </div>
    );
  };
}

export default App
