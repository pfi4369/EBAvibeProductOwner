import React from 'react';

export default {
  title: 'Example/Hello',
};

export const Hello = () =>
  React.createElement(
    'div',
    { style: { padding: 20, fontFamily: 'sans-serif' } },
    'Hello Storybook'
  );
