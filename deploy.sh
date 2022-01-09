#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

echo 'docs.arcsecond.io' > CNAME

git config --global user.email "team@arcsecond.io"
git config --global user.name "gh actions bot"
git config --global init.defaultBranch "master"

git init
git add -A
git commit -m 'deploy'

git remote add origin https://arcsecond-io:$GITHUB_TOKEN@github.com/arcsecond-io/arcsecond-io.github.io
git push -f origin master:gh-pages

cd -

