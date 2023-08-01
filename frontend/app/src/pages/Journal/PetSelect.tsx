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
    console.log(pet)
    setPet({ id: value?.id, name: value?.name })
  }, [value])

  return (
    <Select
      labelId='demo-simple-select-label'
      id='demo-simple-select'
      defaultValue={value.id}
      onChange={({ target }, child) => {
        onChange({
          id: target?.value as number,
          name: child?.props?.children,
        })
        setPet({ id: target?.value as number, name: child?.props?.children })
        console.log(pet)
      }}
      value={pet.id}
      name={pet.name}
    >
      {options.map(({ id, name }, idx) => (
        <MenuItem value={id} key={idx}>
          {name}
        </MenuItem>
      ))}
    </Select>
  )
}
