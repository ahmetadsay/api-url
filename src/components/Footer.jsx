import React from 'react'
import logo1 from '/Users/ahmet/Downloads/url-shortening-api-master/react/src/assets/images/icon-facebook.svg'
import logo2 from '/Users/ahmet/Downloads/url-shortening-api-master/react/src/assets/images/icon-instagram.svg'
import logo3 from '/Users/ahmet/Downloads/url-shortening-api-master/react/src/assets/images/icon-pinterest.svg'
import logo4 from '/Users/ahmet/Downloads/url-shortening-api-master/react/src/assets/images/icon-twitter.svg'

const Footer = () => {
  return (
    <div className='sm:flex bg-gray-800 text-white h-full'>
        <div className=' sm:flex flex flex-col justify-center items-center '>
        <h1 className='text-3xl font-bold mt-5 '>Shortly</h1>
        <div className='sm:flex flex flex-col '>
            <h1 className=' mt-8'>Features</h1>
            <div className=' sm:flex flex flex-col gap-4  opacity-50 mt-6' >
            <p >Link Shortening</p>
            <p>Branded Links</p>
            <p> Analytics</p>
            </div>
        </div>
        <div className='flex flex-col '>
            <h1 className=' mt-8'>Resources</h1>
            <div className='flex flex-col gap-4  opacity-50 mt-6' >
            <p >Blog</p>
            <p>Devlopers</p>
            <p>Support</p>
            </div>
        </div>
        <div className='flex flex-col '>
            <h1 className=' mt-8'>Features</h1>
            <div className='flex flex-col gap-4  opacity-50 mt-6' >
            <p >About</p>
            <p>Our Team</p>
            <p> Careers</p>
            <p> Contact</p>
            </div>
        </div>
      
       
        </div>
        <div className=' sm:flex flex mt-12 gap-6 justify-center '>
            <img src={logo1} />
            <img src={logo2} />
            <img src={logo3} />
            <img src={logo4} />
            

        </div>

    </div>
  )
}

export default Footer