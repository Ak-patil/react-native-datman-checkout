const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');

const root = path.resolve(__dirname, '..');

module.exports = (async () => {
  const { withMetroConfig } = await import('react-native-monorepo-config');

  const config = withMetroConfig(getDefaultConfig(__dirname), {
    root,
    dirname: __dirname,
  });

  config.resolver.unstable_enablePackageExports = true;

  return config;
})();
