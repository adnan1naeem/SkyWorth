import React, { useEffect, useState } from "react";
import AboutCard from "./AboutCard"; // Adjust the import path as needed
import data from './about.json'; // Import your JSON data

function AboutSection() {
  const [items, setItems] = useState([]);

  useEffect(() => {
  
    if (data.items) {
      setItems(data.items);
    }
  }, []);


  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '16px', 
    padding: '16px',
    marginBottom:"10px"
  };


  const mediaQuery = `@media (max-width: 768px) {
    .about-section {
      grid-template-columns: repeat(2, 1fr); // Two cards in a row on small screens
    }
  }`;

  
  useEffect(() => {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(mediaQuery));
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style); 
    };
  }, []);

  return (
    <div className="about-section" style={gridStyles}>
      {items.map((item, index) => (
        <AboutCard 
          key={index}
          image={item.image} 
          descriptions={item.description.map(desc => desc)} 
        />
      ))}
    </div>
  );
}

export default AboutSection;
