import styles from './input.module.scss';

export const Input = ({ id, type = 'text', placeholder, error, label, register, ...rest }) => (
  <>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`${styles.input} ${error ? styles.error : ''}`}
      aria-label={label}
      {...register}
      {...rest}
    />
    {error && <span>{error}</span>}
  </>
);
