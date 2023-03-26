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
          {/* TODO: fix later */}
          {/* {petSelection.value !== undefined && (
            <PetSelect
              value={petSelection.value}
              onChange={petSelection.onChange}
              options={petSelection.options}
            />
          )} */}
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align='right'>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {journals.length === 0 ? (
                  <div>no data</div>
                ) : (
                  journals.map(({ title, from_date, to_date, id }, idx) => (
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
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  )
}
