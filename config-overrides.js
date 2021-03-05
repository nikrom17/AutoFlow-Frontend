const darkTheme = require('antd/dist/dark-theme');
const defaultTheme = require('antd/dist/default-theme');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const {
  addLessLoader,
  addWebpackAlias,
  addWebpackResolve,
  fixBabelImports,
  override,
} = require('customize-cra');

module.exports = override(
  // enable antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      hack: `true;@import "${require.resolve(
        'antd/lib/style/color/colorPalette.less'
      )}";`, //add antd less variables
      // ...defaultTheme,
      ...darkTheme,
    },
    localIdentName: '[local]--[hash:base64:5]', //  enables CSS Modules
  }),
  // import alias
  addWebpackAlias({
    components: path.resolve(__dirname, './src/app/components'),
    hooks: path.resolve(__dirname, './src/hooks'),
    pages: path.resolve(__dirname, './src/app/pages'),
    styles: path.resolve(__dirname, './src/styles'),
    utils: path.resolve(__dirname, './src/utils'),
  }),
  // add updated tsconfig to build
  addWebpackResolve({
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  })
);
