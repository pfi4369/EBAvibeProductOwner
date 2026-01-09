import React from 'react';
import ProductDashboard from '../components/ProductDashboard';

export default {
  title: 'Components/ProductDashboard',
  component: ProductDashboard,
};

const sampleProducts = [
  {
    name: 'Mobile App Redesign',
    description: 'Complete redesign of the mobile application with new UX patterns',
    status: 'In Progress',
    priority: 'High',
    owner: 'Sarah Chen'
  },
  {
    name: 'API Integration',
    description: 'Integrate third-party payment API',
    status: 'Completed',
    priority: 'High',
    owner: 'Mike Johnson'
  },
  {
    name: 'Dashboard Analytics',
    description: 'Add analytics dashboard for user insights',
    status: 'Planned',
    priority: 'Medium',
    owner: 'Emily Rodriguez'
  },
  {
    name: 'Database Migration',
    description: 'Migrate from legacy database to new cloud solution',
    status: 'Blocked',
    priority: 'High',
    owner: 'David Lee'
  },
  {
    name: 'Performance Optimization',
    description: 'Optimize application performance and reduce load times',
    status: 'In Progress',
    priority: 'Medium',
    owner: 'Sarah Chen'
  },
  {
    name: 'Security Audit',
    description: 'Conduct comprehensive security audit',
    status: 'Completed',
    priority: 'High',
    owner: 'Alex Taylor'
  }
];

export const Default = () =>
  React.createElement(ProductDashboard, {
    products: sampleProducts,
    title: 'Product Dashboard'
  });

export const Empty = () =>
  React.createElement(ProductDashboard, {
    products: [],
    title: 'Product Dashboard - No Products'
  });

export const FewProducts = () =>
  React.createElement(ProductDashboard, {
    products: sampleProducts.slice(0, 2),
    title: 'Product Dashboard - Getting Started'
  });

export const ManyProducts = () =>
  React.createElement(ProductDashboard, {
    products: [
      ...sampleProducts,
      ...sampleProducts.map((p, i) => ({
        ...p,
        name: `${p.name} (Copy ${i + 1})`
      }))
    ],
    title: 'Product Dashboard - Large Portfolio'
  });
