import styles from '../styles/Global';

// eslint-disable-next-line react/prop-types
const ButtonBlack = ({ url, icon, alt, title }) => {
  return (
    <div 
        className="bg-black flex items-center justify-center lg:py-1 lg:px-2 py-2 rounded-md mt-2 mb-4 min-w-[6.5rem] cursor-pointer hover:shadow-xl"
        onClick={() => window.open({url}, "_blank")}
    >
        <img src={icon} alt={alt} className={styles.btnIcon} />
        <div className="flex flex-col justify-start lg:ml-4 ml-2">
            <p className={`${styles.btnText} font-normal text-[10px] hidden lg:block`}>View it on</p>
            <p className={`${styles.btnText} lg:font-bold lg:text-[12px] text-xs`}>{title}</p>
        </div>
    </div>
  )
}

export default ButtonBlack;