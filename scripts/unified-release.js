const chalk = require('chalk');
const child_process = require('child_process');

const logger = {
  log: (...args) => {
    console.log(chalk.green(...args));
  },
  error: (...args) => {
    console.log(chalk.red(...args));
  },
  warn: (...args) => {
    console.log(chalk.yellow(...args));
  }
};


const spawnSync = child_process.spawnSync;
const CMD_SPLITTER = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;

function eject(msg, code = 1) {
  logger.error(msg, '\n');
  process.exit(code);
}

function execute(cmd, config) {
  const cmdArr = cmd.match(CMD_SPLITTER);
  return spawnSync(cmdArr[0], cmdArr.slice(1), config);
}

function checkArgvs() {
  if (process.argv.length > 3) {
    eject(
      'Too many arguments were passed to the command.\nSee https://docs.npmjs.com/cli/version for options.',
    );
  }
}

function throwIfNotCleanMaster() {
  let branchName = '';
  let isLocalDirty = false;

  try {
    const branchNameExec = execute('git rev-parse --abbrev-ref HEAD');
    branchName = branchNameExec.output[1].toString().trim();
  } catch (e) {
    logger.error(e);
  }

  if (branchName !== 'master') {
    eject('Must be on master branch to create a release candidate.');
  }

  try {
    execute('git fetch --tags');
  } catch (e) {
    eject(`Couldn't fetch master.`);
  }

  try {
    isLocalDirty = execute('git diff @{upstream} --exit-code')
      .output[1].toString()
      .trim();
  } catch (e) {
    logger.error(e);
  }

  if (isLocalDirty) {
    eject('local master branch is not aligned to origin, please stash or commit changes.');
  }
}

function bumpVersion() {
  const versionArgs = process.argv[2] || 'patch';

  try {
    const versionExecWsr = execute(`npm --no-git-tag-version version ${versionArgs}`, { cwd: 'packages/wix-style-react'});
    logger.log(`Bumping wix-style-react to ${versionArgs} version: ${versionExecWsr.output[1].toString()}`);

    const versionExecWbu = execute(`npm --no-git-tag-version version ${versionArgs}`, { cwd: 'packages/wix-ui-tpa'});
    logger.log(`Bumping wix-ui-tpa to ${versionArgs} version: ${versionExecWbu.output[1].toString()}`);
  } catch (e) {
    eject(`Failed to bump version ${e}`);
  }
}

function updateChangelog() {
  try {
    execute('npm run wut changelog', { stdio: 'inherit' });
  } catch (e) {
    eject(`standard-version failed with error\n ${e}`);
  }
}

function createReleaseBranch() {
  try {
    const newVersionWsr = require('../packages/wix-style-react/package').version;
    const newVersionWbu = require('../packages/wix-ui-tpa/package').version;

    execute(`git checkout -b release/${newVersionWsr}-${newVersionWbu}`);
  } catch (e) {
    eject(`couldn't create release branch`);
  }
}

function run() {
  checkArgvs();
  throwIfNotCleanMaster();
  bumpVersion();
  updateChangelog();
  createReleaseBranch();
  logger.log('\nRelease branch created successfully!\n');
}

run();
