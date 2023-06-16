import styles from '../styles/Global';

// eslint-disable-next-line react/prop-types
const ButtonBlack = ({ url, icon, alt, title }) => {
  return (
    <div 
        className="bg-black flex items-center justify-center py-1 px-2 rounded-md mt-2 min-w-[6.5rem] cursor-pointer hover:shadow-xl"
        onClick={() => window.open({url}, "_blank")}
    >
        <img src={icon} alt={alt} className={styles.btnIcon} />
        <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-[10px]`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-[12px]`}>{title}</p>
        </div>
    </div>
  )
}

export default ButtonBlack;