module.exports = function(config) {
  config.addLayoutAlias('page', 'layouts/page.njk');
  config.addPassthroughCopy('src/assets');

  config.addPassthroughCopy({
    './node_modules/normalize.css/normalize.css': './assets/normalize.css'
  });
  config.addPassthroughCopy({
    './node_modules/sakura.css/css/sakura-vader.css': './assets/sakura-vader.css'
  });

  return {
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      output: 'dist'
    },
    templateFormats: [
      'md',
      'njk'
    ],
    passthroughFileCopy: true
  };
};
