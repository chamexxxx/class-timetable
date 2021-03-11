module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          assets: './src/assets',
          components: './src/components',
          hooks: './src/hooks',
          models: './src/models',
          screens: './src/screens',
          styles: './src/styles',
        },
      },
    ],
  ],
};
