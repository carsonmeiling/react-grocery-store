import React from 'react';
import {Button, Table, TableBody, TableHeader} from 'semantic-ui-react';

const Item = ({id, itemName, price, stock, deleteItem}) => (


  

    <Table.Row>
      <Table.Cell  textAlign='center' width='10'>Item: {itemName}</Table.Cell>
      <Table.Cell textAlign='center'>Price: {price}</Table.Cell>
      <Table.Cell textAlign='center'>Inventory: {stock}</Table.Cell>
      <Table.Cell textAlign='center'>
        <Button color='instagram' onClick = {() => deleteItem(id)}>Delete</Button>
      </Table.Cell>
    </Table.Row>
)

export default Item;