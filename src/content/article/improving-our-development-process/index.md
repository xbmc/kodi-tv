---
title: 'Improving our development process'
date: 2010-12-06T03:00:00Z
author: Team XBMC
---
At this year’s [DevCon](/article/xbmc-devcon-2010-summary) we took a long hard look our development process; we decided that while it works, it is starting to show a few cracks and we know we can do better.

 We have a lot of issues with the current development model, mostly due to a lack of communication between developers prior to committing to mainline. This makes mainline more unstable than it needs to be; as churning of commits (initial commit, fix, re-fix, fix builds etc.) takes place. Instead, development in separate branches prior to commit, with sign-off and peer review from the developers who are active in the particular code area will reduce this churn and increase code quality of each commit. Currently we’re reviewing after the fact, rather than before, which clearly is not good practice. Git makes it easier to do review beforehand, so hopefully better tools will lead to better practices.

 For those interested in how XBMC is developed, please read on.

  Maintainer Model
----------------

 The basic idea is that maintainers will be identified for various key areas in XBMC – people that have the most experience in particular code areas. There is already an understood “owner” of most parts of the code, but this will make that ownership more official. We will establish a simple rule that changes should be run past the maintainers prior to committing to mainline. Again, it is hoped by introducing peer review and accountability for commits, it will lead to better code.

 Unit Testing
------------

 Many areas and functions in XBMC could be improved with the help of unit tests. Currently we have very few of them. From now on when implementing a new featuring or when bug fixing, we plan to start implementing unit testing where it is appropriate. This will aid in reducing regressions and will allow us to more easily replicate issues and reliably conduct testing. This will also allow the community to provide more accurate and useful testcases.

 The library scanner is a perfect example of something that would benefit from unit testing. When scanning (not scraping!) files into the library there are so many edge-cases for naming conventions and file locations that changing the behavior even slightly for one will likely break another. If we had a clear set of tests, and a dummy file-system layout to match, we could say with certainty that each case is verified working.

 Moving to Git
-------------

 We want to move away from using SVN as our version control system and move to Git. It was decided that github seems to be the most likely candidate for hosting our git repository, though we’d still have a clone on sourceforge.

 We will initially use git the same way as we use SVN – i.e. all developers have commit access, but in time, will look to move to a hierarchical model i.e. several “key area” branches/trees that are managed by maintainers that merge into mainline when features are complete. This process will evolve in time, and should lead to much more maintainable code.

 The git migration is technically done. We are only waiting for the Dharma release to flip the switch. This means that there may be a small downtime for things that depend on svn (feeds, automated builds, trac, etc.) but they’re obviously a priority and we will have them working again asap. If there is a significant interest in the move , what it entails, and what it will change, we can post more information.

 Making sense of the mess
------------------------

 The build system currently leaves a lot to be desired. The folder structure in particular needs cleaning up; we have external libraries in places they should not be (i.e. code not written by us polluting the code written by us). It is also agreed that we move from a “default to internal libraries” model to a “default to external libraries” model. This will allow natural attrition to get rid of the internal libraries we currently have as we get the external libraries set up. It is easier to do this using git, so moving to git will be a priority.

 We also want to get reduce the number of dependencies to minimize the difficulty of building XBMC. By removing the number of internal dependencies that we currently have, it should make it easier for us to be included in distro repositories and make the code much easier to maintain.

 