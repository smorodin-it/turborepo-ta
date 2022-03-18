import React, { ReactNode } from 'react';
import './styles/FormContentLayout.scss';
import { cn } from '@bem-react/classname';

const cnFormContentLayout = cn('FormContentLayout');

interface FormContentLayoutProps {
  children: ReactNode;
  className?: string;
}

const FormContentLayout = (props: FormContentLayoutProps): JSX.Element => {
  return (
    <div
      className={`${cnFormContentLayout()}${
        props.className ? ` ${props.className}` : ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default FormContentLayout;
