import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuItem from '../components/MenuItem';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the menu!', error);
      });
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      {menuItems.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
