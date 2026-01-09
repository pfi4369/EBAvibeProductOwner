<template>
  <div
    :style="cardStyle"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div :style="titleStyle">{{ product.name }}</div>
    <div :style="descriptionStyle">{{ product.description }}</div>
    <div>
      <span :style="statusBadgeStyle">{{ product.status }}</span>
      <span :style="priorityBadgeStyle">{{ product.priority }}</span>
    </div>
    <div :style="ownerStyle">Owner: {{ product.owner }}</div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const isHovered = ref(false);

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

    const cardStyle = computed(() => ({
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px',
      backgroundColor: '#fff',
      boxShadow: isHovered.value ? '0 4px 8px rgba(0,0,0,0.15)' : '0 2px 4px rgba(0,0,0,0.1)',
      transform: isHovered.value ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      maxWidth: '300px'
    }));

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

    const statusBadgeStyle = computed(() => ({
      ...badgeStyle,
      backgroundColor: statusColors[props.product.status] || '#999'
    }));

    const priorityBadgeStyle = computed(() => ({
      ...badgeStyle,
      backgroundColor: priorityColors[props.product.priority] || '#999'
    }));

    const ownerStyle = {
      fontSize: '12px',
      color: '#888',
      marginTop: '8px'
    };

    return {
      isHovered,
      cardStyle,
      titleStyle,
      descriptionStyle,
      statusBadgeStyle,
      priorityBadgeStyle,
      ownerStyle
    };
  }
};
</script>
