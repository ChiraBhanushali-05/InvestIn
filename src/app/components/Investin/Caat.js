"use client"
import React, { useState } from 'react';
import styles from './Caat.module.css';

const categories = [
  '🚘🛠️ AUTOMOBILE', '💊 PHARMACEUTICALS', '🛩️ AVIATION', '🛳 PORTS & SHIPPING', '🏗️ CONSTRUCTION',
  '♻️🔋 RENEWABLE ENERGY', '🏭 DEFENCE MANUFACTURING', '🛒 RETAIL & E-COMMERCE', '🔌 ELECTRONIC SYSTEMS',
  '👷‍♂️ CONTRACTORS', '🍙🍣🍱🥢 FOOD PROCESSING', '👨‍🍳🍽 CLOUD KITCHENS', '👨🏻‍⚕️ HEALTHCARE', '🧶 TEXTILES', '🗺️🏨 TOURISM & HOSPITALITY',
  '🏘️🤝 REAL-ESTATE'
];

const Caat = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className={styles.programsContainer}>
        <h2 className={styles.header}>TOP GROWING CATEGORIES</h2>
        
        <input
          className={styles.searchBar}
          type="text"
          placeholder="🔍 Search categories..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        {filteredCategories.map((category, index) => (
          <div key={index} className={styles.catCard}>
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caat;
