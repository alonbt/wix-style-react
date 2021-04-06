const { execute } = require('./utils');

const TAG_PREFIX = 'WUT-v'

function run() {
  if (process.env.IS_BUILD_AGENT) {
    try {
      const version = process.env.npm_package_version;
      const tagName = `${TAG_PREFIX}${version}`;

      execute(`git tag -a ${tagName} -m "wix-ui-tpa version ${tagName}"`, true);
      execute(`git push origin ${tagName}`, true);
    } catch (e) {
      console.error("Couldn't add a tag", e);
    }
  } else {
    console.warn('Not in a CI agent. Git tagging is skipped.');
  }
}

run();
