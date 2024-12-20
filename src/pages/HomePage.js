import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage'; // Assuming you have this CSS file for styles

const HomePage = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Original categories data
  const CategoryList = [
    {
      title: 'Portfolio Website',
      description: 'A modern and responsive portfolio to showcase my work.',
      technologies: ['React', 'CSS', 'React Router'],
      link: 'https://github.com/yourusername/portfolio',
      styleClass: 'portfolio',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce app with shopping cart and payments.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/yourusername/ecommerce',
      styleClass: 'ecommerce',
    },
    {
      title: 'Data-Collection Form',
      description: 'A full-stack data collection app.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/yourusername/data-collection',
      styleClass: 'datacollection',
    },
    {
      title: 'School-Portal Website',
      description: 'A website with payment gateways for student fees.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/yourusername/school-portal',
      styleClass: 'portal',
    },
  ];

  // Fetch menu items from the backend (you can leave this as is if you want to keep the fetch for other use cases)
  useEffect(() => {
    fetch('http://localhost:5000/api/menu') // Replace with your actual API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => console.error('Error fetching menu items:', error));
  }, []);

  const handleSearch = () => {
    console.log(`Searching for: ${search}`);
  };

  // Handle navigation to the MenuList page
  const handleMenuClick = () => {
    navigate('/menu'); // Navigate to the MenuList page
  };

  return (
    <div className="homepage">
      <h1>Welcome to Shop247.com</h1>
      <p>An entire world-hub of everyday life shopping and affordable experience!</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products & brands..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Hoverable Category Blocks */}
      <h2>Explore Categories</h2>
      <div className="category-slider">
        {CategoryList.map((category, index) => (
          <div
            key={index}
            className={`category-block ${category.styleClass}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <p>
              <strong>Technologies:</strong> {category.technologies.join(', ')}
            </p>
            <a href={category.link} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        ))}
      </div>

      <div className='menu-category'>
        {/* Menu Button to navigate to MenuList page */}
      <button onClick={handleMenuClick}>View Menu</button>
      </div>
      
    </div>
  );
};

export default HomePage;
