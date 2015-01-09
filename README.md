Hi there, source peeker!

Here is where you can find the code belonging to the personal website of software engineer Jose Antonio Escribano [shareisevolve.com](http://shareisevolve.com/).

Below you find a list of important information and details, that I use on a daily basis, or I will need in the future if I haven't worked on the project for a long time ☺

On A Daily Basis
=======

Every time I am about to start working on the project, **node** needs to be activated by running:

```bash
# don't forget to activate node before start using gulp !!!
nvm use
```

## Folder Structure

Find below the project structure so people can find its way...

```bash
+ app/
  | + _kit/                       # generated automatically (don't touch when developing)
  | + _pages/                     # kit files
      |-- _index.kit              # working code for index.html page
      | ...

  | + _src/                       # partial files to be included in pages (includes)
      |-- _head.kit
      |-- _footer.kit
      | ...

  | + assets/                     # files not related with code
      | + ai/                     # Illustrator files
      | + psd/                    # Photoshop files
      | ...

  | + bower_components/           # bower components
  | + fonts/                      # external fonts
  | + images/                     # images to be included in project
  | + scripts/                    # javascript files
  | + styles/
      |
      | + base/                   # reset, typography, site-wide
      |   |-- _index.scss         # imports for all base styles
      |   |-- _base.scss          # base styles
      |   |-- _normalize.scss     # normalize v3.0.1
      |   |-- _susy-setup.scss    # global layouts definitions
      |   |-- _breakpoints.scss   # media queries for different devices
      |
      | + layout/                 # major components, e.g., header, footer etc.
      |   |-- _index.scss         # imports for all layout styles
      |   | ...
      |
      | + modules/                # minor components, e.g., buttons, widgets etc.
      |   |-- _index.scss         # imports for all modules
      |   | ...
      |
      | + utilities/              # non-CSS outputs (i.e. mixins, variables) & non-modules
      |   |-- _index.scss         # imports for all mixins + global project variables
      |   |-- _fonts.scss         # @font-face mixins
      |   |-- _functions.scss     # ems to rems conversion, etc.
      |   |-- _global.scss        # global variables
      |   |-- _helpers.scss       # placeholder helper classes
      |   |-- _mixins.scss        # media queries, CSS3, etc.
      |   |-- _lib.scss           # imports for third party styles
      |   | + lib/                # third party styles
      |       | _content-carousel.scss
      |       | ...
      |   |-- _vendor-prefixes.scss # mixins for all vendor prefixes
      |
      |-- main.scss               # primary Sass file
      |-- _shame.scss             # because hacks happen ☺
```

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