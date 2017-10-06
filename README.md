# CSUA Website

Featuring the horrors of Node.js

## Maintainer Guide

- Update the files in ./static/data

## Getting Started

- Navigate to where you want to clone the website. Clone it, get into it, make a new branch, make changes, push that branch, and create a pull request for that branch. For example,
  - `git clone https://github.com/CSUA/csua-website`
  - `cd csua-website`
  - `git checkout -B "${BRANCH_NAME}"`
  - Make changes and commit them, e.g
    - `touch memes.txt`
    - `git add memes.txt`
    - `git commit -m "I added a text file of memes."`
    - or any other series of changes
  - `git push --set-upstream origin ${BRANCH_NAME}`
  - now create a pull request (PR) from your branch to master on Github

## Developer Guide (Frontend)

- Nonexistant
- Please write documentation here

## Developer Guide (Deploying/Systems)

- This repo is located in `/webserver/csua-website` on production (`services.csua.berkeley.edu`)
- There are two systemd services that make this work, both in `/etc/systemd/system`
    - `csua-website.service`: Runs the node server as root, which binds to `/run/node/node.sock`
    - `csua-website-webpack.service`: Runs webpack in watch mode, which is used to update the resources and bundle files with zero downtime (supposedly)
- Requests to `https://csua.berkeley.edu` are ProxyPass'ed by Apache to this server
- Apache config is in `/etc/apache2/sites-available/csua-website.conf`
- Check on status using some of these commands:
    - `sudo systemctl status csua-website`
    - `sudo systemctl status csua-website-webpack`
    - `sudo journalctl -u csua-website`
        - Press "G" to go to the bottom
    - `sudo journalctl -u csua-website-webpack`

