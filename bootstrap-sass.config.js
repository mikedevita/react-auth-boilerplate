var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  preBootstrapCustomizations: './src/scss/_variables.scss',
  bootstrapCustomizations: './src/scss/_bootswatch.scss',
  mainSass: './src/scss/index.scss',
  verbose: false,
  debug: false,
  styleLoader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass?outputStyle=expanded'),
  scripts: {
    'transition': true,
    'alert': true,
    'button': true,
    'carousel': true,
    'collapse': true,
    'dropdown': true,
    'modal': true,
    'tooltip': true,
    'popover': true,
    'scrollspy': true,
    'tab': true,
    'affix': true
  },
  // ### Styles
  // Enable or disable certain less components and thus remove
  // the css for them from the build.
  styles: {
    'mixins': true,

    'normalize': true,
    'print': true,
    'glyphicons': true,

    'scaffolding': true,
    'type': true,
    'code': true,
    'grid': true,
    'tables': true,
    'forms': true,
    'buttons': true,

    'component-animations': true,
    'dropdowns': true,
    'button-groups': true,
    'input-groups': true,
    'navs': true,
    'navbar': true,
    'breadcrumbs': true,
    'pagination': true,
    'pager': true,
    'labels': true,
    'badges': true,
    'jumbotron': true,
    'thumbnails': true,
    'alerts': true,
    'progress-bars': true,
    'media': true,
    'list-group': true,
    'panels': true,
    'wells': true,
    'responsive-embed': true,
    'close': true,

    'modals': true,
    'tooltip': true,
    'popovers': true,
    'carousel': true,
    'utilities': true,
    'responsive-utilities': true
  }
};
