import React from 'react';
import FullPageCentredLayout from '../layouts/FullPageCentredLayout';
import SignUpFormik from '../modules/SignUpModule/form/SignUpFormik';

const SignUpPage = (): JSX.Element => {
  return (
    <FullPageCentredLayout>
      <SignUpFormik />
    </FullPageCentredLayout>
  );
};

export default SignUpPage;
