#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

cd ..

cd cherubicxn.github.io

cp -av /home/xuenan/repo/mywebsite/* .


# Add changes to git.
git add -A

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master

# Come Back
cd ../mywebsite