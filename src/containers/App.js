import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField} from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({robots: users})
      })
  }

  render() {
    const {robots} = this.state;
    const {searchField, onSearchChange} = this.props;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots ?
      <h1>Loading</h1> :
      (
        <div className={"tc container"}>
          <h1 className={"mb0 header"}>RoboFriends</h1>
          <small className={"powered"}>by <a href="https://robohash.org/">robohash.org</a></small>
          <SearchBox searchChange={onSearchChange}/>
          {
            filteredRobots.length > 0 ?
              <Scroll>
                <ErrorBoundry>
                  <CardList robots={filteredRobots}/>
                </ErrorBoundry>
              </Scroll>
              :
              <h2 className={"warning"}>Nothing here matches your search ;(</h2>
          }
        </div>
      );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
