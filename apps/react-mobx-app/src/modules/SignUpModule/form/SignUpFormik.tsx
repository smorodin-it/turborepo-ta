import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import SignUpForm from './SignUpForm';

const SignUpFormik = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {},
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: Yup.object(),
    onSubmit: () => {},
  });

  return (
    <>
      <FormikProvider value={formik}>
        <Form>
          <SignUpForm />
        </Form>
      </FormikProvider>
    </>
  );
};

export default SignUpFormik;
