import React from 'react'

const MentorCard = ({item}) => {
  return (
    <div className='rounded-4xl shadow-md h-[450px] mb-4 flex flex-col overflow-hidden'>
        
        <div className='flex flex-col flex-1 gap-5 rounded-md'>
            {/* Gradient Header */}
            <div className='bg-gradient-to-r from-orange-500 to-red-500 h-[103px] rounded-t-4xl'/>
            {/* Profile Image */}
            <div className='flex items-center justify-center -mt-24  '>
                <img src={item.image}
                     alt={item.name}
                     className='w-32 h-auto rounded-full object-cover shadow-md'/>
            </div>

            {/* Name */}
            <div>
                <h1 className='text-2xl sm:text-lg md:text-2xl' style={{
                    fontFamily:"Gilroy-Bold"
                }}>{item.name}</h1>
                <p className='text-md sm:text-md text-gray-700'
                style={{fontFamily:"Gilroy"}}
                >{item.role}</p>
            </div>

            <div className='flex items-start justify-around'>
                {/* Working at */}
                <div className='flex flex-col'>
                    <p className='px-4'>Working at</p>
                    <img src={item.companyLogo}
                         className={item. classForCompanyLogo}/>
                </div>

                {/* Studied At */}
                <div className='flex flex-col'>
                    <p>Studied at </p>
                    <img src={item.universityLogo}
                    className={item.classForUniversityLogo}/>
                </div>

            </div>

            {/* Learn More Button */}
            <div className='mt-auto mb-4'> 
                <button className='px-28 py-2 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-50 transition-colors duration-200 active:scale-95 transform hover:scale-105'>
                    Learn More
                </button>
            </div>
        </div>
    </div>
  )
}

export default MentorCard