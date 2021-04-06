# Adding icons

1. Receive the approval for the new icon from one of the library's UXs [milkyfruit](https://github.com/milkyfruit) or [ZilvinasMaciulis](https://github.com/ZilvinasMaciulis)
1. Go to [wix-ui-icons-common](https://github.com/wix/wix-ui/tree/master/packages/wix-ui-icons-common) package and follow the guidelines.
1. After a new `wix-ui-icons-common` version is published, delete node_modules and reinstall dependencies to get the latest version with the new icon.
1. The new icon will be available to be consumed from `wix-ui-icons-common` library `import MyAwesomeIcon from 'wix-ui-icons-common/MyAwesomeIcon'` or `import MyAwesomeIcon from 'wix-ui-icons-common/system/MyAwesomeIcon'`
