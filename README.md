# React Native Boilerplate 🚀
Quick start for React Native projects.

## How to use?
TODO

## What is included?
### Typescript
Basic Typescript setup in `tsconfig.json`. Jest support for Typescript in `package.json`.

TODO Add proper prop types for screens!
### Eslint & Prettier
Eslint and Prettier configuration is set up in `package.json`.
Added extensions: 
* [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) - The parser that allows ESLint to lint TypeScript code
* [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) - ESLint rules specific for TypeScript
* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Disables ESLint rules that might conflict with prettier
* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Runs prettier as an ESLint rule
* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Supports linting of ES2015+ (ES6+) import/export syntax
* [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Enforces the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) - React specific linting rules for ESLint
* [eslint-plugin-react-native](https://www.npmjs.com/package/eslint-plugin-react-native) - React Native specific linting rules for ESLint
* [@react-native-community/eslint-config](https://www.npmjs.com/package/@react-native-community/eslint-config) 

TODO: Add husky
### Tests
Jest configuration in `package.json`. 
Enzyme adapter config and JSDOM replacement is placed in `.testsetup.js`.
You should place all default modules jest mocks in `.testsetup.js`.
Additionally: 
* [react-test-renderer](https://github.com/facebook/react/tree/master/packages/react-test-renderer)
* [react-native-testing-library](https://github.com/callstack/react-native-testing-library) - Enzyme replacement in case of issues

TODO: e2e - Detox
### Debugging
For testing you should use [Flipper](https://fbflipper.com/) which is shipped by default in React Native 0.62.
### Directory structure
```bash
├── .jest
├── .circleci
├── android
├── docs
├── e2e
├── ios
├── node_modules
├── patches
├── scripts
├── src
│   ├── assets
│   │   ├── fonts
│   ├── common
│   │   ├── hooks
│   │   ├── locale
│   │   ├── styles
│   │   └── utils
│   ├── components
│   ├── navigation
│   ├── screens
│   │   │   ├── screen1
│   │   │   │   ├── __tests__
│   │   │   │   ├── components
│   │   │   │   └── Screen1.tsx
│   │   │   └── screen2
│   ├── services
│   ├── state
│   ├── stories
│   └── App.tsx
├── storybook
├── types
├── .env.files
├── .testsetup
├── app.json
├── index.js
└── package.json
```
`.jest`- Jest folder including cache.
`.circleci`- CircleCI configuration.
`android`- Android files.
`docs`- Place for additional docs.
`e2e`- Detox e2e tests directory.
`ios`- IOS files.
`patches`- In case any patches needed place them here.
`scripts`- Place for custom scripts ex to clean react or Xcode.
`scr`- Main application directory.
`scr/assets`- Assets directory (images, fonts).
`scr/common`- Common logic like hooks, locale, styles or utils.
`scr/components`- Shared components directory.
`scr/navigation`- Navigation config directory.
`scr/screen`- Application's screens. Screen specific components should be place in its directory under components/.
`scr/services`- Services like auth0, location, wifi or handling offline state.
`scr/state`- Application's state.
`scr/stories`- Storybook stories.
`scr/storybook`- Storybook config and stories.
`scr/types`- Application's shared types.

### Navigation
[React navigation](https://reactnavigation.org/) is used as an app navigation.
The navigation switches between: 
* AppLoading component (should rehydrate state and handle assets and splash screen).
* Auth screens.
* App screens.

[react-native-screens](https://reactnavigation.org/docs/react-native-screens/) was added to optimize memory usage and performance.

TODO Add state and splash screen.
### Styles
[babel-plugin-react-native-class-prop](https://github.com/zeljkoX/babel-plugin-react-native-class-prop) is used to add 'class' prop. Its configuration can be found in `babel.config.js`.
[Tachyons](http://tachyons.io/) classes are available to use (check tachyons.ts id `src/common/styles`).
Styles specific for a project should be added same way as tachyons classes in its dedicated file e.g. `projectName.ts` and then imported in `src/common/styles/styles.ts`. Here also define Colors and Fonts classes.
Added class prop definition for Typescript in `types/index.d.ts`.
TODO Add class names handler do join styles and class props. For now use class prop AFTER style prop. 
TODO Fix metro bundler!
### API
[axios]() is the main API client.\
A basic API wrapper is provided in `src/common`.\
Based on this [example](https://gist.github.com/sheharyarn/7f43ef98c5363a34652e60259370d2cb). Follow 'Proper Usage' by
creating a separate service for your API calls under `services/api/ModuleAPIService.ts`.
### State
TODO Mobx
### Environment Variables
TODO
### Internationalization
TODO
### Deep linking
TODO
### Add ProgressiveImage component
TODO
### Analytics
TODO Add Segment
### Error boundary
TODO Add ErrorBoundary component to wrap application and send errors to [Sentry](https://sentry.io/for/react-native/) as well to analytics.
### CircleCi
TODO
### Build Types
TODO
### Deploy
TODO

## Next steps to customize this boilerplate
### IMPORTANT Edit bundle id and package name
TODO
### Add custom styles and fonts
TODO
### Add app icon and splash screen
TODO
### Add PullToRefresh component
TODO
### Add NetworkError component
TODO
