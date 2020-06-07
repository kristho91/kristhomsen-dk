const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy('src/assets');

    return {
        dir: {
            data: '_data',
            input: 'src',
            includes: '_includes',
            output: '_site'
        },
        templateFormats: [
            'md',
            'njk'
        ],
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true
    };
};
