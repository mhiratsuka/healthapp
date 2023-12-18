import { DialogActions, Button, DialogContentText } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { FC } from 'react'

export const AddPetForm: FC<{
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>New Pet</DialogTitle>
      <DialogContentText>Please enter your new pet.</DialogContentText>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}
