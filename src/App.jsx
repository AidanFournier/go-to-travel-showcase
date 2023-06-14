import { useState } from 'react';
import ReactCardCarousel from "react-card-carousel";

import styles from './styles/Global';
import { AttractionsIcon, HeroTori, HotelsIcon, RestaurantsIcon, ExpoIcon, GitHubIcon, QRCode } from "./assets";

const App = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = e => {
    setIsShown(current => !current);
  };
  
  return (
    <div className={`${styles.bgBlue} ${styles.section} w-screen h-screen`}>
      <div className={`${styles.bgWhite} w-full h-full rounded-[32px] shadow-2xl flex justify-center`}>

        {/* Left side panel */}
        <div className="w-[35%] flex-row justify-center items-center p-6 grow">

          {/* Logo */}
          <div className='flex justify-start items-center space-x-2 mb-32'>
            <div className={`${styles.bgBlue} w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#5CA7F1] from-10% to-[#336699] to-90%`}>
              <h1 className='text-white text-xl tracking-wide font-medium'>Go</h1>
            </div>
            <div className={`text-xl font-bold tracking-medium ${styles.blueText}`}>To Travel</div>
          </div>

          {/* Tagline */}
          <div className={`mb-28 font-bold text-2xl flex-row grow justify-center items-center text-center ${styles.blueText}`}>
            <h2>Explore Japan.</h2>
            <h2>At your own pace.</h2>
          </div>

          {/* Features Carousel */}
          <div className={styles.carouselContainer}>
            <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
              <div className={styles.cardStyle}>
                <img 
                  src={HotelsIcon} 
                  alt="Hotels"
                  className={styles.iconImg}
                />
              </div>
              <div className={styles.cardStyle}>
                <img 
                  src={AttractionsIcon} 
                  alt="Attractions"
                  className={styles.iconImg}
                />
              </div>
              <div className={styles.cardStyle}>
                <img 
                  src={RestaurantsIcon} 
                  alt="Restaurants"
                  className={styles.iconImg}
                />
              </div>
            </ReactCardCarousel>
          </div>

          {/* CTA */}
          <div className="mt-[14rem] flex justify-center items-center space-x-3 ">
            <div 
              className="bg-black flex items-center py-2 px-4 rounded-md mt-2 w-fit cursor-pointer hover:shadow-lg"
              onClick={() => window.open("https://expo.dev/@aidoufou/go-to-travel?serviceType=classic&distribution=expo-go", "_blank")}
            >
              <img src={ExpoIcon} alt="expo-icon" className={styles.btnIcon} />
              <div className="flex flex-col justify-start ml-4">
                <p className={`${styles.btnText} font-normal text-[12px]`}>View it on</p>
                <p className={`${styles.btnText} font-bold text-[14px]`}>Expo Store</p>
              </div>
            </div>
            <div 
              className="bg-black flex items-center py-2 px-4 rounded-md mt-2 w-fit cursor-pointer space-x-2 hover:shadow-lg"
              onClick={() => window.open("https://github.com/AidanFournier/go-to-travel", "_blank")}
            >
              <img src={GitHubIcon} alt="expo-icon" className={`${styles.btnIcon} h-[30px] w-[30px]`} />
              <div className="flex flex-col justify-start ml-4">
                <p className={`${styles.btnText} font-normal text-[12px]`}>View it on</p>
                <p className={`${styles.btnText} font-bold text-[14px]`}>GitHub</p>
              </div>
            </div>
            
          </div>

          <div className="mt-[4rem] flex justify-center items-center">
            <h3 className={`${styles.blueText} font-medium`}>
              Or open now via the Expo Go app
            </h3>
          </div>

          <div className="mt-[2rem] flex justify-center items-center">
            <button 
              onClick={handleClick}
            >
              Reveal QR Code
            </button>
          </div>

        </div>

        
        {/* Hero Img */}
        <div className="h-full w-[65%] relative">
          <img 
            src={HeroTori}
            alt="Hero image of red tori gate"
            className={styles.fullImg}
          />

          {isShown && (
            <div className="absolute bottom-[5%] left-[5%]">
              <img src={QRCode} alt="expo-icon" className="w-48 h-48 rounded-xl shadow-2xl" />
            </div>
          )}
        </div>
        
      </div>
    </div>
  )
}

export default App;
