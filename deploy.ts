var ghpages = require("gh-pages");

ghpages.publish(
  ".output/public",
  {
    // Set the specific repo since it's not using this current repo
    repo: "https://github.com/sandcastleco/8th-best-legs-productions.git",
    // Make sure hidden files get pushed, like .nojekyll
    dotfiles: true,
  },
  function (err) {
    console.log(err);
  }
);
