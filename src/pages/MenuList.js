import React, { useState, useEffect } from 'react';
import './MenuList';  // Import CSS for styling

const MenuList = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error('Error fetching menu items:', error));
  }, []);

  return (
    <div className="menu-list">
      <h1>Food Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-item" key={item.id}>
            <img 
              src={`http://localhost:5000/images/${item.image}`} 
              alt={item.name} 
              className="menu-item-image"
            />
            <div className="menu-item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
