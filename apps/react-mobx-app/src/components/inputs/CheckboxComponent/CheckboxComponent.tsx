import React from 'react';
import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';

interface CheckboxComponentProps extends CheckboxProps {
  label: string;
}

const CheckboxComponent = (props: CheckboxComponentProps): JSX.Element => {
  return (
    <FormControlLabel control={<Checkbox {...props} />} label={props.label} />
  );
};

export default CheckboxComponent;
