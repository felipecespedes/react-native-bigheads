import React from 'react'
import { G, Path } from 'react-native-svg'
import { useTheme } from '../../themeContext'

export const HoopEarrings = () => {
  const { colors } = useTheme()

  return (
    <G>
      <Path
        d="M255 592C233.5 592 238 754.5 253.5 754.5C263.49 754.5 267.457 686.993 265.266 639L263 635C261.667 669.667 257.9 739 253.5 739C245 707.5 248 602.5 258.5 602L255 592Z"
        fill="#FFC227"
        stroke={colors.outline}
        strokeWidth="2"
      />
      <Path
        d="M745 592.5C766.5 592.5 761.851 754.5 746.351 754.5C736.361 754.5 732.394 686.993 734.586 639L736.851 635C738.185 669.667 741.951 739 746.351 739C754.851 707.5 751.5 602.5 741 602L745 592.5Z"
        fill="#FFC227"
        stroke={colors.outline}
        strokeWidth="2"
      />
    </G>
  )
}
