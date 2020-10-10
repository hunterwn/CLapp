import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


  function Sidebar({items, dropdown}) {
    return (
      <div className="sidebar">
        <ProSidebar>
        <Menu iconShape="square">
            <MenuItem>Dashboard</MenuItem>
            <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
            </SubMenu>
        </Menu>
        </ProSidebar>;
      </div>
    )
  }
  
  

export default Sidebar;