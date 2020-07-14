const darkTheme = require('antd/dist/dark-theme');
const defaultTheme = require('antd/dist/default-theme');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const { 
  addLessLoader, 
  addWebpackAlias,
  fixBabelImports, 
  override,
  addWebpackResolve
} = require('customize-cra');

module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   addLessLoader({
      javascriptEnabled: true,
      modifyVars: { 
        'hack': `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
        ...defaultTheme,
        ...darkTheme,
      },
      // cssModules: {
        localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
      // },
    }),
    addWebpackAlias({
      'pages': path.resolve(__dirname, './src/app/pages'),
      'components': path.resolve(__dirname, './src/app/components'),
    }),
    addWebpackResolve({
      plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
    }),
 );

 