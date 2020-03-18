
module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-storysource',
    '@storybook/addon-actions/register',
  ],
  // stories: ['../src/components/**/*.stories.js'],
  // addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};
