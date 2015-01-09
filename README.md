Project Description
=======
Hi there, source peeker!

Here is where you can find the code belonging to the personal website of software engineer Jose Antonio Escribano [shareisevolve.com](http://shareisevolve.com/).

Below you find a list of important information and details, that I use on a daily basis, or I will need in the future if I haven't worked on the project for a long time ☺

On A Daily Basis
=======

I need to remember that every time I am about to start working on the project, **node** needs to be activated running:

```bash
# don't forget to activate node before start using gulp !!!
nvm use
```

## Folder Structure

## gulp commands

Find below a list of the commands related to gulp and ready to use!

```bash
# runs the specified task (gulpfile.js)
gulp [taskname]

# starts gulp and runs the watch task
gulp watch

# cleans the dist and _kit folder
gulp clean

# emptys the build cache
gulp clear-cache

# makes a build into the dis folder
gulp build
```

Cloning the repository
=======

It might be possible that the next version of the site comes in some months, years, decades? from now. I might not even have the same laptop. If this is the case, go and clone the repository by openning the terminal, going to the projects folder and pasting the code below.

```bash
git clone git@github.com:miriamtocino/share-is-evolve.git share-is-evolve
```

After cloning the repository locally, both **node** and **bower** dependencies need to be installed in your computer:

```bash
# installing node dependencies
npm install

# installing bower dependencies
bower install
```

Finally don't forget to activate **node** before starting to work on the project. Only then you could start using gulp !!!

```bash
# activating node
nvm use
```

Congratulations!
Now you can start working on the latest version of the project!