import React, { Component } from 'react';
import axios from 'axios';

import * as c from './constants'
import { GameListComponent, LayoutComponent } from './components'
import { getFilteredGames } from './common'

class App extends Component {
  constructor() {
    super();

    this.state = {
      games: [],
      filteredGames: [],
      isLoading: true,
      errorMessage: '',
      searchTerm: '',
      sortKey: c.SCORE_ASC
    }
    this.onSearch = this.onSearch.bind(this);
    this.onSort = this.onSort.bind(this);
  }
  componentDidMount() {
    axios.get(c.GET_GAMES_URL)
      .then(({ data }) => {
        var [, ...games] = data;
        this.setState((oldState) => ({
          games,
          filteredGames: getFilteredGames(games, oldState.searchTerm, oldState.sortKey),
          isLoading: false
        }));
      });
  }
  onSearch(searchTerm) {
    this.setState((oldState) => ({
      searchTerm,
      filteredGames: getFilteredGames(oldState.games, searchTerm, oldState.sortKey)
    }));
  }
  onSort({ key }) {
    this.setState((oldState) => ({
      sortKey: key,
      filteredGames: getFilteredGames(oldState.games, oldState.searchTerm, key)
    }));
  }
  render() {
    return (
      <LayoutComponent onSearch={this.onSearch} onSort={this.onSort} sortKey={this.state.sortKey}>
        <GameListComponent list={this.state.filteredGames} />
      </LayoutComponent>
    );
  }
}

export default App;