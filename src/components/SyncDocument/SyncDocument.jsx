import React from 'react'
import { MdDonutSmall } from 'react-icons/md'
import sync from "../../assets/sync/newsync3.png"
const SyncDocument = () => {
  return (
    <div className='flex items-center justify-between px-28 sm:flex sm:flex-col md:flex-row'>
        <div className=''>
            <div className="text-left text-2xl sm:text-4xl mt-8 mb-4  overflow-hidden bg-gradient-to-r from-[#ff9422]  to-[#d63715] bg-clip-text text-transparent"
                  style={{ fontFamily: "Gilroy-Bold" }}>
                <h3>Sync All Documents In The Cloud</h3>
            </div>
            <div>
                <div className='flex flex-col items-start justify-start gap-2'>
                    <div className='flex items-center justify-start gap-2'>
                        <div>
                    <MdDonutSmall/>
                    </div>
                    <div>
                       <p>Discover universities and courses.</p>
                    </div>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <div>
                    <MdDonutSmall/>
                    </div>
                    <div>
                       <p>Ask questions and interact with the community.</p>
                    </div>
                    </div>
                     <div className='flex items-center justify-start gap-2'>
                        <div>
                    <MdDonutSmall/>
                    </div>
                    <div>
                       <p>Latest study abroad news and updates.</p>
                    </div>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <div>
                    <MdDonutSmall/>
                    </div>
                    <div>
                       <p>Track applications and offers.</p>
                    </div>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <div>
                    <MdDonutSmall/>
                    </div>
                    <div>
                       <p>And a lot more.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full sm:w-[50%]  bg-white flex items-center justify-center">
              <div className="bg-white p-2">
                <img src={sync} alt="right" className="object-fill" />
              </div>
            </div>

    </div>
  )
}

export default SyncDocument