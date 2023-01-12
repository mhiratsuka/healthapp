import Link from '@mui/material/Link'
import { FC, ReactNode } from 'react'

import { Success } from '@/style/ts/tokens'

export const LinkTag: FC<{
  link: string
  underline?: 'none' | 'always' | 'hover'
  color?: string
  children?: ReactNode
}> = ({ link, underline = 'always', color = Success, children }) => {
  return (
    <Link href={link} underline={underline} color={color}>
      {children}
    </Link>
  )
}
