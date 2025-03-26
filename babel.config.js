module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset', {
      useTransformReactJSXExperimental: true
    }],
    ['@babel/preset-typescript', {
      isTSX: true,
      allExtensions: true,
      allowNamespaces: true,
      allowDeclareFields: true,
      onlyRemoveTypeImports: true,
      optimizeConstEnums: true
    }]
  ],
  plugins: [
    ['babel-plugin-dotenv-import', {
      moduleName: '@env',
      path: '.env',
      blacklist: null,
      whitelist: null,
      safe: false,
      allowUndefined: true
    }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    '@babel/plugin-transform-flow-strip-types',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@theme': './src/theme',
          '@types': './src/types',
          '@utils': './src/utils',
          '@assets': './src/assets'
        }
      }
    ]
  ]
};
