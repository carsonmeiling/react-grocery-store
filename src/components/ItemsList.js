import React from 'react';
import Item from './Item';
import { Table, TableBody, TableHeader } from 'semantic-ui-react';

const ItemsList = ({ items, deleteItem }) => (
  <Table celled inverted>

<TableHeader>
    <Table.Row>
      <Table.HeaderCell colspan='4' textAlign='center' size='huge' >Inventory</Table.HeaderCell>
    </Table.Row>
  </TableHeader>
    <Table.Body>
    {
      items.map( item => <Item key={item.id} {...item} deleteItem = {deleteItem}/>)
    }
    </Table.Body>
  </Table>
)



export default ItemsList;