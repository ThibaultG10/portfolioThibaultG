// .eleventy.js
module.exports = function(eleventyConfig) {
  // 1. Enregistrement du shortcode
  eleventyConfig.addShortcode("year", () => {
    return new Date().getFullYear();
  });

  // 2. Copie de vos fichiers statiques
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // 3. Vos chemins
  return {
    dir: {
      input:  "src",
      includes: "_includes",
      output: "dist"
    }
  };
};
