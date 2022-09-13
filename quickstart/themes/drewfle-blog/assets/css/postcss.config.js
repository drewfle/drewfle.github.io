const themeDir = __dirname + "/../../";

const purgecss = require("@fullhuman/postcss-purgecss")({
  // see https://gohugo.io/hugo-pipes/postprocess/#css-purging-with-postcss
  content: ["./hugo_stats.json", themeDir + "/hugo_stats.json"],
  safelist: [/type/],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    return els.tags.concat(els.classes, els.ids);
  },
});

const postcssConfig = {
  plugins: [
    // TODO: Support SASS CSS Nesting
    // by adding postcss-nested
    // Support CSS Nesting spec
    require("postcss-nesting")(),
    require("tailwindcss")(themeDir + "assets/css/tailwind.config.js"),
    require("autoprefixer")({
      path: [themeDir],
    }),
  ],
};

if (process.env.HUGO_ENVIRONMENT === "production") {
  postcssConfig.plugins.push(purgecss);
}

module.exports = postcssConfig;
