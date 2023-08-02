import styles from '../styles/Global';

// eslint-disable-next-line react/prop-types
const ButtonBlack = ({ url, icon, alt, title }) => {
  return (
    <a 
      href={url}
      target='_blank'
      rel="noreferrer"
      aria-label={alt}
      className={`${styles.btnBlack}`}
      // onClick={() => window.open({url}, "_blank")}
    >
        <img src={icon} alt={alt} className={styles.btnIcon} />
        <div className="flex flex-col justify-start lg:ml-4 ml-2">
            <p className={`${styles.btnText}`}>View it on</p>
            <p className={`${styles.btnTextBold}`}>{title}</p>
        </div>
    </a>
  )
}

export default ButtonBlack;
