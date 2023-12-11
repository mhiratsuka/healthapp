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
      </Dialog>
    </FormControl>
  )
}
