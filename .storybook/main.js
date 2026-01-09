const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links"
  ],
  framework: {
    name: "@storybook/vue3",
    options: {}
  },
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader'
    });
    
    config.plugins.push(new VueLoaderPlugin());
    
    return config;
  }
};
