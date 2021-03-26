# wh-deploilerplate


## Purpose

This template includes several files for testing, building, and deploying a Jekyll site via GitHub FTP action to any server.

For NYU-DSS, this will generally be to an NYU Web Hosting server, e.g., `specialcollections.hosting.nyu.edu` with CPanel.

This can be adapted to use any static site generator; you'll just need to change the dependencies installed in actions and replace the rake tasks with your runner of choice.

## Prerequisites

- Ability to create and manage FTP accounts on your target server
- A GitHub repo with your site content
- Permissions to run GitHub actions and manage repo secrets

## Repo Tour

+ `Gemfile` – specifies the Ruby dependencies. add to / change these for your purpose.

+ `Rakefile` – specifies the `test`, `build`, and `rest` tasks

+ `index.md` and `src` – the demo jekyll site. replace these with your own.

+ `.github/workflows/deploy.yml` – defines the steps and conditions for deployment; executed by GitHub actions

+ `.github/workflows/test.yml` – defines the steps and conditions for testing; executed by GitHub actions

## Setup

### Create FTP Account on Target Server

### Add FTP secrets to GitHub repo

### Use and tweak this template

### Enable and run the actions
