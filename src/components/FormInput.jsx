import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

export const FormInput = ({ name, label, ...props }) => {
  return (
    <Controller
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => {
        return (
          <TextField
            required
            helperText={error?.message}
            error={Boolean(error)}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            label={label}
            {...props}
          />
        )
      }}
    />
  )
}
