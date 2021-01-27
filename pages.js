const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/ugahacks/ugahacks-6.git";

ghpages.publish(
  pathname,
  {
    branch: "react-hacks-build-test",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);