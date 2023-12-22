import {
  DialogActions,
  Button,
  DialogContentText,
  TextField,
} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { REQUIRED_MESSAGE } from '@/domain/error'

import { petType } from '../Journal/model'

export const AddPetForm: FC<{
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  register: UseFormRegister<petType>
}> = ({ isOpen, onOpen, onClose, register }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>New Pet</DialogTitle>
      <DialogContentText>Please enter your new pet.</DialogContentText>
      <TextField
        autoFocus
        margin='dense'
        id='name'
        label='Name'
        type='text'
        fullWidth
        required
        {...register('name', { required: REQUIRED_MESSAGE })}
      />
      <TextField
        autoFocus
        margin='dense'
        id='from when'
        type='date'
        label='From when'
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        required
        {...register('birthday', { required: REQUIRED_MESSAGE })}
      />
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}
