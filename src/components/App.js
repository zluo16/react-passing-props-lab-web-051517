import React, {Component} from 'react';
import FruitBasket from './FruitBasket';


class App extends Component {
  constructor() {
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.getFruitBasket()
    this.getFruitTypes()
  }

  getFruitBasket = () => {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(items => this.setState({
        ...this.state,
        fruit: items
      }))
  }

  getFruitTypes = () => {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({
        ...this.state,
        filters: filters
      }))
  }

  changeFilter = (event) => {
    this.setState({
      ...this.state,
      currentFilter: event.target.value === 'all' ? null : event.target.value
    })
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.changeFilter}
      />
    )
  }
}

export default App;
