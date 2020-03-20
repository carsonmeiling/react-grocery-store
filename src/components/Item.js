import React from 'react';
import {Button, Table} from 'semantic-ui-react';

const Item = ({id, itemName, price, stock}) => (

  <Table.Row>
    <Table.Cell>Item: {itemName}</Table.Cell>
    <Table.Cell>Price: {price}</Table.Cell>
    <Table.Cell>Inventory: {stock}</Table.Cell>
    <Button color='twitter'>Add to Cart/Delete</Button>
  </Table.Row>

)

export default Item;