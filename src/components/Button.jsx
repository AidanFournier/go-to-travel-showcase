import styles from '../styles/Global';

// eslint-disable-next-line react/prop-types
const Button = ({ handleClick, showQR }) => {
  return (
    <div className={`mt-[1rem] ${styles.sectionCenter}`}>
      <button 
        onClick={handleClick}
        className={styles.btnPrimary}
      >
        {showQR ? 
          <h1 className={styles.btnPrimaryText}>Hide QR Code</h1>
          :
          <h1 className={styles.btnPrimaryText}>Reveal QR Code</h1>
        }
      </button>
    </div>
  )
}

export default Button;