import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import Card from '@mui/material/Card'
import { FC } from 'react'

import { Layout } from '@/components/Layout'
import { SideMenu } from '@/components/SideMenu'
import { Primary } from '@/style/ts/tokens'

import { usePets } from './hook'

export const Pets: FC = () => {
  const drawerWidth = 240
  const { pets } = usePets()

  return (
    <Layout title={'Pets'}>
      <Box sx={{ display: { lg: 'flex' } }}>
        <SideMenu drawerWidth={drawerWidth} pageNum={1} />
        <Box
          sx={{
            width: { lg: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Typography variant='h1' gutterBottom color={Primary}>
            Pets Setting
          </Typography>
          <Box>
            {pets.map(({ name }, idx) => (
              <Card
                key={idx}
                sx={{
                  maxWidth: 500,
                  margin: '0 auto',
                  padding: '0.1em',
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      image='/icon.svg'
                      alt='default pet img'
                    />
                  </CardActionArea>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component='div' variant='h2'>
                      {name}
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      color='text.secondary'
                      component='div'
                    >
                      Mac Miller
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
