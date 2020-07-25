import React from 'react'
import { Mask, Path } from 'react-native-svg'
import { BgMaskProps } from './types'

export const BgSquareMask = ({ id }: BgMaskProps) => {
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
        d="M1000 0H0V718.31H167.551V962.594H832.441V718.31H1000V0Z"
        fill="white"
      />
    </Mask>
  )
}
