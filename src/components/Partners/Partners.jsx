import React from 'react'
import tw from "../../assets/partner/topWave.png";
import dw from "../../assets/partner/downWave.png";
import p1 from "../../assets/partner/p1.png";
import p2 from "../../assets/partner/p2.png";
import p3 from "../../assets/partner/p3.png";
import p4 from "../../assets/partner/p4.png";
import p5 from "../../assets/partner/p5.png";
import p6 from "../../assets/partner/p6.png";


const Partners = () => {
    const partners = [
        {logo:p1 , className:"w-32"},
        {logo:p2, className:"w-32"},
        {logo:p3, className:"w-34"},
        {logo:p4, className:"w-32"},
        {logo:p6, className:"w-48"},
        {logo:p5 , className:"w-48"},

    ]
  return (
    <div className='bg-black relative'>
        <img src={tw} alt='top-Wave' className='absolute w-full object-cover'/>
        <div className='container flex flex-col items-center justify-center py-10 '>
            <div className='py-3 '>
                <h1 className='p-4 text-4xl sm:text-4xl md:text-4xl bg-gradient-to-r from-[#ff9422] to-[#d63715] bg-clip-text text-transparent'
                style={{fontFamily:"Gilroy-Bold"}}>Our Partners</h1>
            </div>
            <div className='text-wrap text-lg sm:text-lg'>
                <p className='text-[#E0E0E0] text-wrap '
                style={{fontFamily:"Gilroy-Bold"}}>We have collaborated with a diverse array of partners <br/> each bringing unique expertise and value to make journey of our student hassle-free.</p>
            </div>
            <div className='flex space-x-14 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                {partners.map((partner)=>(
                    <div className='flex items-center justify-end'>
                        <img src={partner.logo}
                             className={partner.className}
                             />
                    </div>
                ))}
            </div>

   <div className='absolute bottom-0 left-0 w-full'>     
     <img src={dw} alt='top-Wave' className='w-full object-cover  '/>
     </div>
        </div>


    </div>
  )
}

export default Partners