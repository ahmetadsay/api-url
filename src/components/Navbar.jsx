import logo from '/Users/ahmet/Downloads/url-shortening-api-master/react/src/assets/images/logo.svg';
import hamburger from '/Users/ahmet/Downloads/url-shortening-api-master/react/src/assets/images/icons8-hamburger-menu-50.png'
import bgimage from '/Users/ahmet/Downloads/url-shortening-api-master/react/src/assets/images/illustration-working.svg'
import { useState } from 'react';



export const Navbar = () => {

    const [isHidden, setIsHidden] = useState(true)

    const removeHidden = () => {
        setIsHidden(!isHidden)
    }


    return (
        <>
        <div className=' flex justify-between'>
            <img className='h-8' src={logo}/>
            <button onClick={removeHidden}>
            <img className=' w-6' src={hamburger}  />
            </button>
        </div>
        <div className = {` ${isHidden ? 'hidden' : ''} bg-[#3b3054] text-white rounded-2xl mt-12 h-[25rem] text-center items-center  `}>
            <div className='flex flex-col gap-8 font-bold text-lg'>
                <h1>Features</h1>
                <h1>Pricing</h1>
                <h1>Resources</h1>
            </div>
            <hr />
            <div className='text-white flex flex-col  items-center justify-center gap-8 '>
                <h1 className='font-bold text-lg mt-12 '>Login</h1>
                <button className='  bg-[#2acfcf] text-white rounded-full p-4 px-12 text-xl '>Sign up</button>
            </div>

        </div>
        <div className=' sm:flex'>
        <div className=' w-[540px] mt-8'>
        <img className=' overflow-hidden ' src= {bgimage} />
        </div>

        <div className='text-center mt-12'>
            <h1  className=' font-bold text-4xl' >More than just shorter links</h1>
            <h3 className='text-lg mt-6 opacity-50 ' >Build your brand's  recognition and get detailed insights on how your links are preforming.</h3>
            <button className=' mt-12 bg-[#2acfcf] text-white rounded-full p-4 px-12 text-xl '>Get Started </button>

        </div>
        </div>
        </>
    )
}