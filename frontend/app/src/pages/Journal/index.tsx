import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { FC } from 'react'

import { Layout } from '@/components/Layout'
import { SideMenu } from '@/components/SideMenu'
import { formatTime } from '@/domain/time'
import { Primary } from '@/style/ts/tokens'

import { UseJournal } from './hooks'
import { JournalForm } from './JournalForm'
import { PetSelect } from './PetSelect'

export const Journal: FC = () => {
  const drawerWidth = 240
  const { journals, registeringJournalForm, petSelection, confirmDialog } =
    UseJournal()
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
              <IconButton color='success' aria-label='edit journal'>
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
        <Tooltip title='delete'>
          <GridActionsCellItem
            icon={
              <IconButton color='success' aria-label='delete journal'>
                <DeleteIcon />
              </IconButton>
            }
            label='delete'
            onClick={() => confirmDialog.onOpen(id)}
          />
        </Tooltip>,
      ],
    },
  ]

  return (
    <Layout title={'journal'}>
      <Box sx={{ display: { lg: 'flex' } }}>
        <SideMenu drawerWidth={drawerWidth} pageNum={0} />
        <Box
          sx={{
            width: { lg: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Typography variant='h1' gutterBottom color={Primary}>
            Record page
          </Typography>
          {/* TODO: fix later */}
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
            disableSubmitButton={registeringJournalForm.disableSubmitButton}
            isEdit={registeringJournalForm.isEdit}
          />
          <Box>
            <DataGrid
              getRowHeight={() => 'auto'}
              autoHeight
              rows={journals}
              columns={columns}
              initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[10, 20]}
            />
          </Box>
        </Box>
      </Box>
      {confirmDialog.isOpen && (
        <ConfirmDialog
          title={'Delete Confirmation'}
          content={
            'Do you really want to delete this record? This process cannot be undone.'
          }
          onSubmit={confirmDialog.onSubmit}
          onClose={confirmDialog.onClose}
        />
      )}
    </Layout>
  )
}

const ConfirmDialog: FC<{
  title: string
  content: string
  onSubmit: () => void
  onClose: () => void
}> = ({ title, content, onSubmit, onClose }) => {
  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <Divider />
      <DialogActions>
        <Button variant='outlined' color='success' onClick={onClose}>
          Cancel
        </Button>
        <Button variant='contained' color='success' onClick={onSubmit}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}
