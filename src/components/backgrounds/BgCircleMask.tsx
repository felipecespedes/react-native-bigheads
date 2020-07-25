import React from 'react'
import { Mask, Path } from 'react-native-svg'
import { BgMaskProps } from './types'

export const BgCircleMask = ({ id }: BgMaskProps) => {
  return (
    <Mask id={id}>
      <Path
        d="M1000,0H0V718.31H179.2c38.38,142.38,167.45,247.1,320.8,247.1s282.42-104.72,320.8-247.1H1000Z"
        fill="white"
      />
    </Mask>
  )
}
