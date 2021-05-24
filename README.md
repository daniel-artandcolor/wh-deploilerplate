# wh-deploilerplate 🚀

__This template includes several files for testing, building, and deploying a Jekyll site via GitHub FTP action to any server.__  

For NYU-DSS, this will generally be to an NYU Web Hosting server, e.g., `specialcollections.hosting.nyu.edu` with CPanel.  
This can be adapted to use any static site generator; you'll just need to change the dependencies installed in actions and replace the rake tasks with your runner of choice.

![stop motion paper animation of a purple hand pressing a red button labeled "deploy"](https://thumbs.gfycat.com/AlarmingVeneratedArgentinehornedfrog-small.gif)

## Prerequisites

- [x] Ability to create and manage FTP accounts on your target server
- [x] Ability to create a new GitHub repo from this template
- [x] A static site. This template is geared towards Jekyll
- [x] Permissions to run GitHub actions and manage repo secrets

## Repo Tour

| File(s)                        | Purpose                                                                          |
|:-------------------------------|:---------------------------------------------------------------------------------|
| `Gemfile`                      | specifies the Ruby dependencies. add to / change these for your purpose.         |
| `Rakefile`                     | specifies the `test`, `build`, and `reset` tasks.                                |
| `src`                          | contains the demo jekyll site. replace this with your own site's source content. |
| `.github/workflows/deploy.yml` | defines the steps and conditions for deploymentexecuted by GitHub actions        |
| `.github/workflows/test.yml`   | defines the steps and conditions for testingexecuted by GitHub actions           |

## Steps

### Use and tweak this template
1. Click the "Use this Template" button above.
2. Rename it to the name of the site you'll be working with.
3. Replace the `src` directory with your own site's content and `_config.yml` with your own site's config.
4. Add any addtional project-specific dependencies to the `Gemfile`.

### Create FTP deploy account on target host
1. Log in to your dashboard and navigate to the “FTP Accounts” tab under “Files.”
   <img alt="image of cpanel UI with FTP Accounts highlighted" src="http://marii.info/images/cpanel_ftp.png" width="600" />
2. Create a special FTP account just for deployments. Under “directory” put public_html. If you want the site to be in a subdirectory from the root URL (e.g., “marii.hosting.nyu.edu/my-site”), enter the subdirectory after `public_html` with no trailing slash (e.g., `public_html/my-site`). More info available [here](https://docs.cpanel.net/cpanel/files/ftp-accounts/).


   <img alt="CPanel UI webform labeled 'Add an FTP Account'" src="http://marii.info/images/create_ftp_account.png" width="400" />

### Add FTP secrets to GitHub repo

### Enable and run the actions
