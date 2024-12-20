import React, { useState, useEffect } from 'react';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div className="menu-item" key={item._id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <a href={item.link}>View More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
