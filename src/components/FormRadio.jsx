import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import { Controller } from 'react-hook-form'

export const FormRadio = ({ name, label, options, ...props }) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FormControl component="fieldset">
          <FormLabel component="legend">{label}</FormLabel>
          <RadioGroup value={value} onChange={onChange}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          <FormHelperText error={Boolean(error)}>
            {error?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  )
}
