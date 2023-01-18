import { Box, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { FC } from 'react'

import { Layout } from '@/components/Layout'
import { SideMenu } from '@/components/SideMenu'
import { Primary } from '@/style/ts/tokens'

import { UseJournal } from './hooks'

export const Journal: FC = () => {
  const { journals } = UseJournal()

  return (
    <Layout title={'journal'}>
      <SideMenu />
      <Box display='flex' flexDirection='column' width='100%'>
        <Typography variant='h1' gutterBottom color={Primary}>
          Journal page
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {journals.map(({ title, from_date, to_date }, idx) => (
                <TableRow
                  key={idx}
                  sx={{ '&:last-child tds, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {title}
                  </TableCell>
                  <TableCell align='right'>
                    {from_date}~{to_date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}
