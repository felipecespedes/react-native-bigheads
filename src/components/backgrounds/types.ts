import { colors } from 'theme';

export interface BgShapeProps {
  bgColor: keyof typeof colors.bgColors
}

export interface BgMaskProps {
  id: string
}
