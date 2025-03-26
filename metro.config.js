const { getDefaultConfig } = require("@react-native/metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
    transformer,
  } = await getDefaultConfig();

  return {
    transformer: {
      ...transformer,
      babelTransformerPath: require.resolve("metro-react-native-babel-transformer"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      resolverMainFields: ['react-native', 'browser', 'main'],
      sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
      assetExts: ['png', 'jpg', 'jpeg', 'gif', 'webp'],
      platforms: ['ios', 'android'],
      blacklistRE: /\.git\//,
      watchFolders: [__dirname],
      maxWorkers: 2,
    },
    maxWorkers: 2,
    resetCache: true,
  };
})();
