import { forwardRef } from 'react';

import styles from './input.module.scss';

export const Input = forwardRef(
  ({ id, type = 'text', placeholder, error, label, ...rest }, ref) => (
    <>
      <input
        ref={ref}
        className={`${styles.input} ${error ? styles.error : ''}`}
        id={id}
        type={type}
        placeholder={placeholder}
        {...rest}
        aria-label={label}
      />
      {error && <span>{error}</span>}
    </>
  ),
);

Input.displayName = 'Input';
