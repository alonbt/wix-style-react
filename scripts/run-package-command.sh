#/usr/bin/env bash

# This script simplifies how npm scripts of monorepo packages are called from the root
#
# For example, given root `package.json` contains
# "wut": "./run-package-command.sh wix-ui-tpa"
# then
# npm run wut build
# would run `npm run build` under `packages/wix-ui-tpa`
#
# this is nice, because without this helper it would be:
# lerna --exec --scope wix-ui-tpa -- npm run build

scope=$1
script=$2
rest_arguments="${@:3}"
lerna exec --scope $scope -- npm run $script `[[ -n "$rest_arguments" ]] && echo "-- $rest_arguments"`
