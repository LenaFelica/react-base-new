import styles from './input.module.scss';

export const Input = ({ id, type = 'text', placeholder, error, label, register, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <input
        id={id}
        type={type}
        aria-label={label}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.error : ''}`}
        {...register}
        {...rest}
      />
      {Boolean(error) && <span className={styles.message}>{error}</span>}
    </div>
  );
};
