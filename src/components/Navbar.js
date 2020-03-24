import React from 'react';
import {Menu} from 'semantic-ui-react';


class Navbar extends React.Component {

  render (){
    return (
      <Menu>
        <Menu.Item
        name='items'
        >Items
        </Menu.Item>
      </Menu>
    )
  }

}



export default Navbar;