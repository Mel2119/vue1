// vue.config.js
module.exports = {
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => {
          // Adjust the prefix based on your custom element name
          options.compilerOptions.isCustomElement = tag => !tag.startsWith('Searchbar');
          return options;
        });
    },
  };
