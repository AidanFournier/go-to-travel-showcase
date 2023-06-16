import styles from '../styles/Global';

// eslint-disable-next-line react/prop-types
const Button = ({ handleClick, showQR }) => {
  return (
    <div className="mt-[1rem] flex justify-center items-center">
      <button 
        onClick={handleClick}
        className='text-white bg-gradient-to-r from-[#5CA7F1] to-[#336699] hover:bg-gradient-to-bl px-8 py-4 rounded-2xl text-center hover:drop-shadow-2xl transition-all scale-100 hover:scale-105 ease-in duration-300'
      >
        {showQR ? 
          <h1 className='text-white text-xl drop-shadow-xl'>Hide QR Code</h1>
          :
          <h1 className='text-white text-xl drop-shadow-xl'>Reveal QR Code</h1>
        }
      </button>
    </div>
  )
}

export default Button;