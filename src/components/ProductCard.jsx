import React from 'react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const { name, description, status, priority, owner } = product;

  const statusColors = {
    'In Progress': '#FFA500',
    'Completed': '#4CAF50',
    'Planned': '#2196F3',
    'Blocked': '#F44336'
  };

  const priorityColors = {
    'High': '#F44336',
    'Medium': '#FFA500',
    'Low': '#4CAF50'
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '8px',
    backgroundColor: '#fff',
    boxShadow: isHovered ? '0 4px 8px rgba(0,0,0,0.15)' : '0 2px 4px rgba(0,0,0,0.1)',
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    maxWidth: '300px'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333'
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#666',
    marginBottom: '12px',
    lineHeight: '1.4'
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500',
    marginRight: '8px',
    color: '#fff'
  };

  const ownerStyle = {
    fontSize: '12px',
    color: '#888',
    marginTop: '8px'
  };

  return React.createElement(
    'div',
    { 
      style: cardStyle,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    React.createElement('div', { style: titleStyle }, name),
    React.createElement('div', { style: descriptionStyle }, description),
    React.createElement(
      'div',
      null,
      React.createElement(
        'span',
        { style: { ...badgeStyle, backgroundColor: statusColors[status] || '#999' } },
        status
      ),
      React.createElement(
        'span',
        { style: { ...badgeStyle, backgroundColor: priorityColors[priority] || '#999' } },
        priority
      )
    ),
    React.createElement('div', { style: ownerStyle }, `Owner: ${owner}`)
  );
};

export default ProductCard;
