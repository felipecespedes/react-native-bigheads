# Contributing to react-native-bigheads

Thanks for your interest in **react-native-bigheads**! You are very welcome to contribute.

## Setup

This project was created with [TSDX](https://github.com/formik/tsdx)

The recommended workflow is to run TSDX in one terminal:

```bash
git clone https://github.com/felipecespedes/react-native-bigheads.git
cd react-native-bigheads
yarn && yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then, create a fresh react native app in another terminal:

```bash
npx react-native init BigHeadsDemo
cd BigHeadsDemo
yarn && yarn add react-native-svg
yarn android # or yarn ios
yarn start
```

As [React Native doesn't support symlinks](https://github.com/facebook/metro/issues/1) yet you will need to copy the content of the `react-native-bigheads/dist` folder and the `react-native-bigheads/package.json` file into the `BigHeadsDemo/node_modules/react-native-bigheads` folder every time you make changes.

The following script can help you to have those directories synchronized, just make sure to:

- Have installed `inotify-tools` & `rsync`
- Place this script on the `react-native-bigheads` root folder and run it

```bash
while inotifywait -r -e modify,create,delete,move ./dist; do
  rsync -avz --delete ./dist ../BigHeadsDemo/node_modules/react-native-bigheads
  cp -rf ./package.json ../BigHeadsDemo/node_modules/react-native-bigheads/package.json
done
```

## Submitting a PR

Before you submit your PR, please make sure you haven't broken anything.
