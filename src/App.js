import React, {Component} from 'react';
import ItemsList from './components/ItemsList';
import ItemForm from './components/ItemForm';
import {Container, Button} from 'semantic-ui-react';

class App extends Component {
  state = { items: [
    {id: 1, itemName: 'Apples', price: 2.99, stock: 10},
    {id: 2, itemName: 'Toilet Paper', price: 7.99, stock: 10},
    {id: 3, itemName: 'Clorox', price: 6.89, stock: 10},
    {id: 4, itemName: 'Corona Virus', price: 'free', stock: 100},
  ],
  showForm: false
  }

  toggleForm = () => this.setState({showForm: !this.state.showForm})

  deleteItem = (id) =>{
    const items = this.state.items.filter( item => {
      if (item.id !== id)
        return item
    })
    this.setState({ items })
  }

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  addItem = (incomingItem) => {
    let newItem = { id: this.getId(), ...incomingItem }
    this.setState({ items: [newItem, ...this.state.items ]})
  }


    render() {
      const {items, showForm} = this.state

      return (
        <div class='ui center aligned container'>
          <h1>Welcome to the Grocery Store</h1>
          <ItemsList items={items} deleteItem={this.deleteItem}/>
          <Button color='youtube' onClick={this.toggleForm}>Add New Item</Button>
          {showForm ? <ItemForm addItem={this.addItem} /> : null}
        </div>
      )
    }
}

export default App;
