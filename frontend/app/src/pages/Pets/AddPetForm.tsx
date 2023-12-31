import {
  DialogActions,
  Button,
  DialogContentText,
  TextField,
  MenuItem,
  FormControl,
} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { FC } from 'react'
import { UseFormRegister, FieldErrors } from 'react-hook-form'

import { REQUIRED_MESSAGE } from '@/domain/error'
import { petSex } from '@/domain/petSex'

import { petType } from '../Journal/model'

export const AddPetForm: FC<{
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  register: UseFormRegister<petType>
  errors: FieldErrors<petType>
}> = ({ isOpen, onOpen, onClose, register, errors }) => {
  return (
    <FormControl>
      <Dialog open={isOpen} onClose={onClose} sx={{ padding: '10px' }}>
        <DialogTitle>New Pet</DialogTitle>
        <DialogContentText>Please enter your new pet.</DialogContentText>
        <TextField
          id='name'
          label='Name'
          type='text'
          margin='dense'
          required
          {...register('name', { required: REQUIRED_MESSAGE })}
          error={'name' in errors}
          helperText={errors.name?.message}
        />
        <TextField
          margin='dense'
          id='birthday'
          type='date'
          label='Birthday'
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
          error={'kind' in errors}
          helperText={errors.kind?.message}
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
          defaultValue='1'
        >
          {Object.entries(petSex).map(([key, value]) => {
            return (
              <MenuItem key={key} value={key}>
                {value}
              </MenuItem>
            )
          })}
        </TextField>
        <DialogActions>
          <Button onClick={onClose} variant='outlined' color='success'>
            Cancel
          </Button>
          <Button onClick={onClose} variant='contained' color='success'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </FormControl>
  )
}
