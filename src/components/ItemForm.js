import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';

class ItemForm extends Component {

  state = {itemName: '', price: '', stock: ''}

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addItem(this.state)
    this.setState({itemName: '', price: '', stock: ''})
  }


  render(){
    const { itemName, price, stock} = this.state

    return(
      <Form onSubmit={this.handleSubmit}>

        <Form.Input
          label = 'Item Name'
          required

          name='itemName'
          value={itemName}
          onChange={this.handleChange}
        />
        <Form.Input
          label = 'Item Price'
          required

          name='price'
          value={price}
          onChange={this.handleChange}
        />
        <Form.Input
          label = 'Number in Inventory'
          required

          name='stock'
          value={stock}
          onChange={this.handleChange}
        />
        <Form.Button color='instagram'>Submit</Form.Button>
      </Form>
    )
  }
}

export default ItemForm;