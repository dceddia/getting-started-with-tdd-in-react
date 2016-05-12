import React, { Component } from 'react';

export class BeerListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  addItem(name) {
    this.setState({
      beers: [].concat(this.state.beers).concat([name])
    });
  }

  render() {
    return (
      <div>
        <InputArea onSubmit={this.addItem}/>
        <BeerList/>
      </div>
    );
  }
}

export class InputArea extends Component {
  render() {
    return <input/>
  }
}

export class BeerList extends Component {
  render() {
    return <ul/>
  }
}
