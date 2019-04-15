const { override, fixBabelImports } = require('customize-cra');
// const { injectBabelPlugin } = require('react-app-rewired')

module.exports = override(
      fixBabelImports('import', {
         libraryName: 'antd,jquery',
         libraryDirectory: 'es',
         style: 'css',
   }),
//    injectBabelPlugin(['import', { libraryName: 'antd', style: true }])
 );