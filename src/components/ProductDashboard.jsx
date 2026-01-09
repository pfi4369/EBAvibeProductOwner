import React from 'react';
import ProductCard from './ProductCard';

const ProductDashboard = ({ products, title }) => {
  const dashboardStyle = {
    fontFamily: 'sans-serif',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  };

  const headerStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333'
  };

  const statsStyle = {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
    flexWrap: 'wrap'
  };

  const statCardStyle = {
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    minWidth: '150px'
  };

  const statLabelStyle = {
    fontSize: '12px',
    color: '#888',
    marginBottom: '4px'
  };

  const statValueStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '16px'
  };

  const stats = {
    total: products.length,
    inProgress: products.filter(p => p.status === 'In Progress').length,
    completed: products.filter(p => p.status === 'Completed').length,
    planned: products.filter(p => p.status === 'Planned').length
  };

  return React.createElement(
    'div',
    { style: dashboardStyle },
    React.createElement('div', { style: headerStyle }, title || 'Product Dashboard'),
    React.createElement(
      'div',
      { style: statsStyle },
      React.createElement(
        'div',
        { style: statCardStyle },
        React.createElement('div', { style: statLabelStyle }, 'Total Products'),
        React.createElement('div', { style: statValueStyle }, stats.total)
      ),
      React.createElement(
        'div',
        { style: statCardStyle },
        React.createElement('div', { style: statLabelStyle }, 'In Progress'),
        React.createElement('div', { style: statValueStyle }, stats.inProgress)
      ),
      React.createElement(
        'div',
        { style: statCardStyle },
        React.createElement('div', { style: statLabelStyle }, 'Completed'),
        React.createElement('div', { style: statValueStyle }, stats.completed)
      ),
      React.createElement(
        'div',
        { style: statCardStyle },
        React.createElement('div', { style: statLabelStyle }, 'Planned'),
        React.createElement('div', { style: statValueStyle }, stats.planned)
      )
    ),
    React.createElement(
      'div',
      { style: gridStyle },
      products.map((product) =>
        React.createElement(ProductCard, { key: product.name, product })
      )
    )
  );
};

export default ProductDashboard;
