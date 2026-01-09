<template>
  <div :style="dashboardStyle">
    <div :style="headerStyle">{{ title || 'Product Dashboard' }}</div>
    <div :style="statsStyle">
      <div :style="statCardStyle">
        <div :style="statLabelStyle">Total Products</div>
        <div :style="statValueStyle">{{ stats.total }}</div>
      </div>
      <div :style="statCardStyle">
        <div :style="statLabelStyle">In Progress</div>
        <div :style="statValueStyle">{{ stats.inProgress }}</div>
      </div>
      <div :style="statCardStyle">
        <div :style="statLabelStyle">Completed</div>
        <div :style="statValueStyle">{{ stats.completed }}</div>
      </div>
      <div :style="statCardStyle">
        <div :style="statLabelStyle">Planned</div>
        <div :style="statValueStyle">{{ stats.planned }}</div>
      </div>
    </div>
    <div :style="gridStyle">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductDashboard',
  components: {
    ProductCard
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
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

    const stats = computed(() => ({
      total: props.products.length,
      inProgress: props.products.filter(p => p.status === 'In Progress').length,
      completed: props.products.filter(p => p.status === 'Completed').length,
      planned: props.products.filter(p => p.status === 'Planned').length
    }));

    return {
      dashboardStyle,
      headerStyle,
      statsStyle,
      statCardStyle,
      statLabelStyle,
      statValueStyle,
      gridStyle,
      stats
    };
  }
};
</script>
