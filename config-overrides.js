const darkTheme = require('antd/dist/dark-theme');
const { 
  addLessLoader, 
  fixBabelImports, 
  override, 
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
 );