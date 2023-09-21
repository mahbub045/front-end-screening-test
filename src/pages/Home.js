import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    const [menu1Visible, setMenu1Visible] = useState(false);
    const [menu2Visible, setMenu2Visible] = useState(false);
    const [menu3Visible, setMenu3Visible] = useState(false);

    const toggleMenu1 = () => {
        setMenu1Visible(!menu1Visible);
    }
    const toggleMenu2 = () => {
        setMenu2Visible(!menu2Visible);
    }
    const toggleMenu3 = () => {
        setMenu3Visible(!menu3Visible);
    }

    return (
        <>
            <Navbar />
            <div className='flex justify-between'>
                {/* sidebar */}
                <div className='bg-[#9398BF] min-h-screen w-[600px] md:block hidden'>
                    <h2 className='text-black font-medium ml-3 pt-5'>Sidebar</h2>
                    {/* item1 */}
                    <div className="relative flex flex-col items-end gap-2 mt-4 mr-2">
                        <button onClick={toggleMenu1} className="relative block xl:w-[245px] md:w-[180px] h-[29px] bg-white text-gray-700 pr-5 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <span className='absolute inset-y-0 left-0 flex items-center px-2 font-medium text-black'>Item 1</span>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                    <path d="M1 0.5L7 6.5L13 0.5" stroke="black" strokeLinecap="round" />
                                </svg>
                            </div>
                        </button>
                        {menu1Visible && (
                            <ul className="block relative  ">
                                <li>
                                    <button className="px-4 py-1 bg-[#B8B6B6] xl:w-[200px] md:w-[140px] text-black font-medium">
                                        Item A
                                    </button>
                                </li>
                                <li>
                                    <button className="mt-4 px-4 py-1 bg-[#B8B6B6] xl:w-[200px] md:w-[140px] text-black font-medium">
                                        Item B
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                    {/* item2 */}
                    <div className="relative flex flex-col items-end gap-2 mt-4 mr-2">
                        <button onClick={toggleMenu2} className="relative block xl:w-[245px] md:w-[180px] h-[29px] bg-white text-gray-700 pr-5 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <span className='absolute inset-y-0 left-0 flex items-center px-2 font-medium text-black'>Item 2</span>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                    <path d="M1 0.5L7 6.5L13 0.5" stroke="black" strokeLinecap="round" />
                                </svg>
                            </div>
                        </button>
                        {menu2Visible && (
                            <ul className="block relative  ">
                                <li>
                                    <button className="px-4 py-1 bg-[#B8B6B6] xl:w-[200px] md:w-[140px] text-black font-medium">
                                        Item A
                                    </button>
                                </li>
                                <li>
                                    <button className="mt-4 px-4 py-1 bg-[#B8B6B6] xl:w-[200px] md:w-[140px] text-black font-medium">
                                        Item B
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                    {/* item3 */}
                    <div className="relative flex flex-col items-end gap-2 mt-4 mr-2">
                        <button onClick={toggleMenu3} className="relative block xl:w-[245px] md:w-[180px] h-[29px] bg-white text-gray-700 pr-5 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <span className='absolute inset-y-0 left-0 flex items-center px-2 font-medium text-black'>Item 3</span>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                    <path d="M1 0.5L7 6.5L13 0.5" stroke="black" strokeLinecap="round" />
                                </svg>
                            </div>
                        </button>
                        {menu3Visible && (
                            <ul className="block relative  ">
                                <li>
                                    <button className="px-4 py-1 bg-[#B8B6B6] xl:w-[200px] md:w-[140px] text-black font-medium">
                                        Item A
                                    </button>
                                </li>
                                <li>
                                    <button className="mt-4 px-4 py-1 bg-[#B8B6B6] xl:w-[200px] md:w-[140px] text-black font-medium">
                                        Item B
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                    {/* item end */}
                </div>
                {/* sidebar end */}
                {/* main content */}
                <div className='px-14 py-6'>
                    <h2 className='text-center font-medium md:text-4xl text-[28px] pb-4'>Main Content</h2>
                    <p className=''>
                        My country&apos;s name is Bangladesh. Bangladesh is a very small country huge population. It is a medium-developed country in South Asia. We have a very good and progressing economy. It has an area of 147,570 square kilometers. But it has a population of 164 million. That is huge than the area. <br /> <br />

                        But it is still a very beautiful and peaceful country. People of Bangladesh are so friendly with each other. This country has a glorious history of independence. We got independence from Pakistan in 1971 after nine mothers&apos; blood-shedding war. More than 3 million Bangladeshi sacrificed their life in that genocide.<br /> <br />

                        But still, we were able to get our independence. After independence, the newly born country faced lots of hard times and struggles. But it rises very well. Now Bangladesh is one of the best countries to live in South Asia. There are so many beautiful spots to see in this country.<br /> <br />
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home;