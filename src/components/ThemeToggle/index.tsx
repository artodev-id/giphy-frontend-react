import React from 'react';
import { FiMoon } from 'react-icons/fi'
import { useTheme } from '../Context/ThemeProvider';

export const ThemeToggle:React.FC<{}> = () => {
    const {toggleTheme} = useTheme();
    return(
        <button className='fixed z-[99] top-[16px] right-[16px] shadow-lg bg-[linear-gradient(216.56deg,#f9c0d4_5.32%,#cdbdf1_94.32%)] dark:bg-none dark:bg-[#343444] max-[991px]:mb-[5px] rounded-[10px] w-[40px] h-[40px] min-w-[40px] text-[16px] flex justify-center items-center dark:text-white' onClick={toggleTheme}>
            <FiMoon/>
        </button>
    )
}