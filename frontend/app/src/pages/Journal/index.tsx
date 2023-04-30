import EditIcon from '@mui/icons-material/Edit'
import { Tooltip } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { FC } from 'react'

import { Layout } from '@/components/Layout'
import { SideMenu } from '@/components/SideMenu'
import { formatTime } from '@/domain/time'
import { Primary } from '@/style/ts/tokens'

import { UseJournal } from './hooks'
import { JournalForm } from './JournalForm'

export const Journal: FC = () => {
  const drawerWidth = 240
  const { journals, registeringJournalForm, petSelection } = UseJournal()
  const columns = [
    {
      field: 'title',
      headerName: 'Title',
      width: 300,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 300,
      valueGetter: ({ row: { from_date, to_date } }) =>
        `${formatTime(from_date)} ~ ${formatTime(to_date)}`,
    },
    {
      field: 'actions',
      type: 'actions',
      getActions: ({
        row: { id, title, from_date, to_date, category, note },
      }) => [
        <Tooltip title='edit'>
          <GridActionsCellItem
            icon={
              <IconButton
                color='success'
                aria-label='edit journal'
                onClick={registeringJournalForm.onOpen}
              >
                <EditIcon />
              </IconButton>
            }
            label='edit'
            onClick={() =>
              registeringJournalForm.onOpen({
                id,
                title,
                from_date,
                to_date,
                category,
                note,
              })
            }
          />
        </Tooltip>,
      ],
    },
  ]

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
          <Box>
            <DataGrid
              getRowHeight={() => 'auto'}
              autoHeight
              rows={journals}
              columns={columns}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
