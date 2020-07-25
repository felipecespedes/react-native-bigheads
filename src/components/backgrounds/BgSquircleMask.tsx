import React from 'react'
import { Mask, Path } from 'react-native-svg'
import { BgMaskProps } from './types'

export const BgSquircleMask = ({ id }: BgMaskProps) => {
  return (
    <Mask
      id={id}
      // @ts-ignore
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="1000"
      height="963"
    >
      <Path
        d="M0 0H1000V630.154H832.44C832.44 922.701 792.547 962.594 500 962.594C207.453 962.594 167.56 922.701 167.56 630.154H0V0Z"
        fill="white"
      />
    </Mask>
  )
}
