# `react-native-bigheads`

<p align="center" >
  <img alt="Big Heads Demo" src="screenshots/screenshot.gif" height="600" />
</p>

**Big Heads** avatars for React Native. Based on [@bigheads/core](https://github.com/RobertBroersma/bigheads)

<p align="center" >
  <img alt="Big Heads Demo" src="https://bigheads.io/svg?one" height="100" />
  <img alt="Big Heads Demo" src="https://bigheads.io/svg?two" height="100" />
  <img alt="Big Heads Demo" src="https://bigheads.io/svg?three" height="100" />
  <img alt="Big Heads Demo" src="https://bigheads.io/svg?four" height="100" />
  <img alt="Big Heads Demo" src="https://bigheads.io/svg?five" height="100" />
</p>

## Getting Started

### install dependencies

```shell
yarn add react-native-bigheads react-native-svg
```

or

```shell
npm install react-native-bigheads react-native-svg --save
```

This package requires [react-native-svg](https://github.com/react-native-community/react-native-svg) to be installed

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

### `accessory`

Type of accessory

| Type     | Required |
| -------- | -------- |
| enum('none', 'roundGlasses', 'tinyGlasses', 'shades') | No       |

---

### `body`

Type of body

| Type     | Required |
| -------- | -------- |
| enum('chest', 'breasts') | No       |

---

### `circleColor`

The color of the circular background

| Type     | Required |
| -------- | -------- |
| enum('blue') | No       |

---

### `clothing`

Type of cloth

| Type     | Required |
| -------- | -------- |
| enum('naked', 'shirt', 'dressShirt', 'vneck', 'tankTop', 'dress') | No       |

---

### `clothingColor`

The color of the clothes

| Type     | Required |
| -------- | -------- |
| enum('white', 'blue', 'black', 'green', 'red') | No       |

---

### `containerProps`

Props to be passed to the container element ([View](https://reactnative.dev/docs/view))

| Type     | Required |
| -------- | -------- |
| [View.props](https://reactnative.dev/docs/view#props) | No       |

---

### `containerStyles`

Styles to be applied to the container element ([View](https://reactnative.dev/docs/view))

| Type     | Required |
| -------- | -------- |
| [Style](https://reactnative.dev/docs/style) | No       |

---

### `eyebrows`

Type of eyebrows

| Type     | Required |
| -------- | -------- |
| enum('raised', 'leftLowered', 'serious', 'angry', 'concerned') | No       |

---

### `eyes`

Type of eyes

| Type     | Required |
| -------- | -------- |
| enum('normal', 'leftTwitch', 'happy', 'content', 'squint', 'simple', 'dizzy', 'wink', 'heart') | No       |

---

### `facialHair`

Type of facial hair

| Type     | Required |
| -------- | -------- |
| enum('none', 'none2', 'none3', 'stubble', 'mediumBeard') | No       |

---

### `graphics`

Type of graphics over the t-shirts

| Type     | Required |
| -------- | -------- |
| enum('none', 'redwood', 'gatsby', 'vue', 'react', 'graphQL') | No       |

---

### `hair`

Type of hair

| Type     | Required |
| -------- | -------- |
| enum('none', 'long', 'bun', 'short', 'pixie', 'balding', 'buzz', 'afro', 'bob') | No       |

---

### `hairColor`

The color of the hair

| Type     | Required |
| -------- | -------- |
| enum('blonde', 'orange', 'black', 'white', 'brown', 'blue', 'pink') | No       |

----

### `hat`

Type of hat

| Type     | Required |
| -------- | -------- |
| enum('none', 'none2', 'none3', 'none4', 'none5', 'beanie', 'turban') | No       |

---

### `lipColor`

The color of the lips

| Type     | Required |
| -------- | -------- |
| enum('red', 'purple', 'pink', 'turqoise', 'green') | No       |

---

### `mouth`

Type of mouth

| Type     | Required |
| -------- | -------- |
| enum('grin', 'sad', 'openSmile', 'lips', 'open', 'serious', 'tongue') | No       |

---

### `size`

Size of the avatar

| Type     | Required | Default |
| -------- | -------- | ------- |
| number   | No       | 100     |

---

### `skinTone`

The color of the skin

| Type     | Required |
| -------- | -------- |
| enum('light', 'yellow', 'brown', 'dark', 'red', 'black') | No       |

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
