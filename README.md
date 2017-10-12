# CSUA Website

Featuring the horrors of Node.js

## Maintainer Guide

- Update the files in ./static/data

## Contribution Process

- Navigate to where you want to clone the website. Clone it, get into it, make a
  new branch, make changes, push that branch, and create a pull request for that
  branch. For example,
  - `git clone https://github.com/CSUA/csua-website` clones the website to  your
    local machine
  - `cd csua-website` to navigate to the project directory
  - `git checkout -B BRANCH_NAME`: creates a new branch named BRANCH_NAME and
    checks it out (switches to it)
    - Choose a branch name like `dev-caleb` or the name of the feature you are
      working on
  - Make changes and commit them, e.g.
    - `touch documentation.txt`
    - `git add documentation.txt`
    - `git commit -m "I added documentation."` or just `git commit`
    - or any other series of changes
  - `git push --set-upstream origin BRANCH_NAME`: if you try pushing without
    setting upstream, it'll tell you do git gud and do this
  - Now create a pull request (PR) from your branch to the `dev` branch on Github
    - When the `dev` branch is tested and stable, a member of root staff will
      merge it with `prod` and deploy it on the CSUA server

## Setup Dev Site on Local Machine

- Install the latest version of Node and NPM (currently Node 8)
  - On Debian/Ubuntu, set up the Node 8 PPA with
    `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -` followed by
    `sudo apt-get install nodejs` to actually install Node and NPM
  - Or just download the latest binaries from Node's website
- Navigate to project directory
- `npm install` to install dependencies
- `node node_modules/webpack/bin/webpack.js` will bundle together website assets
  to be deployed
  - Adding the watch `-w` flag to that command lets you run it as a background
    service to regenerate the `deploy/` folder when any files are changed
- `node deploy/testServerBundle`

## Developer Guide (Frontend) AKA How 2 edit React site

- Nonexistant
- Please write documentation here
- https://www.youtube.com/watch?v=nnsm2UBH8qE

## Root Staff Guide (Deploying/Systems)

- This repo is located in `/webserver/csua-website` on production
  (`services.csua.berkeley.edu`)
- There are two systemd services that make this work, both in
  `/etc/systemd/system` (the files in this repo are just copies)
  - `csua-website.service`: Runs the node server as root, which binds to
    `/run/node/node.sock`
  - `csua-website-webpack.service`: Runs webpack in watch mode, which is used
    to update the resources and bundle files with zero downtime (supposedly)
- Requests to `https://www.csua.berkeley.edu` are ProxyPass'ed by Apache to this
  server
- Apache config is in `/etc/apache2/sites-available/csua-website.conf`
- Check on status using some of these commands:
  - `sudo systemctl status csua-website`
  - `sudo systemctl status csua-website-webpack`
  - `sudo journalctl -u csua-website`
    - Press "G" to go to the bottom
  - `sudo journalctl -u csua-website-webpack`
