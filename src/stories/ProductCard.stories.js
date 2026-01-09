import ProductCard from '../components/ProductCard.vue';

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

export const InProgress = {
  args: {
    product: sampleProduct
  }
};

export const Completed = {
  args: {
    product: {
      name: 'API Integration',
      description: 'Integrate third-party payment API',
      status: 'Completed',
      priority: 'High',
      owner: 'Mike Johnson'
    }
  }
};

export const Planned = {
  args: {
    product: {
      name: 'Dashboard Analytics',
      description: 'Add analytics dashboard for user insights',
      status: 'Planned',
      priority: 'Medium',
      owner: 'Emily Rodriguez'
    }
  }
};

export const Blocked = {
  args: {
    product: {
      name: 'Database Migration',
      description: 'Migrate from legacy database to new cloud solution',
      status: 'Blocked',
      priority: 'High',
      owner: 'David Lee'
    }
  }
};

export const LowPriority = {
  args: {
    product: {
      name: 'Documentation Update',
      description: 'Update technical documentation for latest release',
      status: 'Planned',
      priority: 'Low',
      owner: 'Alex Taylor'
    }
  }
};
