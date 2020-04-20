// eslint-disable-next-line @typescript-eslint/no-var-requires
//const classes = require('./src/common/styles/styles.ts');

module.exports = {
  plugins: [
    [
      'react-native-class-prop',
      {
        propName: 'class',
        classes: {},
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
