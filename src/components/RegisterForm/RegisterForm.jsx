import { Formik, ErrorMessage  } from 'formik';
import { FormContainer, BtnAdd, Label, Span, Input } from './RegisterForm.styled';
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
export default function RegisterForm() {

  const handleSubmit = (values, { resetForm }) => {

  }

    
    return (
        <>
        <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues}>
            <FormContainer autoComplete="off">
                <Label htmlFor="name">
                    <Span>Name</Span>
                        <Input type="text" name="name"  />
                    <ErrorMessage name='name' component="div"/> 
                </Label>
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
                    <BtnAdd type="submit">Register</BtnAdd>
            </FormContainer>
            </Formik>
            </>
    );
};


