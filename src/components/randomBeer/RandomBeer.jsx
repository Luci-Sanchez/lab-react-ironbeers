import React from 'react';
import axios from 'axios';
import './RandomBeer.css';
import SingleBeer from '../singleBeer/SingleBeer';

export default class RandomBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({ beer: response.data });
      });
  }

  render() {
    return (
      <div className="RandomBeer">
        {this.state.beer ? (
          <SingleBeer key={this.state.beer._id} {...this.state.beer} />
        ) : (
          <div className="RandomBeer__loading">
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    );
  }
}
