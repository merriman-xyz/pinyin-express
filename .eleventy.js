module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("sty");
  eleventyConfig.addWatchTarget("style");
};