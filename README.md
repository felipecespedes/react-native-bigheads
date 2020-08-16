# `react-native-bigheads`

<p align="center" >
  <img alt="Big Heads Demo" src="https://github.com/felipecespedes/react-native-bigheads/blob/master/screenshots/screenshot.gif" height="600" />
</p>

**BigHeads** avatars for React Native. Based on [@bigheads/core](https://github.com/RobertBroersma/bigheads)

<a href="https://www.buymeacoffee.com/felipecespedes" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-red.png" alt="Buy Me A Coffee" height="41" width="174"></a>

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
> This package requires [react-native-svg](https://github.com/react-native-community/react-native-svg) to be installed

#### Aditional steps in iOS

```shell
cd ios && pod install
```

### usage

import the `BigHead` component from `react-native-bigheads`

```jsx
import { BigHead } from 'react-native-bigheads'
```
use the `BigHead` component like this:

```jsx
<BigHead
  accessory="shades"
  bgColor="blue"
  bgShape="circle"
  body="chest"
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
  lashes={false}
  lipColor="purple"
  mouth="open"
  showBackground={true}
  size={300}
  skinTone="brown"
/>
```

### Props

- [`accessory`](#accessory)
- [`bgColor`](#bgcolor)
- [`bgShape`](#bgshape)
- [`body`](#body)
- [`clothing`](#clothing)
- [`clothingColor`](#clothingcolor)
- [`containerProps`](#containerprops)
- [`containerStyles`](#containerstyles)
- [`eyebrows`](#eyebrows)
- [`eyes`](#eyes)
- [`facialHair`](#facialhair)
- [`graphic`](#graphic)
- [`hair`](#hair)
- [`hairColor`](#haircolor)
- [`hat`](#hat)
- [`hatColor`](#hatcolor)
- [`lashes`](#lashes)
- [`lipColor`](#lipcolor)
- [`mouth`](#mouth)
- [`showBackground`](#showbackground)
- [`size`](#size)
- [`skinTone`](#skinTone)

# Reference

## Props

### `accessory`

Type of accessory

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('none', 'roundGlasses', 'tinyGlasses', 'shades', 'faceMask', 'hoopEarrings') | No       | Random |

---

### `bgColor`

The color of the background

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('blue', 'green', 'red', 'orange', 'yellow', 'turqoise', 'pink', 'purple') | No       | Random |

---

### `bgShape`

The shape of the background

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('circle', 'square', 'squircle') | No       | Random |

---

### `body`

Type of body

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('chest', 'breasts') | No | Random |

---

### `clothing`

Type of cloth

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('naked', 'shirt', 'dressShirt', 'vneck', 'tankTop', 'dress', 'denimJacket', 'hoodie', 'chequeredShirt', 'chequeredShirtDark') | No       | Random |

---

### `clothingColor`

The color of the clothes

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('white', 'blue', 'black', 'green', 'red') | No       | Random |

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

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('raised', 'leftLowered', 'serious', 'angry', 'concerned') | No       | Random |

---

### `eyes`

Type of eyes

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('normal', 'leftTwitch', 'happy', 'content', 'squint', 'simple', 'dizzy', 'wink', 'hearts', 'crazy', 'cute', 'dollars', 'stars', 'cyborg', 'simplePatch', 'piratePatch') | No       | Random |

---

### `facialHair`

Type of facial hair

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('none', 'stubble', 'mediumBeard', 'goatee') | No       | Random |

---

### `graphic`

Type of graphic over the t-shirts

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('none', 'redwood', 'gatsby', 'vue', 'react', 'graphQL', 'donut', 'rainbow') | No       | Random |

---

### `hair`

Type of hair

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('none', 'long', 'bun', 'short', 'pixie', 'balding', 'buzz', 'afro', 'bob', 'mohawk') | No       | Random |

---

### `hairColor`

The color of the hair

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('blonde', 'orange', 'black', 'white', 'brown', 'blue', 'pink') | No       | Random |

----

### `hat`

Type of hat

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('none', 'beanie', 'turban', 'party', 'hijab') | No       | Random |

---

### `hatColor`

The color of the hat

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('white', 'blue', 'black', 'green', 'red') | No       | Random |

---

### `lashes`

Show lashes

| Type     | Required | Default |
| -------- | -------- | ------- |
| boolean  | No       | Random  |

---

### `lipColor`

The color of the lips

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('red', 'purple', 'pink', 'turqoise', 'green') | No       | Random |

---

### `mouth`

Type of mouth

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('grin', 'sad', 'openSmile', 'lips', 'open', 'serious', 'tongue', 'piercedTongue', 'vomitingRainbow') | No       | Random |

---

### `showBackground`

Whether or not to display the background color

When `true` it cuts off everything below the avatar otherwise it won't clip off any of the avatar

| Type     | Required | Default |
| -------- | -------- | ------- |
| boolean  | No       | true    |

---

### `size`

Size of the avatar

| Type     | Required | Default |
| -------- | -------- | ------- |
| number   | No       | 100     |

---

### `skinTone`

The color of the skin

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('light', 'yellow', 'brown', 'dark', 'red', 'black') | No       | Random |

---

# Authors
- Some portions of this code belong to the [Big Heads authors](https://github.com/RobertBroersma/bigheads) which are distributed under the [MIT License](https://github.com/RobertBroersma/bigheads/blob/main/LICENSE)
- [Felipe Céspedes](https://felipecespedes.github.io/) <img src="https://bigheads.io/svg?accessory=roundGlasses&body=chest&circleColor=blue&clothing=shirt&clothingColor=red&eyebrows=raised&eyes=happy&facialHair=none&graphic=none&hair=short&hairColor=brown&hat=none5&hatColor=red&lashes=true&lipColor=red&mask=true&mouth=grin&skinTone=light" alt="Big Head" height="50" />

# Changelog
[Learn about the latest improvements](https://github.com/felipecespedes/react-native-bigheads/blob/master/CHANGELOG.md)

# License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/felipecespedes/react-native-bigheads/blob/master/LICENSE) file for details

# Contributing
Please see the [Contributing Guidelines](https://github.com/felipecespedes/react-native-bigheads/blob/master/CONTRIBUTING.md).
