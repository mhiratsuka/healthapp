import CakeIcon from '@mui/icons-material/Cake'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import PetsIcon from '@mui/icons-material/Pets'
import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import Card from '@mui/material/Card'
import { FC } from 'react'

import { Layout } from '@/components/Layout'
import { SideMenu } from '@/components/SideMenu'
import { petSex } from '@/domain/petSex'
import SvgGenderIcon from '@/domain/SvgGenderIcon'
import { birthdayFormat } from '@/domain/time'
import { Primary } from '@/style/ts/tokens'

import { AddPetForm } from './AddPetForm'
import { usePets } from './hook'

export const Pets: FC = () => {
  const drawerWidth = 240
  const { pets, confirmDialog, addingPetForm } = usePets()

  return (
    <Layout title={'Pets'}>
      <Box sx={{ display: { lg: 'flex' } }}>
        <SideMenu drawerWidth={drawerWidth} pageNum={1} />
        <Box
          sx={{
            width: { lg: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Typography variant='h1' gutterBottom color={Primary}>
            Pets Setting
          </Typography>
          <Stack
            direction='row'
            justifyContent='flex-end'
            sx={{ marginBottom: '30px' }}
          >
            <Button
              variant='contained'
              size='large'
              color='success'
              onClick={addingPetForm.onOpen}
            >
              + Add new pet
            </Button>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              columnGap: '30px',
            }}
          >
            {pets.map(({ id, name, birthday, kind, sex_id }, idx) => (
              <Card key={idx}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardMedia
                    component='img'
                    image='/photo-dog.svg'
                    alt='default pet img'
                    sx={{ width: 'auto', height: '200px' }}
                  />
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component='div' variant='h5'>
                      {name}
                    </Typography>
                    <Typography
                      variant='body1'
                      component='div'
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Tooltip title='pet birthday'>
                        <IconButton>
                          <CakeIcon />
                        </IconButton>
                      </Tooltip>
                      {birthdayFormat(birthday)}
                    </Typography>
                    <Typography
                      variant='body1'
                      component='div'
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Tooltip title='pet type'>
                        <IconButton>
                          <PetsIcon />
                        </IconButton>
                      </Tooltip>
                      {kind}
                    </Typography>
                    <Typography
                      variant='body1'
                      component='div'
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Tooltip title='pet sex'>
                        <IconButton>
                          <SvgGenderIcon />
                        </IconButton>
                      </Tooltip>
                      {petSex[sex_id]}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Tooltip title='edit'>
                        <IconButton color='success' aria-label='edit pet info'>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='delete'>
                        <IconButton
                          color='success'
                          aria-label='delete pet info'
                          onClick={() => confirmDialog.onOpen(id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      <AddPetForm
        isOpen={addingPetForm.isOpen}
        onOpen={addingPetForm.onOpen}
        onClose={addingPetForm.onClose}
        register={addingPetForm.register}
        errors={addingPetForm.errors}
      />
      {confirmDialog.isOpen && (
        <ConfirmDialog
          title={'Delete Confirmation'}
          content={
            'Do you really want to delete this pet? This process cannot be undone.'
          }
          onClose={confirmDialog.onClose}
          onSubmit={confirmDialog.onSubmit}
        />
      )}
    </Layout>
  )
}

const ConfirmDialog: FC<{
  title: string
  content: string
  onClose: () => void
  onSubmit: () => void
}> = ({ title, content, onClose }) => {
  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <Divider />
      <DialogActions>
        <Button variant='outlined' color='success' onClick={onClose}>
          Cancel
        </Button>
        <Button variant='contained' color='success' onClick={onClose}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}
