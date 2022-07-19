import { Button, createTheme, Paper, Stack, ThemeProvider } from '@mui/material'
import { Container, styled } from '@mui/system'
import { FormProvider, useForm } from 'react-hook-form'
import { FormInput } from './components/FormInput'
import { FormRadio } from './components/FormRadio'

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
        fullWidth: true,
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
})

const roles = [
  {
    label: 'User',
    value: 'USER',
  },
  {
    label: 'Admin',
    value: 'ADMIN',
  },
]

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
})

export const App = () => {
  const methods = useForm({
    defaultValues: { firstName: '', role: 'USER' },
  })
  const onSubmit = (data) => console.log(data)

  const { reset, handleSubmit } = methods
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="sm"
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Paper sx={{ padding: 4 }}>
            <FormProvider {...methods}>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormInput name="firstName" label="Имя" />
                <FormRadio name="role" label="Роль" options={roles} />
                <Stack direction="row" spacing={2} justifyContent="end">
                  <Button type="submit">Submit</Button>
                  <Button variant="outlined" onClick={() => reset()}>
                    Reset
                  </Button>
                </Stack>
              </Form>
            </FormProvider>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  )
}
