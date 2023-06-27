import { useState } from 'react';
import ReactCardCarousel from "react-card-carousel";

import styles from './styles/Global';
import { Button, ButtonBlack } from './components';
import { AttractionsIcon, HeroTori, HotelsIcon, RestaurantsIcon, ExpoIcon, GitHubIcon, QRCode, LogoPin } from "./assets";

const App = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(current => !current);
  };
  
  return (
    <div className={`${styles.bgBlue} ${styles.flexCenter} w-screen h-screen sm:p-4`}>
      <div className={`${styles.bgWhite} ${styles.flexCenter} w-full h-full ${styles.rounded} shadow-2xl relative z-0`}>

        {/* Left side panel */}
        <div className={`${styles.flexRowCenter} ${styles.rounded} ${styles.panelContainer}`}>

          {/* Logo */}
          <div className={`${styles.flexCenter} lg:justify-start space-x-2 lg:mb-28 mb-20 relative`}>
            {/* <div className={`${styles.bgTrGrad} ${styles.flexCenter} lg:w-10 lg:h-10 w-12 h-12 rounded-full`}>
              <h1 className={`${styles.whiteText} ${styles.largeText} tracking-wide`}>Go</h1>
            </div> */}
            <img
              src={LogoPin}
              className={`${styles.flexCenter} w-10 h-10 absolute lg:-bottom-3 lg:-left-0.5 z-10`}
            >
            </img>
            <h1 className={`${styles.whiteText} lg:pr-1 z-20`}>Go</h1>
            <h1 className={`${styles.blueText}`}>To Travel</h1>
          </div>

          {/* Tagline */}
          <div className={`${styles.blueText} ${styles.flexRowCenter} ${styles.xlText} mb-28 grow`}>
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
          <div className={`${styles.flexCenter}`}>
            <h3 className={`${styles.blueText} ${styles.largeText}`}>
              Open now via the Expo Go app
            </h3>
          </div>

          <Button 
            handleClick={handleClick}
            showQR={isShown}
          />

          <div className={`${styles.flexCenter} mt-[2rem] lg:hidden`}>
            <h3 className={`${styles.blueText} ${styles.largeText}`}>
              Or view it on
            </h3>
          </div>

          <div className={`${styles.flexCenter} lg:mt-[3rem] mt-[0.5rem] space-x-3`}>
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
            <div className={`${styles.absoluteContainerCenter}`}>
              <div className={`${styles.flexCenter} bg-white/25 w-56 h-56 rounded-2xl border-solid border-white`}>
                <img src={QRCode} alt="expo-icon" className={`w-52 h-52 m-2 rounded-xl shadow-2xl`}/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
