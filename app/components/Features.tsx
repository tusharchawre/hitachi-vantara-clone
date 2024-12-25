"use client"
import  Button  from './Button'
import { ArrowRight } from '@/public/Icons/Icons'
import { AnimatePresence, motion } from 'motion/react'
import React, { useMemo, useState } from 'react'

function Features() {

    const [activeTab, setActiveTab] = useState("Hybrid Cloud & IaaS")

    const content = useMemo(()=>{
        switch(activeTab){
            case "Hybrid Cloud & IaaS":
                return (
                    <>
                    <div className='md:w-[60%] px-24 flex items-center'>
                        <div className='h-full my-auto'>
                        <h1
                        className='text-[3rem] leading-none font-bold mt-8 mb-4'
                        >Clear the Data Chaos.
                        </h1>
                        <p>Get ultimate data clarity in hybrid cloud. Harmonize all your block, file and object data with just one simple platform.</p>
                        <Button className=' border-s-red-600 border-e-red-400 mt-8 bg-transparent border-red-500 text-black trasition-all duration-150 ease-in-out font-bold'>
                Whats VSP One?
                <ArrowRight />
            </Button>
            </div>
                <motion.img 
                initial={{opacity: 0}}
                animate={{opacity: 1}}  
                transition={{duration: 0.5, type: "spring" , bounce:0}}
                layoutId='Image'
                style={{bottom:0}}
                className='absolute right-0 bottom-0 rounded-br-3xl hidden md:block'
                src="/clear-the-data-chaos_tabsimage.webp" alt="clear-data-chaos" />

                    </div>
                    </>
                )
            case "Data Resilience & Compliance":
                return (
                    <>
                    <div className='md:w-[60%] px-24 flex items-center'>
                        <div className='h-full my-auto'>
                        <h1
                        className='text-[3rem] leading-none font-bold mt-8 mb-4'
                        >Resilience Demands Precision​.
                        </h1>
                        <p>Your data is unique. Your security should be too. We build the most formidable data resilience with focused precision. From hardware, software to intelligent foresight - we understand your business specific needs to stay resilient against future threats.</p>
                        <Button className=' border-s-red-600 border-e-red-400 mt-8 bg-transparent border-red-500 text-black trasition-all duration-150 ease-in-out font-bold'>
                Get Resilient
                <ArrowRight />
            </Button>
            </div>
            <motion.img 
                initial={{opacity: 0}}
                animate={{opacity: 1}}  
                transition={{duration: 0.5, type: "spring" , bounce:0}}
                layoutId='Image'
                style={{bottom:0}}
                className='absolute right-0 bottom-0 rounded-br-3xl hidden md:block'
                src="/cyber-resilience-resources-global-file-systems-rectangular_tabsimage.webp" alt="clear-data-chaos" />

                    </div>
                    </>
                )
            case "AI & Data App Management":
                return (
                    <>
                    <div className='md:w-[60%] px-24 flex items-center'>
                        <div className='h-full my-auto'>
                        <h1
                        className='text-[3rem] leading-none font-bold mt-8 mb-4'
                        >Turn AI into ROI.
                        </h1>
                        <p>With a complete AI solution tailored to your business. From world-trusted AI infrastructure, advanced compute power, deep industry expertise - we optimize AI to get real business results.</p>
                        <Button className=' border-s-red-600 border-e-red-400 mt-8 bg-transparent border-red-500 text-black trasition-all duration-150 ease-in-out font-bold'>
                Meet Hitachi iQ
                <ArrowRight />
            </Button>
            </div>
            <motion.img 
                initial={{opacity: 0}}
                animate={{opacity: 1}}  
                transition={{duration: 0.5, type: "spring" , bounce:0}}
                layoutId='Image'
                style={{bottom:0}}
                className='absolute right-0 bottom-0 rounded-br-3xl hidden md:block'
                src="/panel2-ai-data-app-manage-tab3_tabsimage.webp" alt="clear-data-chaos" />

                    </div>
                    </>
                )
            case "Green IT & Sustainability":
                return (
                    <>
                    <div className='md:w-[60%] px-24 flex items-center'>
                        <div className='h-full my-auto'>
                        <h1
                        className='text-[3rem] leading-none font-bold mt-8 mb-4'
                        >Achieving Sustainability, Today.
                        </h1>
                        <p>Your sustainable data center journey starts here with our unrivaled efficiency in storage performance.</p>
                        <Button className=' border-s-red-600 border-e-red-400 mt-8 bg-transparent border-red-500 text-black trasition-all duration-150 ease-in-out font-bold'>
                Learn More
                <ArrowRight />
            </Button>
            </div>
            <motion.img 
                initial={{opacity: 0}}
                animate={{opacity: 1}}  
                transition={{duration: 0.5, type: "spring" , bounce:0}}
                layoutId='Image'
                style={{bottom:0}}
                className='absolute right-0 bottom-0 rounded-br-3xl hidden md:block'
                src="/leveragesustainablestorage-2880x1398_tabsimage.webp" alt="clear-data-chaos" />

                    </div>
                    </>
                )
        }
    }, [activeTab])

    const tabs = [
        "Hybrid Cloud & IaaS",
        "Data Resilience & Compliance",
        "AI & Data App Management", 
        "Green IT & Sustainability",
    ]




  return (
    <div className='w-full max-w-[76rem] md:h-[500px] h-[700px] mx-auto rounded-3xl bottom-[50%] bg-[#EEF1F5] text-black -translate-y-[30%] py-4 flex items-center justify-around flex-col shadow-2xl '>

            <ul className='flex items-center'>
                {tabs.map((tab)=>(
                    <div key={tab}>
                        <li
                        onMouseEnter={()=> {
                            setActiveTab(tab)
                        }}
                        onMouseLeave={()=> setActiveTab((prev)=> prev)}
                        className='relative py-2 px-8 text-center'
                        >{tab}
                        {activeTab === tab ? (
                            <>
                            <motion.div 
                            layoutId='highlight'
                            className='w-full h-full absolute top-0 left-0 bg-black/10 rounded-lg' />

                            </>
                        ): null}
                        
                        </li>
                        

                    </div>

                    
                ))}
            </ul>

            <div className='h-[70%] py-4 w-full'>
                <AnimatePresence mode="popLayout">
                <motion.div 
                key={activeTab}
                initial={{opacity: 0 }}
                animate={{opacity: 1}}  
                exit={{opacity: 0}}
                transition={{duration: 0.7, type: "spring" , bounce:0}}
                className='w-full h-full'>
                {content}
                </motion.div>
                </AnimatePresence>
            </div>

    </div>
  )
}

export default Features