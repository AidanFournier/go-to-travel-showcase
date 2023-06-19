import { useState } from 'react';
import ReactCardCarousel from "react-card-carousel";

import styles from './styles/Global';
import { Button, ButtonBlack } from './components';
import { AttractionsIcon, HeroTori, HotelsIcon, RestaurantsIcon, ExpoIcon, GitHubIcon, QRCode } from "./assets";

const App = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(current => !current);
  };
  
  return (
    <div className={`${styles.bgBlue} ${styles.section} w-screen h-screen sm:p-4`}>
      <div className={`${styles.bgWhite} w-full h-full md:rounded-[32px] shadow-2xl flex justify-center items-center relative z-0`}>

        {/* Left side panel */}
        <div className="lg:w-[35%] lg:static flex-row justify-center items-center lg:justify-start lg:grow overflow-auto absolute z-10 bg-white/70 lg:bg-transparent lg:h-full rounded-[32px] p-6 w-10/12">

          {/* Logo */}
          <div className='flex lg:justify-start justify-center items-center space-x-2 lg:mb-28 mb-20'>
            <div className={`${styles.bgBlue} lg:w-10 lg:h-10 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#5CA7F1] from-10% to-[#336699] to-90%`}>
              <h1 className='text-white lg:text-xl text-xl tracking-wide font-medium'>Go</h1>
            </div>
            <div className={`lg:text-xl text-xl font-bold tracking-medium ${styles.blueText}`}>To Travel</div>
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
          <div className="flex justify-center items-center">
            <h3 className={`${styles.blueText} font-medium md:text-lg text-sm text-center`}>
              Open now via the Expo Go app
            </h3>
          </div>

          <Button 
            handleClick={handleClick}
            showQR={isShown}
          />

          <div className="flex justify-center items-center mt-[2rem] lg:hidden">
            <h3 className={`${styles.blueText} font-medium md:text-lg text-sm text-center`}>
              Or view it on
            </h3>
          </div>

          <div className="lg:mt-[3rem] mt-[0.5rem] flex justify-center items-center space-x-3 ">
            <ButtonBlack 
              url={"https://expo.dev/@aidoufou/go-to-travel?serviceType=classic&distribution=expo-go"}
              icon={ExpoIcon}
              alt={"Expo icon"}
              title={"Expo Store"}
            />
            <ButtonBlack 
              url={"https://github.com/AidanFournier/go-to-travel"}
              icon={GitHubIcon}
              alt={"GitHub icon"}
              title={"GiHub"}
            />
          </div>

        </div>

        
        {/* Hero Img */}
        <div className="h-full lg:w-[65%] w-full relative">
          <img 
            src={HeroTori}
            alt="Hero image of red tori gate"
            className={styles.fullImg}
          />

          {isShown && (
            <div className="absolute bottom-[5%] left-[5%] transition-all scale-100 ease-in duration-300">
              <div className="bg-white/25 w-52 h-52 rounded-2xl flex jusitfy-center items-center border-solid border-white">
                <img src={QRCode} alt="expo-icon" className="w-48 h-48 m-2 rounded-xl shadow-2xl" />
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  )
}

export default App;
