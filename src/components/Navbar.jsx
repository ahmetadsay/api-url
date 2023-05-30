import logo from '/Users/ahmet/Downloads/url-shortening-api-master/react/src/assets/images/logo.svg';
import hamburger from '/Users/ahmet/Downloads/url-shortening-api-master/react/src/assets/images/icons8-hamburger-menu-50.png'
import bgimage from '/Users/ahmet/Downloads/url-shortening-api-master/react/src/assets/images/illustration-working.svg'



export const Navbar = () => {


    return (
        <>
        <div className=' flex justify-between'>
            <img className='h-8' src={logo}/>
            <img className=' w-6' src={hamburger}  />
        </div>
        <div className=' w-[540px] mt-8'>
        <img className=' overflow-hidden ' src= {bgimage} />
        </div>

        <div className='text-center mt-12'>
            <h1  className=' font-bold text-4xl' >More than just shorter links</h1>
            <h3 className='text-lg mt-6 opacity-50 ' >Build your brand's  recognition and get detailed insights on how your links are preforming.</h3>
            <button className=' mt-12 bg-[#2acfcf] text-white rounded-full p-4 px-12 text-xl '>Get Started </button>

        </div>
        </>
    )
}