module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links"
  ],
  framework: {
    name: "@storybook/react",
    options: {}
  },
  core: {
    builder: "webpack5"
  }
};
