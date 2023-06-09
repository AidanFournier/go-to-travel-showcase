import styles from './styles/Global';
import { HeroTori } from "./assets";

const App = () => {
  return (
    <div className={`${styles.bgBlue} ${styles.section} w-screen h-screen`}>
      <div className={`${styles.bgWhite} w-full h-full rounded-[32px] shadow-2xl flex justify-between`}>

        {/* Left side panel */}
        <div className="flex justify-center items-start p-6">

          {/* Logo */}
          <div className='flex justify-center items-center space-x-2'>
            <div className={`${styles.bgBlue} w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#5CA7F1] from-10% to-[#336699] to-90%`}>
              <h1 className='text-white text-xl tracking-wide font-medium'>Go</h1>
            </div>
            <div className={`text-xl font-bold tracking-medium ${styles.blueText}`}>To Travel</div>
          </div>


        </div>
        


        {/* Hero Img */}
        <div className="h-full w-[65%]">
          <img 
            src={HeroTori}
            alt="Hero image of red tori gate"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
