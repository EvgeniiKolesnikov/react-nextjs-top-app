import React from 'react';
import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.scss';
import cn from 'classnames';

export const Textarea = ({
  className,
  ...props
}: TextareaProps): JSX.Element => {
  return (
    <textarea
      className={cn(styles.textarea, className)}
      {...props}
    />
  );
};
