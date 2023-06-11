// import { Component } from "react";
import ReactCardCarousel from "react-card-carousel";

import styles from './styles/Global';
import { AttractionsIcon, HeroTori, HotelsIcon, RestaurantsIcon } from "./assets";

const App = () => {
  return (
    <div className={`${styles.bgBlue} ${styles.section} w-screen h-screen`}>
      <div className={`${styles.bgWhite} w-full h-full rounded-[32px] shadow-2xl flex justify-between`}>

        {/* Left side panel */}
        <div className="flex-row justify-center items-center p-6 grow">

          {/* Logo */}
          <div className='flex justify-start items-center space-x-2 mb-28'>
            <div className={`${styles.bgBlue} w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#5CA7F1] from-10% to-[#336699] to-90%`}>
              <h1 className='text-white text-xl tracking-wide font-medium'>Go</h1>
            </div>
            <div className={`text-xl font-bold tracking-medium ${styles.blueText}`}>To Travel</div>
          </div>

          {/* Tagline */}
          {/* <div className='flex-row justify-center items-center'> */}
            <div className={`mb-28 font-bold text-2xl flex-row grow justify-center items-center text-center ${styles.blueText}`}>
              <h2>Explore Japan.</h2>
              <h2>On your own schedule.</h2>
            </div>

            {/* Features Carousel */}
            <div>
              <div className={styles.carouselContainer}>
                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
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
            </div>

          {/* </div> */}
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
