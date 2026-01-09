import React from 'react';
import ProductCard from '../components/ProductCard';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
};

const sampleProduct = {
  name: 'Mobile App Redesign',
  description: 'Complete redesign of the mobile application with new UX patterns',
  status: 'In Progress',
  priority: 'High',
  owner: 'Sarah Chen'
};

export const InProgress = () =>
  React.createElement(ProductCard, {
    product: sampleProduct
  });

export const Completed = () =>
  React.createElement(ProductCard, {
    product: {
      name: 'API Integration',
      description: 'Integrate third-party payment API',
      status: 'Completed',
      priority: 'High',
      owner: 'Mike Johnson'
    }
  });

export const Planned = () =>
  React.createElement(ProductCard, {
    product: {
      name: 'Dashboard Analytics',
      description: 'Add analytics dashboard for user insights',
      status: 'Planned',
      priority: 'Medium',
      owner: 'Emily Rodriguez'
    }
  });

export const Blocked = () =>
  React.createElement(ProductCard, {
    product: {
      name: 'Database Migration',
      description: 'Migrate from legacy database to new cloud solution',
      status: 'Blocked',
      priority: 'High',
      owner: 'David Lee'
    }
  });

export const LowPriority = () =>
  React.createElement(ProductCard, {
    product: {
      name: 'Documentation Update',
      description: 'Update technical documentation for latest release',
      status: 'Planned',
      priority: 'Low',
      owner: 'Alex Taylor'
    }
  });
