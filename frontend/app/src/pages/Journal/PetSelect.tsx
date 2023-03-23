import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { FC, useState, useEffect } from 'react'

export const PetSelect: FC<{
  value: { id: number; name: string }
  onChange: (option: { id: number; name: string } | null) => void
  options: Array<{ id: number; name: string }>
}> = ({ value, onChange, options }) => {
  const [pet, setPet] = useState(value ?? { id: value.id, name: value.name })

  useEffect(() => {
    setPet({ id: value?.id, name: value?.name })
  }, [value])

  return (
    <Select
      labelId='demo-simple-select-label'
      id='demo-simple-select'
      defaultValue={value.id}
      onChange={(_, value) => onChange(value)}
      value={pet.id}
    >
      {options.map(({ id, name }, idx) => (
        <MenuItem value={id} key={idx}>
          {name}
        </MenuItem>
      ))}
    </Select>
  )
}
