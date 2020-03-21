import React from 'react';
import {Button, Table} from 'semantic-ui-react';

const Item = ({id, itemName, price, stock, deleteItem}) => (


  
  <Table.Row>
    <Table.Cell>Item: {itemName}</Table.Cell>
    <Table.Cell>Price: {price}</Table.Cell>
    <Table.Cell>Inventory: {stock}</Table.Cell>
    <Table.Cell>
      <Button color='twitter' onClick = {() => deleteItem(id)}>Delete</Button>
    </Table.Cell>
  </Table.Row>
)

export default Item;