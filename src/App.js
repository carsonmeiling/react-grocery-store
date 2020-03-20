import React, {Component} from 'react';
import ItemsList from './components/ItemsList';
import Container from 'semantic-ui-react';

class App extends Component {
  state = { items: [
    {id: 1, itemName: 'Apples', price: 2.99, stock: 10},
    {id: 2, itemName: 'Toilet Paper', price: 7.99, stock: 10},
    {id: 3, itemName: 'Clorox', price: 6.89, stock: 10},
    {id: 4, itemName: 'Corona Virus', price: 'free', stock: 100},
  ]
  }


    render() {

      return (
        <div>
          <h1>Welcome to the Store</h1>
          <ItemsList items={this.state.items}/>
        </div>
      )
    }
}

export default App;
