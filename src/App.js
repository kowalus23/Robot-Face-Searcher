import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({robots: users})
      })
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  };

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className={"tc container"}>
          <h1 className={"mb0 header"}>RoboFriends</h1>
          <small className={"powered"}>by <a href="https://robohash.org/">robohash.org</a></small>
          <SearchBox searchChange={this.onSearchChange}/>
          {
            filteredRobots.length > 0 ?
              <Scroll>
                <CardList robots={filteredRobots}/>
              </Scroll>
              :
              <h2 className={"warning"}>Nothing here matches your search ;(</h2>
          }
        </div>
      );
    }
  };
}

export default App
