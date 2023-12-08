import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import { FC } from 'react'

export const AddPetForm: FC<{
  isOpen: boolean
  onClose: () => void
}> = ({ isOpen, onClose }) => {
  return (
    <FormControl>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>New Pet</DialogTitle>
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
      </Dialog>
    </FormControl>
  )
}
