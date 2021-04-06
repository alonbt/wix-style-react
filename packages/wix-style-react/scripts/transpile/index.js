/* eslint no-console: 0 */
const ProgressBar = require('progress');

const tasks = [
  {
    task: () => require('./tasks/clean-dist'),
    description: 'cleaned ./dist',
  },
  {
    task: () => require('./tasks/transpile-copy-files'),
    folder: 'testkit',
    description: '** testkit => dist/testkit',
  },
  {
    task: () => require('./tasks/transpile-copy-files'),
    folder: 'test',
    description: '** testkit => dist/testkit',
  },
  {
    task: () => require('./tasks/transpile-src'),
    description: '.js src => dist/src',
  },
  {
    task: () => require('./tasks/patch-ssr-stylable'),
    description: '.st.css patch ssr',
  },
  {
    task: () => require('./tasks/replace-stylable-imports'),
    description: '.st.css /dist/src => /dist/es/src',
  },
];

const STEPS = tasks.length;
const TOTAL_STEPS_WIDTH = 20;
const START_TIME = new Date();
const STEP_WIDTH = TOTAL_STEPS_WIDTH / STEPS;

const progress = new ProgressBar(
  'Transpiling `src` -> `dist` :bar :percent :dir',
  {
    total: STEP_WIDTH * STEPS,
  },
);

tasks
  .reduce(
    (promise, { task, description, folder }) =>
      promise
        .then(() => task()({ folder }))
        .then(() => progress.tick(STEP_WIDTH, { dir: description }))
        .catch(e => {
          progress.interrupt('Error');
          console.error(e);
        }),
    Promise.resolve(),
  )
  .then(() =>
    console.log(`🚀 Done in ${Math.round(new Date() - START_TIME) / 1000}s`),
  );
