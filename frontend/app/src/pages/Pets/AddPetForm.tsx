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
import { UseFormRegister, FieldErrors } from 'react-hook-form'

import { REQUIRED_MESSAGE } from '@/domain/error'
import { petSex } from '@/domain/petSex'

import { petType } from '../Journal/model'

export const AddPetForm: FC<{
  isOpen: boolean
  onClose: () => void
  register: UseFormRegister<petType>
  errors: FieldErrors<petType>
  disableSaveButton: boolean
  onSubmit: () => void
  isEdit: boolean
  value: petType
}> = ({
  isOpen,
  onClose,
  register,
  errors,
  disableSaveButton,
  onSubmit,
  isEdit,
  value,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} sx={{ padding: '10px' }}>
      <DialogTitle>{isEdit ? 'Edit Pet' : 'New Pet'}</DialogTitle>
      <DialogContentText>
        Please {isEdit ? 'update your' : 'enter your new'} pet information
      </DialogContentText>
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
        error={'birthday' in errors}
        helperText={errors.birthday?.message}
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
        id='sex_id'
        label='Pet Sex'
        fullWidth
        required
        select
        helperText='Please select your pet sex'
        {...register('sex_id', { required: REQUIRED_MESSAGE })}
        defaultValue={isEdit ? value.sex_id : 1}
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
        <Button
          onClick={onSubmit}
          variant='contained'
          color='success'
          disabled={disableSaveButton}
        >
          {isEdit ? 'Save' : 'Register'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
