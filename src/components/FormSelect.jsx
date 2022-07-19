import { MenuItem, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

export const FormSelect = ({ name, label, options, ...props }) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <TextField
          select
          helperText={error ? error.message : null}
          error={Boolean(error)}
          onChange={onChange}
          value={value}
          label={label}
          {...props}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  )
}
