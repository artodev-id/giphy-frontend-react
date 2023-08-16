import React, { useRef, useState, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { SiGiphy } from 'react-icons/si';

type SearchType = {
    onSearchChange: (text:string) => void 
}

export const SearchInput:React.FC<SearchType> = (props) => {
    const [val, setVal] = useState<string | undefined>();    
    const typingTimout = useRef<NodeJS.Timeout>()
    
    const onType = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
        if(typingTimout.current) clearTimeout(typingTimout.current);
        
        const { value } = e.target;
        //trigger props change once typing paused
        typingTimout.current = setTimeout(() => {
            props.onSearchChange(value);
        },500)
    },[])

    return(
        <div>
            <div className="mx-auto relative w-full sm:w-[50%] md:w-[60%] lg:w-[50%] ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SiGiphy className='w-4 h-4 text-gray-500 dark:text-gray-400'/>
                </div>
                <input 
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Type to search your Giphy..." 
                    onChange={onType}/>
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <FiSearch className='w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'/>
                </button>
            </div>
        </div>
    )
}