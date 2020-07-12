const darkTheme = require('antd/dist/dark-theme');
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
        ...darkTheme,
      },
    }),
    addWebpackAlias({
      'pages': path.resolve(__dirname, './src/app/pages'),
    }),
    addWebpackResolve({
      plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
    }),
 );

 