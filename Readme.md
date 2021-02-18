### Assignment

1. Use branches for every change. I.e. adding new component, branch and pull request
   for that.
1. Change name in `package.json` to something `@yourGithubUsername/resume-components`
   i.e. `@mindaugas-jacionis/resume-components` (use only lowercase letters, `@` and `-`)
1. Transfer reusable components from your project to this project under `/components`
   just like example components there. Include styles too.
1. Create documentation of your components and their variations via storybook. Those
   are created under `/stories/components`. **Note:** filenam must end with `.story.js` or `.story.mdx`
1. If there is more than components to document - add that too to stories. If needed
   create new directory for that (i.e. utility styles, tone of message and etc.)
1. Every time some changes are done and you want to merge them - update `version`
   value in `package.json` file
1. Using command `npm i git+ssh://git@github.com/your-username/repository-name.git`
   add your components library as a package to your resume project.
   (You can do the same with other projects)
1. Import components from your newly created package and use them instead of
   existing project components. Delete those old ones after you make sure
   everything is looking good.
