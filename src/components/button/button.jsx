import styles from './button.module.scss';

export const Button = ({ children, variant, additionalClassname, rest }) => {
  const createButtonVariant = () => {
    switch (variant) {
      case 'primary':
        return `${styles.button} ${styles.primary}`;
      case 'secondary':
        return `${styles.button} ${styles.secondary}`;
      case 'text':
        return `${styles.button} ${styles.text}`;
      default:
        return styles.button;
    }
  };

  const createButtonClassname = () => {
    const baseClass = createButtonVariant();
    return additionalClassname ? `${baseClass} ${additionalClassname}` : baseClass;
  };

  return (
    <button className={createButtonClassname()} {...rest}>
      {children}
    </button>
  );
};
