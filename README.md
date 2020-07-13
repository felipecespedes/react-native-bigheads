# `react-native-bigheads`

<p align="center" >
  <img alt="Big Heads Demo" src="screenshots/screenshot.gif" height="600" />
</p>

**Big Heads** avatars for React Native. Based on [@bigheads/core](https://github.com/RobertBroersma/bigheads)

## Getting Started

### install dependencies

```shell
yarn add react-native-bigheads react-native-svg
```

or

```shell
npm install react-native-bigheads react-native-svg --save
```

Notice this package requires [react-native-svg](https://github.com/react-native-community/react-native-svg) to be installed

### usage

import the `BigHead` component from `react-native-bigheads`

```jsx
import { BigHead } from 'react-native-bigheads'
```
use the `BigHead` component like this:

```jsx
<BigHead
  size={300}
  accessory="shades"
  body="chest"
  circleColor="blue"
  clothing="tankTop"
  clothingColor="black"
  eyebrows="angry"
  eyes="wink"
  facialHair="mediumBeard"
  graphic="vue"
  hair="short"
  hairColor="black"
  hat="none"
  hatColor="green"
  lashes="false"
  lipColor="purple"
  mask="true"
  mouth="open"
  skinTone="brown"
/>
```

# Reference

## Props

### `size`

| Type     | Required | Default |
| -------- | -------- | ------- |
| number   | No       | 100     |

# License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

# Contributing

This project was created with [TSDX](https://github.com/formik/tsdx)

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, [we use Parcel's aliasing](https://github.com/palmerhq/tsdx/pull/88/files).

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.
