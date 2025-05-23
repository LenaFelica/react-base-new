import styles from './social-links.module.scss';

export const SocialLinks = ({ links }) => {
  if (!links || links?.length === 0) {
    return null;
  }

  const filteredLinks = links.filter(({ imagePath }) => Boolean(imagePath));

  return (
    <div className={styles.socialLinks}>
      {filteredLinks.map(({ href, imagePath }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          <img src={imagePath} alt={href} />
        </a>
      ))}
    </div>
  );
};
