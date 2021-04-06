# Applitools Eyes Dashboard - FAQ

## I approved a change, but the build still fails in CI on the diff I approved

Make sure you saved your selection after reviewing the diffs.

## How can I debug the snapshots diff history?

- Notice: only Wix employees can access the Applitools Eyes dashboard.
- Here's a [link](https://eyes.applitools.com/app/baselines/?accountId=mE99eP8CUn9UTSXSv98L3OSaJ0NZmAcY6Wndx6WSHODdY110&branch=wix%2Fwix-style-react%2Fmaster) to `master` branch in `wix-style-react`.
- Select a repo/branch on the top right corner.
- Filter by component/test name via the filter option (funnel icon).
- Open the test's diff history clicking the the 3 dots icon on the right hand side of the test row, and select Show History.

## How can I enable logs locally?

Just run the following in order to export the logs into a file:
```
APPLITOOLS_SHOW_LOGS=true npm run test:visual > file.log
```
