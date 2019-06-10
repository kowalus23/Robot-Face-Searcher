import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField, requestRobots} from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
};

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ?
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
