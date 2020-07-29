import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";
import {setSearchField, requestRobots} from "../actions";

import './App.css'
import Header from "../components/Header";

const mapStateToProps = (state) => {
  return {
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    searchField: state.searchRobots.searchField,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      }
    );
    return isPending ?
      <h1 className='tc'>Loading...</h1> :
      (
        <Fragment>
          <div className='tc'>
            <Header/>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
              <ErrorBoundary>
                <CardList robots={filteredRobots}/>
              </ErrorBoundary>
            </Scroll>
          </div>
        </Fragment>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);