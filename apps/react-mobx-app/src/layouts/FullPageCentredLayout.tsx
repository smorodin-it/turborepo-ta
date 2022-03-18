import React, { ReactNode } from 'react';
import './styles/FullPageCentredLayout.scss';
import { cn } from '@bem-react/classname';

const cnFullPageCentredLayout = cn('FullPageCentredLayout');

interface FullPageCentredLayoutProps {
  children: ReactNode;
}

const FullPageCentredLayout = (
  props: FullPageCentredLayoutProps
): JSX.Element => {
  return <div className={cnFullPageCentredLayout()}>{props.children}</div>;
};

export default FullPageCentredLayout;
