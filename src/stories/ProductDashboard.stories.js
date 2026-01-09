import ProductDashboard from '../components/ProductDashboard.vue';

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

export const Default = {
  args: {
    products: sampleProducts,
    title: 'Product Dashboard'
  }
};

export const Empty = {
  args: {
    products: [],
    title: 'Product Dashboard - No Products'
  }
};

export const FewProducts = {
  args: {
    products: sampleProducts.slice(0, 2),
    title: 'Product Dashboard - Getting Started'
  }
};

export const ManyProducts = {
  args: {
    products: [
      ...sampleProducts,
      {
        name: 'User Authentication',
        description: 'Implement OAuth 2.0 authentication',
        status: 'In Progress',
        priority: 'High',
        owner: 'John Smith'
      },
      {
        name: 'Email Notifications',
        description: 'Set up email notification system',
        status: 'Planned',
        priority: 'Low',
        owner: 'Jane Doe'
      },
      {
        name: 'Data Export',
        description: 'Add CSV/Excel export functionality',
        status: 'Completed',
        priority: 'Medium',
        owner: 'Mike Johnson'
      },
      {
        name: 'Search Feature',
        description: 'Implement full-text search',
        status: 'In Progress',
        priority: 'Medium',
        owner: 'Sarah Chen'
      },
      {
        name: 'Mobile Responsiveness',
        description: 'Ensure mobile-friendly design',
        status: 'Blocked',
        priority: 'High',
        owner: 'David Lee'
      },
      {
        name: 'API Documentation',
        description: 'Create comprehensive API docs',
        status: 'Planned',
        priority: 'Low',
        owner: 'Alex Taylor'
      }
    ],
    title: 'Product Dashboard - Large Portfolio'
  }
};
