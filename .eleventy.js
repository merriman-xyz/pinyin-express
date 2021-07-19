module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("sty");
  eleventyConfig.addWatchTarget("style");
  eleventyConfig.addCollection("postsByDate", (collection) =>
    collection.getFilteredByGlob("_posts/*.md").sort((a, b) => {
      if (a.data.post_date > b.data.post_date) return -1;
      else if (a.data.post_date < b.data.post_date) return 1;
      else return 0;
    })
  );
};