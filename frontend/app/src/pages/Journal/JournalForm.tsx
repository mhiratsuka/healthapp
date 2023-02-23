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
import { UseFormRegister } from 'react-hook-form'

import { REQUIRED_MESSAGE } from '@/domain/error'

import { journalType } from './model'

export const JournalForm: FC<{
  isOpen: boolean
  register: UseFormRegister<journalType>
  onClose: () => void
  onSubmit: () => void
  disableSubmitButton: boolean
  disableCancelButton: boolean
}> = ({
  isOpen,
  register,
  onClose,
  onSubmit,
  disableSubmitButton,
  disableCancelButton,
}) => {
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
            required
            {...register('title', { required: REQUIRED_MESSAGE })}
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
              required
              {...register('from_date', { required: REQUIRED_MESSAGE })}
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
              required
              {...register('to_date', { required: REQUIRED_MESSAGE })}
            />
          </Box>
          <TextField
            autoFocus
            margin='dense'
            id='category'
            label='Category'
            type='text'
            fullWidth
            required
            {...register('category', { required: REQUIRED_MESSAGE })}
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
            required
            {...register('note', { required: REQUIRED_MESSAGE })}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            variant='outlined'
            color='success'
            disabled={disableCancelButton}
          >
            Cancel
          </Button>
          <Button
            onClick={onSubmit}
            variant='contained'
            color='success'
            disabled={disableSubmitButton}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </FormControl>
  )
}
