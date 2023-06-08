import styles from './styles/Global';
import { HeroTori } from "./assets";

const App = () => {
  return (
    <div className={`${styles.bgBlue} ${styles.section} w-screen h-screen`}>
      <div className={`${styles.bgWhite} w-full h-full rounded-[32px] shadow-2xl flex justify-between`}>
        <div>Hello</div>
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
