import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

import { Layout } from '@/components/Layout'
import { SideMenu } from '@/components/SideMenu'
import { Primary } from '@/style/ts/tokens'

import { UseJournal } from './hooks'

export const Journal: FC = () => {
  const drawerWidth = 240
  const {
    journals,
    recordModalOpen,
    handleRecordModalOpen,
    handleRecordModalClose,
  } = UseJournal()

  return (
    <Layout title={'journal'}>
      <Box sx={{ display: { lg: 'flex' } }}>
        <SideMenu drawerWidth={drawerWidth} />
        <Box
          sx={{
            width: { lg: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Typography variant='h1' gutterBottom color={Primary}>
            Record page
          </Typography>
          <Stack direction='row' justifyContent='flex-end'>
            <Button
              variant='contained'
              size='large'
              onClick={handleRecordModalOpen}
              color='success'
            >
              + Add new record
            </Button>
          </Stack>
          <Dialog open={recordModalOpen} onClose={handleRecordModalClose}>
            <DialogTitle>New Record</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter your new record.
              </DialogContentText>
              <TextField
                autoFocus
                margin='dense'
                id='title'
                label='Title'
                defaultValue='Title'
                type='text'
                fullWidth
              />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  autoFocus
                  margin='dense'
                  id='from when'
                  type='datetime-local'
                  label='From when'
                  defaultValue='2023-01-01T10:10'
                />
                <ArrowForwardIosIcon />
                <TextField
                  autoFocus
                  margin='dense'
                  id='to when'
                  type='datetime-local'
                  label='To when'
                  defaultValue='2023-01-01T10:10'
                />
              </Box>
              <TextField
                autoFocus
                margin='dense'
                id='category'
                label='Category'
                defaultValue='Category'
                type='text'
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleRecordModalClose}
                variant='outlined'
                color='success'
              >
                Cancel
              </Button>
              <Button
                onClick={handleRecordModalClose}
                variant='contained'
                color='success'
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
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
      </Box>
    </Layout>
  )
}
