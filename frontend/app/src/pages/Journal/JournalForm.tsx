import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import { FC } from 'react'

export const JournalForm: FC<{
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
}> = ({ onSubmit, isOpen, onClose }) => {
  return (
    <FormControl onSubmit={onSubmit}>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>New Record</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter your new record.</DialogContentText>
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
          <TextField
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
          <Button onClick={onClose} variant='outlined' color='success'>
            Cancel
          </Button>
          <Button onClick={onSubmit} variant='contained' color='success'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </FormControl>
  )
}
