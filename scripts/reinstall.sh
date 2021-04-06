#!/usr/bin/env bash

# The purpose of this script is to completely reinstall the monorepo
# It is useful for updating local environment after some internal changes were done
# For example, after some infra changes it might be required to reinstall `node_modules`
# It should be enough to run only `npm run reinstall` and all the heavy lifting is done behind the scenes.

rm -rf node_modules package-lock.json

# Remove node_modules, package-lock.json, yarn.lock and dist from all packages
# we can't use `lerna exec` here, because during reinstall `node_modules` might not be available
find packages \( \
  -name node_modules -or \
  -name package-lock.json -or \
  -name yarn.lock -or \
  -name dist \
  \) \
  -exec rm -rf {} \;

npm install
# postinstall should run automatically after `npm install`
