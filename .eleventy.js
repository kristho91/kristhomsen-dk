import eleventyNavigationPlugin from '@11ty/eleventy-navigation';

export default async function (config) {
  config.addPlugin(eleventyNavigationPlugin);

  config.addLayoutAlias('page', 'layouts/page.njk');
  config.addPassthroughCopy('src/assets');

  config.addPassthroughCopy({
    './node_modules/normalize.css/normalize.css': './assets/normalize.css',
    './node_modules/sakura.css/css/sakura-vader.css': './assets/sakura-vader.css'
  });

  // config.setDataDirectory('_data');
  // config.setIncludesDirectory('_includes');
  config.setInputDirectory('src');
  config.setOutputDirectory('dist');

  config.setTemplateFormats(['md', 'njk']);
};

export const config = {
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
  dataTemplateEngine: 'njk'
};
