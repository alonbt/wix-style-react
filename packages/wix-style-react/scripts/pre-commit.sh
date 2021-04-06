#!/usr/bin/env bash

echo '{"*.{css,scss}": "stylelint"}' | npx lint-staged --verbose -c - &&
echo '{"!(.wuf/generator/templates/**)*.js": "yoshi lint --fix"}' |  npx lint-staged -c -
