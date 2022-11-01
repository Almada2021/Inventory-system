import { ErrorMessage, Field, Form, Formik } from 'formik';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import { useCustomTheme } from '../../hooks/useCustomTheme/useCustomTheme';
const FormContainer = styled(Form)( ({theme}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5px",
}));
const FieldInput = styled(Field)( ({theme, border}) => ({
  width: "90%",
  height: "25px",
  border: "none",
  borderBottom: `1px solid ${border}`,
}));
const Message = styled(ErrorMessage)( ( {theme}) => ({
  color: theme.palette.primary.third,
  fontWeight: "lighter",
}))
function EditProduct({product}) {
    const {name} = product
    const color = useCustomTheme("primary", "secondary")
    return (
    <>
      <Stack direction="column" >
          <Typography variant='h4' fontWeight="bold" color={color} textAlign="center">
              Edit Product
          </Typography>            
          <Typography variant='h6' fontWeight="lighter" color={color} textAlign="center">
              {name}
          </Typography>            
          <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!values.email) {
              errors.email = 'Required';
            } else if (!regexEmail.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            if(values.password.length <= 5){
              errors.password = "Very short password"
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
          >
          {({ isSubmitting }) => (
            <FormContainer>
              <FieldInput placeholder="email" type="email" name="email" border="#00f" />
              <Message name="email" component="div" />
              <FieldInput type="password" name="password" border="#00f"/>
              <Message name="password" component="div" />
              <Stack direction="row" width="100%">  
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Stack>
            </FormContainer>
          )}
          </Formik>
      </Stack>
    </>
  )
}
export default EditProduct