import React from 'react'
import Marquee from 'react-fast-marquee'
import frankfurt from "../../assets/university/frankfurt.svg"
import hochschule from "../../assets/university/hochschule.png";
import universitat from "../../assets/university/universitat.svg";
import universityofeurope from "../../assets/university/universityofeurope.svg";
import technische from "../../assets/university/technische.svg";
import tuhh from "../../assets/university/tuhh.svg";
import schmalkalden from "../../assets/university/schmalkalden.svg";
import worms from "../../assets/university/worms.svg";
import europa from "../../assets/university/europa.svg";
import rwth from "../../assets/university/rwth.svg";
import kit from "../../assets/university/kit.svg";
import jesus from "../../assets/university/jesus.svg";
import hamburg from "../../assets/university/hamburg.svg";
import mannheim from "../../assets/university/mannheim.svg";
import bonn from "../../assets/university/bonn.svg";
import dresden from "../../assets/university/dresden.svg";
import stuttgart from "../../assets/university/stuttgart.svg";
import zuberlin from "../../assets/university/zuberlin.svg";

const universities = [
    {name:"frankfurt", logo: frankfurt, className:"w-32 h-auto"},
     { name: "hochschule", logo: hochschule, className:"w-64 h-auto"},
  { name: "universitat", logo: universitat, className:"w-64 h-auto" },
  { name: "universityofeurope", logo: universityofeurope,className:"w-32 h-auto" },
  { name: "technische", logo: technische ,className:"w-20 h-auto"},
  { name: "tuhh", logo: tuhh },
  { name: "schmalkalden", logo: schmalkalden,className:"w-64 h-auto" },
  { name: "worms", logo: worms,className:"w-48 h-auto" },
  { name: "europa", logo: europa ,className:"w-32 h-auto"},
  { name: "rwth", logo: rwth,className:"w-32 h-auto" },
  { name: "kit", logo: kit,className:"w-40 h-auto" },
  { name: "jesus", logo: jesus,className:"w-32 h-auto" },
  { name: "hamburg", logo: hamburg ,className:"w-48 h-auto"},
  { name: "mannheim", logo: mannheim,className:"w-40 h-auto" },
  { name: "bonn", logo: bonn ,className:"w-32 h-auto"},
  { name: "dresden", logo: dresden ,className:"w-32 h-auto"},
  { name: "stuttgart", logo: stuttgart,className:"w-48 h-auto" },
  { name: "zuberlin", logo: zuberlin,className:"w-32 h-auto" },
]

const TopUniversities = () => {
    return (
        <div className='mt-15' style={{
            fontFamily: "Gilroy-regular"
        }}>
            <section className='container px-8'>
                <div style={{fontFamily:"Gilroy-Bold"}}>
                    <h3 className="text-2xl sm:text-4xl bg-gradient-to-r from-[#ff9422]  to-[#d63715] bg-clip-text text-transparent">
                        Top Universities
                    </h3>
                </div>
                <div className='overflow-hidden'>
                    <Marquee gradient={false}
            speed={50}
            pauseOnHover={true}
            className="py-4">
                <div className='flex space-x-14 items-center justify-center py-4'>
                    {universities.map((university,index)=>(
                        <div key={index}>
                            <img src={university.logo}
                            alt={university.name}
                            className={university.className}
                            />
                        </div>
                    ))}
                </div>


                    </Marquee>
                </div>


            </section>
        </div>
    )
}

export default TopUniversities