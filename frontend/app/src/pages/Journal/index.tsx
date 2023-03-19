import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

import { Layout } from '@/components/Layout'
import { SideMenu } from '@/components/SideMenu'
import { Primary } from '@/style/ts/tokens'

import { UseJournal } from './hooks'
import { JournalForm } from './JournalForm'
import { PetSelect } from './PetSelect'

export const Journal: FC = () => {
  const drawerWidth = 240
  const { journals, registeringJournalForm, petSelection } = UseJournal()

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
          {petSelection.value !== undefined && (
            <PetSelect
              value={petSelection.value}
              onChange={petSelection.onChange}
              options={petSelection.options}
            />
          )}
          <Stack direction='row' justifyContent='flex-end'>
            <Button
              variant='contained'
              size='large'
              onClick={registeringJournalForm.onOpen}
              color='success'
            >
              + Add new record
            </Button>
          </Stack>
          <JournalForm
            isOpen={registeringJournalForm.isOpen}
            register={registeringJournalForm.register}
            errors={registeringJournalForm.errors}
            onClose={registeringJournalForm.onClose}
            onSubmit={registeringJournalForm.onSubmit}
            disableCancelButton={registeringJournalForm.disableCancelButton}
            disableSubmitButton={registeringJournalForm.disableSubmitButton}
          />
          {/* <FormControl onSubmit={onSubmit}>
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
                  type='text'
                  fullWidth
                />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <TextField
                    autoFocus
                    margin='dense'
                    id='from when'
                    type='datetime-local'
                    label='From when'
                    fullWidth
                    defaultValue='2023-01-01T10:10'
                  />
                  <ArrowForwardIosIcon />
                  <TextField
                    autoFocus
                    margin='dense'
                    id='to when'
                    type='datetime-local'
                    label='To when'
                    fullWidth
                    defaultValue='2023-01-01T11:00'
                  />
                </Box>
                <TextField
                  autoFocus
                  margin='dense'
                  id='category'
                  label='Category'
                  type='text'
                  fullWidth
                />
                {/* <FormLabel>Health Checks</FormLabel> */}
          {/* <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  defaultValue='verygood'
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    value='verygood'
                    control={<Radio />}
                    label='Very good'
                  />
                  <FormControlLabel
                    value='Good'
                    control={<Radio />}
                    label='Good'
                  />
                  <FormControlLabel
                    value='normal'
                    control={<Radio />}
                    label='Normal'
                  />
                  <FormControlLabel
                    value='notbad'
                    control={<Radio />}
                    label='Not bad'
                  />
                </RadioGroup> */}
          {/* <TextField
                  autoFocus
                  margin='dense'
                  id='note'
                  label='Note'
                  type='text'
                  multiline
                  minRows={2}
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
          </FormControl> */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align='right'>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {journals.map(({ title, from_date, to_date, id }, idx) => (
                  <TableRow
                    sx={{
                      '&:last-child tds, &:last-child th': { border: 0 },
                    }}
                    key={idx}
                  >
                    <TableCell component='th' scope='row'>
                      <Link href={`/journal/${id}`}>{title}</Link>
                    </TableCell>
                    <TableCell align='right'>{`${from_date} ~${to_date}`}</TableCell>
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
