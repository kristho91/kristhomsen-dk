module.exports = function(config) {
  config.addPassthroughCopy('src/assets');
  config.addLayoutAlias('page', 'layouts/page.njk');

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
