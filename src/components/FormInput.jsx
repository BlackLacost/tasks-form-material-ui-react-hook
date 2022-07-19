import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

export const FormInput = ({ name, label, ...props }) => {
  return (
    <Controller
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <TextField
          helperText={error ? error.message : null}
          error={Boolean(error)}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          label={label}
          {...props}
        />
      )}
    />
  )
}
