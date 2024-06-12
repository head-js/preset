module.exports = {
  framework: '@storybook/vue',
  core: {
    disableTelemetry: true,
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/adon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: {
            plugins: [
              require('tailwind')({
                purge: [
                  '../src/**/*.{js,vue}',
                  '../.storybook/**/*.{js,vue}',
                ],
              }),
            ],
          },
        },
      },
    },
  ],
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
};
