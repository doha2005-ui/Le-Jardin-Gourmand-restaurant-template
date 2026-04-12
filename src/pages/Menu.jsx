import React from 'react';
import { menuCategories, restaurantInfo } from '../data/menuData';
import './menu.css';

const Menu = () => {
  return (
    <main className="menu-page">
      <div className="menu-header">
        <h1>{restaurantInfo.name}</h1>
        <p className="slogan">{restaurantInfo.slogan}</p>
      </div>

      <div className="menu-container">
        {menuCategories.map((category) => (
          <section key={category.id} className="menu-category">
            <h2 className="category-title">{category.title}</h2>
            
            <div className="menu-items-grid">
              {category.items.map((item) => (
                <div key={item.id} className="menu-item-card">
                  <div className="item-image-container">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="item-image"
                    />
                  </div>
                  
                  <div className="item-content">
                    <div className="item-header">
                      <h3 className="item-name">{item.name}</h3>
                      <span className="item-price">
                        {item.price.toFixed(2)} {restaurantInfo.currency}
                      </span>
                    </div>
                    
                    <p className="item-description">{item.description}</p>
                    
                    {item.tags && item.tags.length > 0 && (
                      <div className="item-tags">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="menu-info">
        <div className="info-box">
          <h3>🕐 Horaires</h3>
          <p>Lun - Ven: 12h-14h30 | 19h-22h30</p>
        </div>
      </div>
    </main>
  );
};

export default Menu;
