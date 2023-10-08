import { Box, CardActionArea, CardMedia, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import { FC } from 'react'

import { Layout } from '@/components/Layout'
import { SideMenu } from '@/components/SideMenu'
import { Primary } from '@/style/ts/tokens'

import { usePets } from './hook'

export const Pets: FC = () => {
  const drawerWidth = 240
  const { pets } = usePets()

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 300,
    },
    {
      field: 'kind',
      headerName: 'Kind',
      width: 300,
    },
    {
      field: 'birthday',
      headerName: 'Birthday',
      width: 300,
    },
  ]

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
            <DataGrid
              getRowHeight={() => 'auto'}
              autoHeight
              rows={pets}
              columns={columns}
              initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[10, 20]}
            />
          </Box>
          <Box>
            {pets.map(({ name }, idx) => (
              <Card key={idx}>
                <CardActionArea>
                  {' '}
                  <CardMedia
                    component='img'
                    image='/icon.svg'
                    alt='default pet img'
                  />
                </CardActionArea>
                {name}
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
