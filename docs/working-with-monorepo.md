# Working With Monorepo

This repository is a monorepo managed by [lerna](https://github.com/lerna/lerna).

Monorepo means a repository with many managed packages.

A package is a folder with `package.json` file which is inside `packages` directory.

Packages can be:

* public - released and used by other users outside of this monorepo (like `wix-style-react`)
* private - not released and used only by packages in this monorepo (like `wix-style-react-test-runtime`)

## How to setup

Because there are many packages that may share dependencies or use
inter-packages, a tool (`lerna`) is used to manage them.

From root of the monorepo:

```js
npm install
```

This will:
* install all dependencies
* link them (where needed)
* build packages (only locally)*

> \* Because `wix-ui-tpa` has `wix-style-react` as dependency, it will be linked and not downloaded from npm.
> This means `wix-style-react` also must be built, so that `wix-ui-tpa` could work locally.

## How to contribute

Run all commands from the root of the monorepo.  
There should be no need to go into folders and run commands there.

* for `wix-ui-tpa`
  ```
  npm run wut $command
  ```

* for `wix-style-react`
  ```
  npm run wsr $command
  ```

`$command` is any command that is available in the package.

For example,

`npm run wut start` will run `npm run start` of `packages/wix-ui-tpa` package.

## How to work on a single package

Not every change requires all packages to be set up. Sometimes it's
enough to run only some small part.

For example, to work only on wix-style-react:

```
cd packages/wix-style-react
npm install
npm start
```

But Beware of dragons!

This might work but there's no guarantee. You should really run commands
from the root of the monorepo, unless you know what you're doing.

# How to commit

All code changes should be submitted through a pull request (PR).

Once PR is open on github, there will be many test instances to validate code change.

## Commit messages

PRs are merged with squash: all commits of a PR are squashed into one
and then merged into `master` branch as one commit.

Thus, PR names in Github are important and should follow a convention:

`[package-name] commit message`

for example

`[wix-style-react] implement new <HolyGrail/> component`

## PR labels

Some PRs involve code changes of more than one package. In such case it
is mandatory to use github labels and mark the PR appropriately.

For example, a PR which changes code in `wix-style-react` and
`wix-ui-tpa` packages, should have labels of `WSR` and `WUT`.

Thankfully, this is done automatically.
