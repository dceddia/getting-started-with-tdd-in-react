import React, { Component } from 'react';

export class BeerListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
    this.addItem = this.addItem.bind(this);
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
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.setText = this.setText.bind(this);
  }

  setText(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.setText}/>
        <button>Add</button>
      </div>
    );
  }
}

export class BeerList extends Component {
  render() {
    return <ul/>
  }
}
