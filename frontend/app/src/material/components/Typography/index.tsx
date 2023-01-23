import { ThemeOptions } from '@mui/material'

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Body1,
  LibreBaskerville,
  EbGaramond,
  Serif,
} from '@/style/ts/tokens'

export const typographyTheme: ThemeOptions = {
  typography: {
    h1: {
      ...Heading1,
    },
    h2: {
      ...Heading2,
    },
    h3: {
      ...Heading3,
    },
    h4: {
      ...Heading4,
    },
    h5: {
      ...Heading5,
    },
    h6: {
      ...Heading6,
    },
    body1: {
      ...Body1,
    },
    button: {
      textTransform: 'none',
    },
    fontFamily: `${LibreBaskerville}, ${EbGaramond}, ${Serif}`,
  },
}
