import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, { FC } from 'react'

export const PetSelect: FC<{
  value: { id: number; name: string }
  onChange: (option: { id: number; name: string } | null) => void
  options: Array<{ id: number; name: string }>
}> = ({ value, onChange, options }) => {
  return (
    <Select
      labelId='demo-simple-select-label'
      id='demo-simple-select'
      defaultValue={value.id}
      onChange={(_, value) => onChange(value)}
    >
      {options.map(({ id, name }, idx) => (
        <MenuItem value={id} key={idx}>
          {name}
        </MenuItem>
      ))}
    </Select>
  )
}
