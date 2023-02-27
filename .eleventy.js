const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(config) {
  config.addPlugin(eleventyNavigationPlugin);

  config.addLayoutAlias('page', 'layouts/page.njk');
  config.addPassthroughCopy('src/assets');

  config.addPassthroughCopy({
    './node_modules/normalize.css/normalize.css': './assets/normalize.css',
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
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
