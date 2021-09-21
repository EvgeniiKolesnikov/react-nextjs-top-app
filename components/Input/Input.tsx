import React, { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './Input.props';
import styles from './Input.module.scss';
import cn from 'classnames';

export const Input = forwardRef(
  (
    { className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return <input className={cn(styles.input, className)} ref={ref} {...props} />;
  }
);
