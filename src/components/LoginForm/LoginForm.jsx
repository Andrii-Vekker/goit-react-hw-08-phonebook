import { Formik, ErrorMessage  } from 'formik';
import { FormContainer, BtnAdd, Label, Span, Input } from './LoginForm.style';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email:yup.string().required("Please enter your email"),
    password:yup.string().required("Please enter your password"),
    
});

const initialValues = {
        name: '',
  email: "",
    password: ""
};
export default function LoginForm() {

  const handleSubmit = (values, { resetForm }) => {

  }

    
    return (
        <>
        <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues}>
            <FormContainer autoComplete="off">
                              <Label htmlFor="email">
                  <Span>Email</Span>
                        <Input type="email" name="email" />
                    <ErrorMessage name='phone' component="div"/> 
            </Label>
            <Label htmlFor="password">
                  <Span>Password</Span>
                        <Input type="password" name="password" />
                    <ErrorMessage name='phone' component="div"/> 
                </Label>
                    <BtnAdd type="submit">Login</BtnAdd>
            </FormContainer>
            </Formik>
            </>
    );
};

