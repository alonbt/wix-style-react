#!/usr/bin/env bash

lerna bootstrap --no-ci

# symlink each package node_modules/.bin to root node_modules/.bin
# this is needed to support CLI tools in each package,
# without installing CLI tools separately, multiple times
lerna exec "rm -r node_modules/.bin | true; ln -s \$LERNA_ROOT_PATH/node_modules/.bin node_modules/.bin"

if ! is-ci; then
  echo "Welcome to the Unified Library!"
  echo ""
  echo "It seems we're running a clean install."
  echo "Please allow me to build projects for the first time..."
  echo ""

  if ! test -d packages/wix-style-react/dist; then
    echo "Building wix-style-react..."
    lerna run build --scope wix-style-react
  fi

  if ! test -d packages/wix-ui-tpa/dist; then
    echo "Building wix-ui-tpa..."
    lerna run build --scope wix-ui-tpa
  fi
fi

echo "Finished bootstrapping"
