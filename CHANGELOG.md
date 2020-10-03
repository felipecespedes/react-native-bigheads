# Version 1.1.0 🎉
* `svgRef` prop was added. It is a ref to the `<Svg>` component
*  `size` `containerStyles` `containerProps` props were marked as optional
* `BigHead` props were extended to also support the [SvgProps](https://github.com/react-native-community/react-native-svg/blob/b2e2c355204ff4b10973d3afce1495f7e4167ff7/src/index.d.ts#L388) on its `<Svg>` component

# Version 1.0.0 🎉
* New `accessory` values were added: `faceMask`, `hoopEarrings`
* New `clothing` values were added: `denimJacket`, `hoodie`, `chequeredShirt`, `chequeredShirtDark`
* New `eyes` values were added: `crazy`, `cute`, `dollars`, `stars`, `cyborg`, `simplePatch`, `piratePatch`
* New `facialHair` value was added: `goatee`
* New `graphic` values were added: `donut`, `rainbow`
* New `hair` value was added: `mohawk`
* New `hat` values were added: `party`, `hijab`
* New `mouth` values were added: `piercedTongue`, `vomitingRainbow`
* `bgShape` prop was introduced, its possible values are: `square`, `circle`, `squircle`
* `bgColor` prop was introduced, its possible values are: `blue`, `green`, `red`, `orange`, `yellow`, `turqoise`, `pink`, `purple`

*These new values and props were inspired by [vue-bigheads](https://github.com/DerpyScripts/vue-bigheads)*

## Breaking changes ⚠️
* `mask` prop was renamed to `showBackground`
* `circleColor` prop was renamed to `bgColor`
* `heart` value was renamed to `hearts` in the `eyes` prop
