import { Box, Button, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FC } from 'react'

import { Layout } from '@/components/Layout'
import { Primary } from '@/style/ts/tokens'

import { UseJournal } from './hooks'

export const Journal: FC = () => {
  const { pets } = UseJournal()


  return (
  <Layout title={'journal'}>
    <Box display='flex' flexDirection='column' width='100%'>
      <Typography variant='h1' gutterBottom color={Primary}>Journal page</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Kind</TableCell>
              <TableCell>Birthday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets.map(({ name, kind, birthday }, idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">{kind}</TableCell>
                <TableCell align="right">{birthday}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button>Test</Button>
    </Box>
  </Layout>
  )
}
