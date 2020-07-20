# `react-native-bigheads`

<p align="center" >
  <img alt="Big Heads Demo" src="https://github.com/felipecespedes/react-native-bigheads/blob/master/screenshots/screenshot.gif" height="600" />
</p>

**BigHeads** avatars for React Native. Based on [@bigheads/core](https://github.com/RobertBroersma/bigheads)

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

### Props

- [`accessory`](#accessory)
- [`body`](#body)
- [`circleColor`](#circlecolor)
- [`clothing`](#clothing)
- [`clothingColor`](#clothingcolor)
- [`containerProps`](#containerprops)
- [`containerStyles`](#containerstyles)
- [`eyebrows`](#eyebrows)
- [`eyes`](#eyes)
- [`facialHair`](#facialhair)
- [`graphics`](#graphics)
- [`hair`](#hair)
- [`hairColor`](#haircolor)
- [`hat`](#hat)
- [`lipColor`](#lipcolor)
- [`mouth`](#mouth)
- [`size`](#size)
- [`skinTone`](#skinTone)

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

---

# Authors
- Some portions of this code belong to the [Big Heads authors](https://github.com/RobertBroersma/bigheads) which are distributed under the [MIT License](https://github.com/RobertBroersma/bigheads/blob/main/LICENSE)
- [Felipe Céspedes](https://felipecespedes.github.io/) <img src="https://bigheads.io/svg?accessory=roundGlasses&body=chest&circleColor=blue&clothing=shirt&clothingColor=red&eyebrows=raised&eyes=happy&facialHair=none&graphic=none&hair=short&hairColor=brown&hat=none5&hatColor=red&lashes=true&lipColor=red&mask=true&mouth=grin&skinTone=light" alt="Big Head" height="50" />

# License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/felipecespedes/react-native-bigheads/blob/master/LICENSE) file for details

# Contributing
Please see the [Contributing Guidelines](https://github.com/felipecespedes/react-native-bigheads/blob/master/CONTRIBUTING.md).
