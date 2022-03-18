import React from 'react';
import '../styles/SignUpForm.scss';
import { cn } from '@bem-react/classname';
import { useFormikContext } from 'formik';
import { Button, TextField } from '@mui/material';
import FormContentLayout from '../../../layouts/FormContentLayout';
import CheckboxComponent from '../../../components/inputs/CheckboxComponent/CheckboxComponent';
import { Link } from 'react-router-dom';

const cnSignUpForm = cn('SignUpForm');

const SignUpForm = (): JSX.Element => {
  const formik = useFormikContext();

  return (
    <FormContentLayout className={cnSignUpForm()}>
      <TextField label={'Login'} />
      <TextField label={'Password'} />
      <div className={cnSignUpForm('CheckboxLinkWrapper')}>
        <CheckboxComponent label={'Remember me'} />
        <Link to={'/forgot-password'}>Forgot password?</Link>
      </div>
      <Button>Sign In</Button>
    </FormContentLayout>
  );
};

export default SignUpForm;
