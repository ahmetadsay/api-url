import React from 'react'
import logo1 from '/Users/ahmet/Downloads/url-shortening-api-master/react/src/assets/images/icon-brand-recognition.svg'
import logo2 from '/Users/ahmet/Downloads/url-shortening-api-master/react/src/assets/images/icon-detailed-records.svg'
import logo3 from '/Users/ahmet/Downloads/url-shortening-api-master/react/src/assets/images/icon-fully-customizable.svg'


const Statistics = () => {
  return (
    <>
    <div className='bg-[#EFF1F7] w-full mt-12 rounded-2xl' >
        <div className='flex flex-col text-center gap-6 mx-8 ' >
            <h1 className='text-4xl font-semibold mt-4 ' >Advanced Statistics</h1>
            <p className=' opacity-50 text-lg'> Track how your links are performing across the web with our advanced statistics dahsboard </p>
        </div>

            <div className=' relative z-10 translate-y-10  bg-[#3b3054] flex justify-center w-20 h-20 rounded-full ml-40 mt-12 items-center'>
            <img src={logo1} />
            </div>
            <div className='  bg-white w-10/12   h-72 ml-10 rounded-xl flex flex-col text-center items-center justify-center'>
                <h1 className=' font-bold text-2xl mt-16'>Brand Recognition </h1>
                <p className='opacity-50 mt-6 mx-10 text-lg ' > Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content. </p>
            </div>
            <div className=' bg-[#2acfcf] w-2 h-12 translate-x-[196px]' ></div>
            <div className=' relative z-10  bg-[#3b3054] flex justify-center w-20 h-20 rounded-full ml-40 items-center'>
            <img src={logo2} className='' />
            </div>
            <div className='  bg-white w-10/12   h-72 ml-10 rounded-xl flex flex-col text-center items-center justify-center'>
                <h1 className=' font-bold text-2xl mt-16'>Detailed Records </h1>
                <p className='opacity-50 mt-6 mx-10 text-lg ' > Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better desicions.</p>
            </div>
            <div className=' bg-[#2acfcf] w-2 h-24 translate-x-[196px]' ></div>
            <div className=' relative z-10  bg-[#3b3054] flex justify-center w-20 h-20 rounded-full ml-40 items-center'>
            <img src={logo3} className='' />
            </div>
            <div className='  bg-white w-10/12  translate-y-[-3rem] h-72 ml-10 rounded-xl flex flex-col text-center items-center justify-center'>
                <h1 className=' font-bold text-2xl mt-16'>Fully Customizable </h1>
                <p className='opacity-50 mt-6 mx-10 text-lg ' > Improve brand awareness and content discoverability through customizable links, supercharging audience engagement. </p>
            </div> 
    </div>
    <div className='w-full h-64 bg-[#3b3054] flex flex-col items-center justify-center gap-8'>
    <h1 className=' text-white text-2xl '> Boost your links today</h1>
    <button className=' bg-[#2acfcf] text-white rounded-full p-4 px-12 text-xl '>Get Started </button>
    </div>
    </>
  )
}

export default Statistics