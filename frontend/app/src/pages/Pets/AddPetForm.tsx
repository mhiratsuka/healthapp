import {
  DialogActions,
  Button,
  DialogContentText,
  TextField,
  MenuItem,
} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { REQUIRED_MESSAGE } from '@/domain/error'
import { petSex } from '@/domain/petSex'

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
        id='birthday'
        type='date'
        label='Birthday'
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        required
        {...register('birthday', { required: REQUIRED_MESSAGE })}
      />
      <TextField
        autoFocus
        margin='dense'
        id='pet type'
        type='text'
        label='Pet Type'
        fullWidth
        required
        {...register('kind', { required: REQUIRED_MESSAGE })}
      />
      <TextField
        autoFocus
        margin='dense'
        id='pet sex'
        label='Pet Sex'
        fullWidth
        required
        select
        helperText='Please select your pet sex'
        {...register('sex_id', { required: REQUIRED_MESSAGE })}
      >
        {Object.entries(petSex).map(([key, value]) => {
          return (
            <MenuItem key={key} value={value}>
              {value}
            </MenuItem>
          )
        })}
      </TextField>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}
